'use client';
import { useState, use } from 'react';
import { categories, translations, convert } from '../../../lib/units';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const [lang, setLang] = useState('en');
  const [val, setVal] = useState(1);

  const cat = categories[category];
  if (!cat) {
    return <div className="p-10 text-center text-gray-500">Tool not found.</div>;
  }

  const unitKeys = Object.keys(cat.units);
  const [fromUnit, setFromUnit] = useState(unitKeys[0]);
  const [toUnit, setToUnit] = useState(unitKeys[1] || unitKeys[0]);

  const t = translations[lang];
  const result = convert(val, fromUnit, toUnit, category);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Üst Menü */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tight">OptiConv</Link>
        <div className="flex gap-4 text-sm font-medium text-gray-600 items-center">
          <Link href="/" className="hover:text-blue-600">{t.home}</Link>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200">
            {['en', 'tr', 'es', 'hi'].map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase ${lang === l ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Ayrılmış Araç Arayüzü */}
      <div className="max-w-4xl w-full mx-auto p-6 space-y-8 flex-1 mt-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{cat.name[lang]}</span>
          <h1 className="text-3xl font-black text-gray-900 mt-3 mb-6">{cat.name[lang].split(' ')[0]} Calculator & Dashboard</h1>

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

            <div className="grid grid-cols-2 gap-4">
              <select className="bg-gray-50 border border-gray-200 p-3 rounded-xl font-semibold text-gray-700" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                {unitKeys.map(k => <option key={k} value={k}>{cat.units[k].name[lang]}</option>)}
              </select>
              <select className="bg-gray-50 border border-gray-200 p-3 rounded-xl font-semibold text-gray-700" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                {unitKeys.map(k => <option key={k} value={k}>{cat.units[k].name[lang]}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-6 bg-blue-600 rounded-2xl p-5 text-center text-white shadow-sm">
            <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">{t.resultLabel}</span>
            <div className="text-4xl font-black mt-1 font-mono">{result.toFixed(5)}</div>
          </div>
        </div>

        {/* Temiz Hızlı Erişim Linkleri */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 border-b pb-3 mb-4">
            Quick Conversion Directory
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {unitKeys.map((from) => 
              unitKeys.map((to) => {
                if (from === to) return null;
                return (
                  <Link 
                    key={`${from}-${to}`}
                    href={`/convert/${category}/${from}-to-${to}`}
                    className="text-xs text-blue-600 hover:text-blue-800 bg-gray-50 p-3 rounded-xl border border-gray-100 transition text-center font-medium block truncate"
                  >
                    1 {cat.units[from].name[lang]} to {cat.units[to].name[lang]}
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
