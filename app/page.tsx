'use client';
import { useState } from 'react';
import { categories, translations } from '../lib/units';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <span className="text-2xl font-black text-blue-600 tracking-tight">OptiConv</span>
        <div className="flex gap-4 text-sm font-medium text-gray-600 items-center">
          <a href="#" className="hover:text-blue-600 font-bold">{t.home}</a>
          <a href="/sitemap.xml" className="hover:text-blue-600">{t.sitemap}</a>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200 ml-4">
            {['en', 'tr', 'es', 'hi'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase transition ${lang === l ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:bg-gray-200'}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl w-full mx-auto px-6 pt-12 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{t.title}</h1>
        <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">{t.sub}</p>
      </div>

      <div className="max-w-6xl w-full mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {Object.keys(categories).map((key) => {
          const cat = categories[key];
          return (
            <a 
              key={key} 
              href={`/convert/${key}`}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform w-fit">{cat.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{cat.name[lang]}</h2>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {Object.keys(cat.units).length} Standard Units
                </p>
              </div>
              <div className="mt-6 text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Open Dashboard &rarr;
              </div>
            </a>
          );
        })}
      </div>

      <footer className="border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-400 mt-12">
        &copy; 2026 OptiConv. Precision Multi-Metric Framework.
      </footer>
    </div>
  );
}
