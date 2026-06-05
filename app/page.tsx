'use client';
import { useState } from 'react';
import { families, categories, convert, translations } from '../lib/units';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations['en'];

  // 6 Hızlı kutunun bağımsız state'leri
  const [currencyVal, setCurrencyVal] = useState(100);
  const [currencyFrom, setCurrencyFrom] = useState('usd');
  const [currencyTo, setCurrencyTo] = useState('try');

  const [lengthVal, setLengthVal] = useState(1);
  const [lengthFrom, setLengthFrom] = useState('inch');
  const [lengthTo, setLengthTo] = useState('cm');

  const [volumeVal, setVolumeVal] = useState(1);
  const [volumeFrom, setVolumeFrom] = useState('l');
  const [volumeTo, setVolumeTo] = useState('gal');

  const [massVal, setMassVal] = useState(1);
  const [massFrom, setMassFrom] = useState('kg');
  const [massTo, setMassTo] = useState('lb');

  const [areaVal, setAreaVal] = useState(1);
  const [areaFrom, setAreaFrom] = useState('m2');
  const [areaTo, setAreaTo] = useState('acre');

  const [speedVal, setSpeedVal] = useState(1);
  const [speedFrom, setSpeedFrom] = useState('km_h');
  const [speedTo, setSpeedTo] = useState('mph');

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
          <span className="text-blue-900 text-3xl md:text-4xl font-black tracking-tighter">CONVERTWORLD.COM</span>
        </div>

        <div className="max-w-md mx-auto flex bg-white rounded shadow-sm border border-amber-600/30 overflow-hidden">
          <input type="text" placeholder={t.searchPlaceholder} className="w-full px-4 py-2 text-sm outline-none text-gray-700"/>
          <button className="bg-amber-500 hover:bg-amber-600 px-5 text-white font-bold">🔍</button>
        </div>
      </header>

      {/* NAV BAR */}
      <nav className="bg-amber-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 flex gap-6 shadow-inner overflow-x-auto whitespace-nowrap">
        <a href="#" className="hover:underline">Most Popular</a>
        <a href="#" className="hover:underline">By Family</a>
        <a href="/sitemap.xml" className="hover:underline">Site Map</a>
        <span className="ml-auto text-amber-200 hover:text-white cursor-pointer">Support Us</span>
      </nav>

      {/* QUICK CONVERSIONS (6'LI KUTU) */}
      <main className="max-w-6xl w-full mx-auto p-4 md:p-8 flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-600 tracking-tight">Quick conversion</h2>
          <p className="text-xs text-gray-500 mt-1">
            Access our most popular converters below to quickly <strong>convert currency rates, distance, temperature, area</strong> and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* CURRENCY CARD */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">Currency</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-mono" value={currencyVal} onChange={(e) => setCurrencyVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)}>
                {Object.keys(categories.currency?.units || {}).map(k => <option key={k} value={k}>{categories.currency.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-500 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50" value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)}>
                {Object.keys(categories.currency?.units || {}).map(k => <option key={k} value={k}>{categories.currency.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(currencyVal, currencyFrom, currencyTo, 'currency').toFixed(2)} {currencyTo.toUpperCase()}
              </div>
              <a href="/convert/currency" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* LENGTH CARD (İNÇ KAÇ CM BURADAN DA ÇALIŞIR) */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">Length</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-mono" value={lengthVal} onChange={(e) => setLengthVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={lengthFrom} onChange={(e) => setLengthFrom(e.target.value)}>
                {Object.keys(categories.length?.units || {}).map(k => <option key={k} value={k}>{categories.length.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-500 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50" value={lengthTo} onChange={(e) => setLengthTo(e.target.value)}>
                {Object.keys(categories.length?.units || {}).map(k => <option key={k} value={k}>{categories.length.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(lengthVal, lengthFrom, lengthTo, 'length').toFixed(4)} {lengthTo}
              </div>
              <a href="/convert/length" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* VOLUME CARD */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">Volume</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-mono" value={volumeVal} onChange={(e) => setVolumeVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={volumeFrom} onChange={(e) => setVolumeFrom(e.target.value)}>
                {Object.keys(categories.volume?.units || {}).map(k => <option key={k} value={k}>{categories.volume.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-500 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50" value={volumeTo} onChange={(e) => setVolumeTo(e.target.value)}>
                {Object.keys(categories.volume?.units || {}).map(k => <option key={k} value={k}>{categories.volume.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(volumeVal, volumeFrom, volumeTo, 'volume').toFixed(4)} {volumeTo}
              </div>
              <a href="/convert/volume" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* MASS CARD */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">Mass</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-mono" value={massVal} onChange={(e) => setMassVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={massFrom} onChange={(e) => setMassFrom(e.target.value)}>
                {Object.keys(categories.weight?.units || {}).map(k => <option key={k} value={k}>{categories.weight.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-500 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50" value={massTo} onChange={(e) => setMassTo(e.target.value)}>
                {Object.keys(categories.weight?.units || {}).map(k => <option key={k} value={k}>{categories.weight.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(massVal, massFrom, massTo, 'weight').toFixed(4)} {massTo}
              </div>
              <a href="/convert/weight" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* AREA CARD */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">Area</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-mono" value={areaVal} onChange={(e) => setAreaVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={areaFrom} onChange={(e) => setAreaFrom(e.target.value)}>
                {Object.keys(categories.area?.units || {}).map(k => <option key={k} value={k}>{categories.area.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-500 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50" value={areaTo} onChange={(e) => setAreaTo(e.target.value)}>
                {Object.keys(categories.area?.units || {}).map(k => <option key={k} value={k}>{categories.area.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(areaVal, areaFrom, areaTo, 'area').toFixed(4)} {areaTo}
              </div>
              <a href="/convert/area" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* SPEED CARD */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">Speed</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-mono" value={speedVal} onChange={(e) => setSpeedVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={speedFrom} onChange={(e) => setSpeedFrom(e.target.value)}>
                {Object.keys(categories.speed?.units || {}).map(k => <option key={k} value={k}>{categories.speed.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-500 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50" value={speedTo} onChange={(e) => setSpeedTo(e.target.value)}>
                {Object.keys(categories.speed?.units || {}).map(k => <option key={k} value={k}>{categories.speed.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(speedVal, speedFrom, speedTo, 'speed').toFixed(4)} {speedTo}
              </div>
              <a href="/convert/speed" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

        </div>
      </main>

      {/* DETAYLI MAVİ FOOTER (TÜM 50 KATEGORİ BURADA LİSTELENİR) */}
      <section className="bg-[#d9e6f2] border-t border-blue-300 p-6 md:p-10">
        <div className="max-w-6xl w-full mx-auto">
          <h3 className="text-lg font-black text-blue-900 uppercase tracking-wide mb-8">{t.byFamily}</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs text-blue-800 font-medium">
            {Object.keys(families).map((famKey) => {
              const family = families[famKey];
              return (
                <div key={famKey} className="space-y-2">
                  <h4 className="font-bold text-blue-950 text-sm border-b border-blue-300/40 pb-1 uppercase">{family.name[lang] || family.name['en']}</h4>
                  <ul className="space-y-1.5">
                    {Object.keys(family.categories).map((catKey) => {
                      const cat = family.categories[catKey];
                      return (
                        <li key={catKey}>
                          <a href={`/convert/${catKey}`} className="hover:underline flex items-center gap-1">
                            <span>+</span> <span>{cat.name[lang] || cat.name['en']}</span>
                          </a>
                        </li>
                      );
                    })}
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
