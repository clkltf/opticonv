import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://opticonv.com';
  const languages = ['en', 'tr', 'es', 'hi'];
  
  const routes = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    ...routes,
  ];
}
