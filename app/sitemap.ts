import type { MetadataRoute } from 'next';
import { poojas, seoSlugs } from './poojas/data';

const siteUrl = 'https://www.gokarnapurohita.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/poojas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...poojas.map(([slug]) => ({
      url: `${siteUrl}/poojas/${seoSlugs[slug] ?? slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
