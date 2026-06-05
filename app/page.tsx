'use client';
import { useState } from 'react';
import { categories, translations, convert } from '../lib/units';

export default function Home() {
  const [lang, setLang] = useState('en');
  const [catKey, setCatKey] = useState('length');
  const [val, setVal] = useState(1);
  
  const currentCat = categories[catKey];
  const unitKeys = Object.keys(currentCat.units);
  
  const [fromUnit, setFromUnit] = useState(unitKeys[0]);
  const [toUnit, setToUnit] = useState(unitKeys[1] || unitKeys[0]);

  const handleCategoryChange = (key: string) => {
    setCatKey(key);
    const newKeys = Object.keys(categories[key].units);
    setFromUnit(newKeys[0]);
    setToUnit(newKeys[1] || newKeys[0]);
  };

  const t = translations[lang];
  const result = convert(val, fromUnit, toUnit, catKey);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Üst Navbar Menüsü */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <span className="text-2xl font-black text-blue-600 tracking-tight">OptiConv</span>
        <div className="flex gap-4 text-sm font-medium text-gray-600 items-center">
          <a href="#" className="hover:text-blue-600">{t.home}</a>
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

      {/* Ana Gövde Düzeni */}
      <div className="max-w-7xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1">
        
        {/* Sol Menü: Kategoriler */}
        <aside className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-5 h-fit space-y-1 shadow-sm">
          <h2 className="text-xs uppercase font-bold text-gray-400 tracking-widest px-3 mb-3">{t.selectCat}</h2>
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`w-full p-3 rounded-xl text-sm font-semibold transition-all text-left flex items-center justify-between ${catKey === key ? 'bg-blue-600 text-white shadow-md' : 'bg-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-900'}`}
            >
              <span>{categories[key].name[lang]}</span>
            </button>
          ))}
        </aside>

        {/* Sağ Alan: Hesaplayıcı ve Yoğun SEO Linkleri */}
        <div className="lg:col-span-3 space-y-8">
          {/* Aktif Dönüştürücü Kartı */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <header className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{currentCat.name[lang]}</span>
              <h1 className="text-2xl md:text-3xl font-extrabold mt-1 text-gray-900">{t.sub}</h1>
            </header>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-gray-400 mb-2 tracking-wider">{t.inputLabel}</label>
                <input
                  type="number"
                  className="w-full bg-gray-50 text-gray-900 text-2xl p-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all font-mono font-bold"
                  value={val}
                  onChange={(e) => setVal(Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="bg-gray-50 border border-gray-200 p-3 rounded-xl font-semibold text-gray-700 focus:outline-none" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                  {unitKeys.map(k => <option key={k} value={k}>{currentCat.units[k].name[lang]}</option>)}
                </select>
                <select className="bg-gray-50 border border-gray-200 p-3 rounded-xl font-semibold text-gray-700 focus:outline-none" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                  {unitKeys.map(k => <option key={k} value={k}>{currentCat.units[k].name[lang]}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-6 bg-blue-600 rounded-xl p-5 text-center text-white shadow-sm">
              <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">{t.resultLabel}</span>
              <div className="text-4xl font-black mt-1 font-mono">
                {result.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
              </div>
            </div>
          </div>

          {/* Google Otomatik Arama Linkleri (Convertworld Deneyimi) */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 border-b pb-3 mb-4">
              Popular {currentCat.name[lang]} Integrations (Google SEO Landing Pathways)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {unitKeys.map((from) => 
                unitKeys.map((to) => {
                  if (from === to) return null;
                  return (
                    <a 
                      key={`${from}-${to}`}
                      href={`/convert/${catKey}/${from}-to-${to}`}
                      className="text-xs text-blue-600 hover:text-blue-800 bg-gray-50 hover:bg-blue-50/60 p-3 rounded-xl border border-gray-100 transition truncate font-medium text-center"
                    >
                      1 {currentCat.units[from].name[lang]} → {currentCat.units[to].name[lang]}
                    </a>
                  );
                })
              )}
            </div>
          </div>
        </div>

      </div>
      <footer className="border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-400">
        &copy; 2026 OptiConv. Clean, Light, Fast, and Optimized for Global Audiences.
      </footer>
    </div>
  );
}
