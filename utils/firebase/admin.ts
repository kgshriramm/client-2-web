import { applicationDefault, cert, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { existsSync, readFileSync } from 'node:fs';

function parseServiceAccount(value: string) {
  let serviceAccount: unknown;

  try {
    serviceAccount = JSON.parse(value);
  } catch {
    throw new Error('Firebase service account is not valid JSON.');
  }

  if (
    !serviceAccount ||
    typeof serviceAccount !== 'object' ||
    !('project_id' in serviceAccount) ||
    typeof serviceAccount.project_id !== 'string' ||
    !('client_email' in serviceAccount) ||
    typeof serviceAccount.client_email !== 'string' ||
    !('private_key' in serviceAccount) ||
    typeof serviceAccount.private_key !== 'string'
  ) {
    throw new Error('Firebase service account must include project_id, client_email, and private_key.');
  }

  return cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
  });
}

function serviceAccountCredential(value: string, variableName: string) {
  const trimmed = value.trim();
  if (!trimmed) throw new Error(`${variableName} is empty.`);

  if (trimmed.startsWith('{')) return parseServiceAccount(trimmed);

  if (variableName === 'GOOGLE_APPLICATION_CREDENTIALS' && existsSync(trimmed)) {
    return parseServiceAccount(readFileSync(trimmed, 'utf8'));
  }

  try {
    return parseServiceAccount(Buffer.from(trimmed, 'base64').toString('utf8'));
  } catch {
    throw new Error(
      `${variableName} must contain service-account JSON${variableName === 'GOOGLE_APPLICATION_CREDENTIALS' ? ' or a path to a JSON file' : ' or base64-encoded service-account JSON'}.`,
    );
  }
}

function initializeFirebaseAdmin() {
  if (getApps().length > 0) return getApp();

  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  const credentialsPathOrValue = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  let credential;

  if (serviceAccount) {
    credential = serviceAccountCredential(serviceAccount, 'FIREBASE_SERVICE_ACCOUNT');
  } else if (credentialsPathOrValue) {
    credential = serviceAccountCredential(credentialsPathOrValue, 'GOOGLE_APPLICATION_CREDENTIALS');
  } else if (process.env.VERCEL) {
    throw new Error('Firebase credentials are missing. Set FIREBASE_SERVICE_ACCOUNT in Vercel.');
  } else {
    credential = applicationDefault();
  }

  return initializeApp({
    credential,
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

export function getAdminFirestore() {
  return getFirestore(initializeFirebaseAdmin());
}
