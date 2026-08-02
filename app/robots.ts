import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    host: 'www.gokarnapurohita.com',
    sitemap: 'https://www.gokarnapurohita.com/sitemap.xml'
  };
}
