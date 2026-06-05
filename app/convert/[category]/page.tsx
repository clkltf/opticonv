'use client';
import { useState, use } from 'react';
import { families, categories, convert, translations } from '../../../lib/units';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations['en'];

  const cat = categories[category];
  if (!cat) {
    return <div className="p-10 text-center text-gray-500">Converter tool not found.</div>;
  }

  const unitKeys = Object.keys(cat.units || {});
  const [val, setVal] = useState(1);
  const [fromUnit, setFromUnit] = useState(unitKeys[0]);
  const [toUnit, setToUnit] = useState(unitKeys[1] || unitKeys[0]);

  const result = convert(val, fromUnit, toUnit, category);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      
      {/* SARI/ALTIN ÜST BANNER */}
      <header className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 pt-8 pb-6 px-4 text-center relative shadow-sm">
        <div className="absolute top-2 right-4 flex gap-1 bg-black/10 p-1 rounded">
          {['en', 'tr', 'es'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-2 py-0.5 text-xs font-bold uppercase rounded ${lang === l ? 'bg-white text-amber-600' : 'text-white hover:bg-white/20'}`}>
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-blue-900 text-3xl font-extrabold">&larr;&rarr;</span>
          <Link href="/" className="text-blue-900 text-3xl md:text-4xl font-black tracking-tighter hover:opacity-90">CONVERTWORLD.COM</Link>
        </div>

        <div className="max-w-md mx-auto flex bg-white rounded shadow-sm border border-amber-600/30 overflow-hidden">
          <input type="text" placeholder={t.searchPlaceholder} className="w-full px-4 py-2 text-sm outline-none text-gray-700"/>
          <button className="bg-amber-500 hover:bg-amber-600 px-5 text-white font-bold">🔍</button>
        </div>
      </header>

      {/* NAV BAR */}
      <nav className="bg-amber-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 flex gap-6 shadow-inner overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:underline">Most Popular</Link>
        <Link href="/" className="hover:underline">By Family</Link>
        <a href="/sitemap.xml" className="hover:underline">Site Map</a>
        <span className="ml-auto text-amber-200 hover:text-white cursor-pointer">Support Us</span>
      </nav>

      {/* AYRILMIŞ ÖZEL ARAÇ PANELİ */}
      <main className="max-w-4xl w-full mx-auto p-4 md:p-8 flex-1">
        <div className="bg-white border border-dashed border-gray-400 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">
            <span>{cat.icon}</span> <span>{cat.name[lang] || cat.name['en']}</span>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-6">Extended {cat.name[lang] || cat.name['en']} Converter</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Value:</label>
              <input
                type="number"
                className="w-full bg-gray-50 text-gray-900 text-base p-2.5 rounded border border-gray-300 outline-none focus:border-amber-500 font-mono font-bold"
                value={val}
                onChange={(e) => setVal(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1.5 tracking-wider">From:</label>
              <select className="w-full bg-gray-50 border border-gray-300 p-2.5 rounded font-semibold text-gray-700 text-sm cursor-pointer outline-none" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                {unitKeys.map(k => <option key={k} value={k}>{cat.units[k].name[lang] || cat.units[k].name['en'] || k}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1.5 tracking-wider">To:</label>
              <select className="w-full bg-gray-50 border border-gray-300 p-2.5 rounded font-semibold text-gray-700 text-sm cursor-pointer outline-none" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                {unitKeys.map(k => <option key={k} value={k}>{cat.units[k].name[lang] || cat.units[k].name['en'] || k}</option>)}
              </select>
            </div>
          </div>

          {/* SADE VE ZARİF CONVERTWORLD SONUÇ ŞERİDİ */}
          <div className="mt-6 bg-blue-50 border border-blue-100 p-3 flex flex-col sm:flex-row items-center justify-between rounded text-blue-900 font-medium">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Conversion Result</span>
            <div className="text-lg font-black font-mono mt-1 sm:mt-0">
              {val} {cat.units[fromUnit]?.name[lang] || fromUnit} = {result.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 6 })} {cat.units[toUnit]?.name[lang] || toUnit}
            </div>
          </div>
        </div>

        {/* HIZLI GEÇİŞ DİZİNİ (PROGRAMMATİK SEO İÇİN) */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b pb-2 mb-4">
            Quick Reference Navigation Directory
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {unitKeys.map((from) => 
              unitKeys.map((to) => {
                if (from === to) return null;
                return (
                  <Link 
                    key={`${from}-${to}`}
                    href={`/convert/${category}/${from}-to-${to}`}
                    className="text-xs text-blue-600 hover:text-blue-800 bg-gray-50 hover:bg-blue-100/50 p-2.5 rounded border border-gray-100 transition text-center font-medium block truncate"
                  >
                    {cat.units[from]?.name[lang] || from} to {cat.units[to]?.name[lang] || to}
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </main>

      {/* DİNAMİK AİLE FOOTER ALANI */}
      <section className="bg-[#d9e6f2] border-t border-blue-300 p-6 md:p-10">
        <div className="max-w-6xl w-full mx-auto">
          <h3 className="text-md font-black text-blue-900 uppercase tracking-wide mb-8">{t.byFamily}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs text-blue-800 font-medium">
            {Object.keys(families).map((famKey) => {
              const family = families[famKey];
              return (
                <div key={famKey} className="space-y-2">
                  <h4 className="font-bold text-blue-950 text-sm border-b border-blue-300/40 pb-1 uppercase">{family.name[lang] || family.name['en']}</h4>
                  <ul className="space-y-1.5">
                    {Object.keys(family.categories).map((cKey) => (
                      <li key={cKey}>
                        <Link href={`/convert/${cKey}`} className="hover:underline flex items-center gap-1">
                          <span>+</span> <span>{family.categories[cKey].name[lang] || family.categories[cKey].name['en']}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#c2d6e8] py-4 text-center text-xs text-blue-950 font-semibold border-t border-blue-300/50">
        &copy; 2005-2026 Convertworld.com | Powered by OptiConv Framework.
      </footer>
    </div>
  );
}
