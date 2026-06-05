import { MetadataRoute } from 'next';
import { categories } from '../lib/units';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://opticonv.com'; // Kendi domain adresini buraya yazabilirsin

  // 1. Ana Sayfa
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 }
  ];

  // 2. Kategori Sayfaları (/convert/length, /convert/speed vb.)
  const categoryRoutes = Object.keys(categories).map((catKey) => ({
    url: `${baseUrl}/convert/${catKey}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  // 3. Dev Kombinasyon Ağı (Binlerce Alt İndex Sayfası)
  const combinationRoutes: any[] = [];

  Object.keys(categories).forEach((catKey) => {
    const cat = categories[catKey];
    const unitKeys = Object.keys(cat.units || {});

    // Tüm birimleri birbiriyle eşleştirip link havuzuna atıyoruz (Örn: inch-to-cm)
    unitKeys.forEach((from) => {
      unitKeys.forEach((to) => {
        if (from !== to) {
          combinationRoutes.push({
            url: `${baseUrl}/convert/${catKey}/${from}-to-${to}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6
          });
        }
      });
    });
  });

  return [...staticRoutes, ...categoryRoutes, ...combinationRoutes];
}
