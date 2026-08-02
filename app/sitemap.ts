import type { MetadataRoute } from 'next';
import { poojas } from './poojas/data';

const siteUrl = 'https://www.gokarnapurohita.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/poojas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...poojas.map(([slug]) => ({
      url: `${siteUrl}/poojas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
