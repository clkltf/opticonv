'use client';
import { useState } from 'react';
import { families, translations } from '../lib/units';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Üst Kurumsal Menü */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-black text-blue-600 tracking-tight">OptiConv</span>
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider hidden sm:inline">Alternative Layout</span>
        </div>
        <div className="flex gap-4 text-sm font-medium text-gray-600 items-center">
          <a href="#" className="hover:text-blue-600 font-bold">{t.home}</a>
          <a href="/sitemap.xml" className="hover:text-blue-600">{t.sitemap}</a>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200 ml-2">
            {['en', 'tr', 'es', 'hi'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase transition ${lang === l ? 'bg-blue-600 text-white shadow' : 'text-gray-500 hover:bg-gray-200'}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Büyük Başlık Alanı */}
      <div className="max-w-6xl w-full mx-auto px-6 pt-12 pb-6 text-center border-b border-gray-200/60">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">{t.title}</h1>
        <p className="text-gray-500 mt-2 text-md md:text-lg max-w-xl mx-auto">{t.sub}</p>
      </div>

      {/* CONVERTWORLD STİLİ: FAMILY GRID BÖLÜMÜ */}
      <div className="max-w-6xl w-full mx-auto p-6 flex-1">
        <h2 className="text-xl font-black text-gray-900 mb-8 border-l-4 border-blue-600 pl-3 uppercase tracking-wide">
          {t.byFamily}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(families).map((famKey) => {
            const family = families[famKey];
            return (
              <div key={famKey} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                {/* Aile Başlığı */}
                <h3 className="text-md font-black text-blue-600 uppercase tracking-wider border-b pb-2 mb-4">
                  {family.name[lang] || family.name['en']}
                </h3>
                
                {/* O Aileye Ait Alt Kategoriler */}
                <div className="flex flex-col gap-1.5">
                  {Object.keys(family.categories).map((catKey) => {
                    const cat = family.categories[catKey];
                    return (
                      <a
                        key={catKey}
                        href={`/convert/${catKey}`}
                        className="text-sm text-gray-700 hover:text-blue-600 font-medium py-1.5 px-2 rounded-lg hover:bg-blue-50/50 transition flex items-center justify-between"
                      >
                        <span>{cat.name[lang] || cat.name['en']}</span>
                        <span className="text-xs text-gray-300 group-hover:text-blue-400 font-mono">&rarr;</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-400 mt-12">
        &copy; 2005-2026 OptiConv.com Global Network Framework. All rights reserved.
      </footer>
    </div>
  );
}
