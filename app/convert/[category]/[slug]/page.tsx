import { categories, convert, families } from '../../../../lib/units';
import Link from 'next/link';

export async function generateMetadata({ params }: any) {
  const { category, slug } = await params;
  const [from, to] = slug.split('-to-');
  const cat = categories[category];
  if (!cat || !cat.units[from] || !cat.units[to]) return { title: 'Unit Converter' };
  return {
    title: `Convert 1 ${cat.units[from].name.en || from} to ${cat.units[to].name.en || to} | OptiConv`,
    description: `Instant metric calculation directory for 1 ${cat.units[from].name.en || from} to ${cat.units[to].name.en || to}.`,
  };
}

export default async function SeoPage({ params }: any) {
  const { category, slug } = await params;
  const [from, to] = slug.split('-to-');
  const cat = categories[category];
  
  if (!cat || !cat.units[from] || !cat.units[to]) {
    return <div className="p-10 text-center text-gray-500">Conversion mismatch error.</div>;
  }

  const defaultResult = convert(1, from, to, category);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      
      {/* SARI/ALTIN ÜST BANNER */}
      <header className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 pt-8 pb-6 px-4 text-center relative shadow-sm">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-blue-900 text-3xl font-extrabold">&larr;&rarr;</span>
          <Link href="/" className="text-blue-900 text-3xl md:text-4xl font-black tracking-tighter">CONVERTWORLD.COM</Link>
        </div>
      </header>

      {/* NAV BAR */}
      <nav className="bg-amber-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 flex gap-6 shadow-inner">
        <Link href="/" className="hover:underline">Most Popular</Link>
        <Link href="/" className="hover:underline">By Family</Link>
        <a href="/sitemap.xml" className="hover:underline">Site Map</a>
      </nav>

      {/* GOOGLE'DAN GELEN KİŞİYİ KARŞILAMA ALANI */}
      <main className="max-w-2xl w-full mx-auto p-4 md:p-8 flex-1 mt-6">
        <div className="bg-white border border-dashed border-gray-400 rounded-lg p-6 shadow-sm">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">{cat.name.en} Ratio</span>
          <h1 className="text-2xl font-black text-gray-900 mt-2 mb-6">How much is 1 {cat.units[from].name.en || from} in {cat.units[to].name.en || to}?</h1>
          
          <div className="bg-blue-50 border border-blue-100 p-4 rounded text-center text-lg font-bold font-mono text-blue-900">
            1 {cat.units[from].name.en || from} = {defaultResult.toLocaleString('en', { maximumFractionDigits: 6 })} {cat.units[to].name.en || to}
          </div>

          <div className="border-t border-gray-100 mt-6 pt-6 text-center">
            <Link href={`/convert/${category}`} className="text-sm font-semibold text-blue-600 hover:underline">
              &larr; Open Complete {cat.name.en} Dashboard & Tables
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER DIZINI */}
      <section className="bg-[#d9e6f2] border-t border-blue-300 p-6 md:p-10 mt-12">
        <div className="max-w-6xl w-full mx-auto">
          <h3 className="text-md font-black text-blue-900 uppercase tracking-wide mb-6">Converters by family</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs text-blue-800 font-medium">
            {Object.keys(families).map((famKey) => (
              <div key={famKey} className="space-y-2">
                <h4 className="font-bold text-blue-950 text-sm border-b border-blue-300/40 pb-1 uppercase">{families[famKey].name.en}</h4>
                <ul className="space-y-1.5">
                  {Object.keys(families[famKey].categories).map((cKey) => (
                    <li key={cKey}>
                      <Link href={`/convert/${cKey}`} className="hover:underline">+ {families[famKey].categories[cKey].name.en}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#c2d6e8] py-4 text-center text-xs text-blue-950 font-semibold border-t border-blue-300/50">
        &copy; 2005-2026 Convertworld.com | Powered by OptiConv Framework.
      </footer>
    </div>
  );
}
