'use client';
import { useState } from 'react';
import { categories, translations, universalConvert } from '../lib/units';

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
  const result = universalConvert(val, fromUnit, toUnit, catKey);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col">
      {/* ÜST MENÜ (NAVBAR) */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">OPTICONV</span>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-400">
            <a href="#" className="hover:text-white transition">{t.home}</a>
            <a href="/sitemap.xml" className="hover:text-white transition">{t.sitemap}</a>
            <a href="#" className="hover:text-white transition">{t.contact}</a>
          </div>
        </div>
        
        {/* DİL SEÇİCİ MENÜ */}
        <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {['en', 'tr', 'es', 'hi'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition ${lang === l ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:bg-slate-800'}`}>
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* ANA İÇERİK ALANI (YAN MENÜ + HESAPLAYICI KART) */}
      <div className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 md:p-8">
        
        {/* SOL KATEGORİ MENÜSÜ */}
        <aside className="lg:col-span-1 bg-slate-950/40 border border-slate-800/60 rounded-3xl p-5 h-fit space-y-2">
          <h2 className="text-xs uppercase font-bold text-slate-500 tracking-widest px-3 mb-4">{t.selectCat}</h2>
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`w-full p-3.5 rounded-xl text-sm font-semibold transition-all text-left flex items-center justify-between ${catKey === key ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-white'}`}
            >
              <span>{categories[key].name[lang]}</span>
            </button>
          ))}
        </aside>

        {/* ORTA DÖNÜŞTÜRÜCÜ MOTORU */}
        <section className="lg:col-span-3 flex flex-col justify-center">
          <div className="bg-slate-950/30 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            <header className="mb-8">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{currentCat.name[lang]}</span>
              <h1 className="text-3xl md:text-4xl font-extrabold mt-1 text-white">{t.sub}</h1>
            </header>

            <div className="space-y-5">
              {/* Değer Girişi */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-500 mb-2 tracking-wider">{t.inputLabel}</label>
                <input
                  type="number"
                  className="w-full bg-slate-900 text-white text-3xl p-5 rounded-2xl border border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-900/30 outline-none transition-all font-mono font-bold shadow-inner"
                  value={val}
                  onChange={(e) => setVal(Number(e.target.value))}
                />
              </div>

              {/* Birim Seçim Alanları */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                  <select
                    className="w-full bg-transparent text-white p-3 font-semibold focus:outline-none cursor-pointer"
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                  >
                    {unitKeys.map((k) => (
                      <option key={k} value={k} className="bg-slate-900 text-white">{currentCat.units[k]?.name[lang] || k}</option>
                    ))}
                  </select>
                </div>
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                  <select
                    className="w-full bg-transparent text-white p-3 font-semibold focus:outline-none cursor-pointer"
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                  >
                    {unitKeys.map((k) => (
                      <option key={k} value={k} className="bg-slate-900 text-white">{currentCat.units[k]?.name[lang] || k}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* SONUÇ EKRANI */}
            <div className="mt-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-6 text-center shadow-xl border border-blue-500/20">
              <span className="text-blue-100 text-xs font-bold uppercase tracking-widest opacity-80">{t.resultLabel}</span>
              <div className="text-4xl md:text-5xl font-black mt-2 tracking-tight break-all font-mono">
                {result.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/20 py-6 text-center text-xs text-slate-500">
        &copy; 2026 OptiConv. All rights reserved. Built for global scaling.
      </footer>
    </div>
  );
}
