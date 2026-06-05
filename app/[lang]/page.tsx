'use client';
import { useState, use } from 'react';
import { families, categories, convert, translations } from '../../lib/units';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const router = useRouter();
  const validLangs = ['en', 'es', 'hi', 'zh'];
  const currentLang = validLangs.includes(lang) ? lang : 'en';
  
  const t = translations[currentLang];

  // 6 Hızlı kutunun bağımsız değer hafızaları
  const [lengthVal, setLengthVal] = useState(1);
  const [lengthFrom, setLengthFrom] = useState('inch');
  const [lengthTo, setLengthTo] = useState('m');

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

  const [powerVal, setPowerVal] = useState(1);
  const [powerFrom, setPowerFrom] = useState('w');
  const [powerTo, setPowerTo] = useState('hp');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      
      {/* SARI/ALTIN BANNER */}
      <header className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 pt-8 pb-6 px-4 text-center relative shadow-sm">
        <div className="absolute top-2 right-4 flex gap-1 bg-black/10 p-1 rounded">
          {validLangs.map((l) => (
            <button key={l} onClick={() => router.push(`/${l}`)} className={`px-2.5 py-0.5 text-xs font-bold uppercase rounded transition ${currentLang === l ? 'bg-white text-amber-600 shadow-sm' : 'text-white hover:bg-white/20'}`}>
              {l === 'zh' ? '中文' : l}
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
        <Link href={`/${currentLang}`} className="hover:underline">Most Popular</Link>
        <Link href={`/${currentLang}`} className="hover:underline">By Family</Link>
        <a href="/sitemap.xml" className="hover:underline">Site Map</a>
      </nav>

      {/* QUICK CONVERSIONS (6'LI TURUNCU BAŞLIKLI KUTULAR) */}
      <main className="max-w-6xl w-full mx-auto p-4 md:p-8 flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-600 tracking-tight">{t.quick}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* KUTU 1: LENGTH */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">{categories.length.name[currentLang]}</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-bold font-mono" value={lengthVal} onChange={(e) => setLengthVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={lengthFrom} onChange={(e) => setLengthFrom(e.target.value)}>
                {Object.keys(categories.length.units).map(k => <option key={k} value={k}>{categories.length.units[k].name[currentLang]}</option>)}
              </select>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-1" value={lengthTo} onChange={(e) => setLengthTo(e.target.value)}>
                {Object.keys(categories.length.units).map(k => <option key={k} value={k}>{categories.length.units[k].name[currentLang]}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(lengthVal, lengthFrom, lengthTo, 'length').toFixed(4)} {lengthTo}
              </div>
              <Link href={`/${currentLang}/convert/${families.dimension.categories.length.slugs[currentLang]}`} className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</Link>
            </div>
          </div>

          {/* KUTU 2: MASS */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">{categories.weight.name[currentLang]}</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-bold font-mono" value={massVal} onChange={(e) => setMassVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={massFrom} onChange={(e) => setMassFrom(e.target.value)}>
                {Object.keys(categories.weight.units).map(k => <option key={k} value={k}>{categories.weight.units[k].name[currentLang]}</option>)}
              </select>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-1" value={massTo} onChange={(e) => setMassTo(e.target.value)}>
                {Object.keys(categories.weight.units).map(k => <option key={k} value={k}>{categories.weight.units[k].name[currentLang]}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(massVal, massFrom, massTo, 'weight').toFixed(4)} {massTo}
              </div>
              <Link href={`/${currentLang}/convert/${families.mechanics.categories.weight.slugs[currentLang]}`} className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</Link>
            </div>
          </div>

          {/* KUTU 3: VOLUME */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">{categories.volume.name[currentLang]}</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-bold font-mono" value={volumeVal} onChange={(e) => setVolumeVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={volumeFrom} onChange={(e) => setVolumeFrom(e.target.value)}>
                {Object.keys(categories.volume.units).map(k => <option key={k} value={k}>{categories.volume.units[k].name[currentLang]}</option>)}
              </select>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-1" value={volumeTo} onChange={(e) => setVolumeTo(e.target.value)}>
                {Object.keys(categories.volume.units).map(k => <option key={k} value={k}>{categories.volume.units[k].name[currentLang]}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(volumeVal, volumeFrom, volumeTo, 'volume').toFixed(4)} {volumeTo}
              </div>
              <Link href={`/${currentLang}/convert/${families.dimension.categories.volume.slugs[currentLang]}`} className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</Link>
            </div>
          </div>

          {/* KUTU 4: AREA */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">{categories.area.name[currentLang]}</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-bold font-mono" value={areaVal} onChange={(e) => setAreaVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={areaFrom} onChange={(e) => setAreaFrom(e.target.value)}>
                {Object.keys(categories.area.units).map(k => <option key={k} value={k}>{categories.area.units[k].name[currentLang]}</option>)}
              </select>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-1" value={areaTo} onChange={(e) => setAreaTo(e.target.value)}>
                {Object.keys(categories.area.units).map(k => <option key={k} value={k}>{categories.area.units[k].name[currentLang]}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(areaVal, areaFrom, areaTo, 'area').toFixed(4)} {areaTo}
              </div>
              <Link href={`/${currentLang}/convert/${families.dimension.categories.area.slugs[currentLang]}`} className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</Link>
            </div>
          </div>

          {/* KUTU 5: SPEED */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">{categories.speed.name[currentLang]}</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-bold font-mono" value={speedVal} onChange={(e) => setSpeedVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={speedFrom} onChange={(e) => setSpeedFrom(e.target.value)}>
                {Object.keys(categories.speed.units).map(k => <option key={k} value={k}>{categories.speed.units[k].name[currentLang]}</option>)}
              </select>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-1" value={speedTo} onChange={(e) => setSpeedTo(e.target.value)}>
                {Object.keys(categories.speed.units).map(k => <option key={k} value={k}>{categories.speed.units[k].name[currentLang]}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(speedVal, speedFrom, speedTo, 'speed').toFixed(4)} {speedTo}
              </div>
              <Link href={`/${currentLang}/convert/${families.motion.categories.speed.slugs[currentLang]}`} className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</Link>
            </div>
          </div>

          {/* KUTU 6: POWER */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline">{categories.power.name[currentLang]}</h3>
              <label className="block text-xs text-gray-500 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-bold font-mono" value={powerVal} onChange={(e) => setPowerVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2" value={powerFrom} onChange={(e) => setPowerFrom(e.target.value)}>
                {Object.keys(categories.power.units).map(k => <option key={k} value={k}>{categories.power.units[k].name[currentLang]}</option>)}
              </select>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-1" value={powerTo} onChange={(e) => setPowerTo(e.target.value)}>
                {Object.keys(categories.power.units).map(k => <option key={k} value={k}>{categories.power.units[k].name[currentLang]}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2.5 text-right font-mono text-sm font-black text-blue-900 rounded">
                {convert(powerVal, powerFrom, powerTo, 'power').toFixed(4)} {powerTo}
              </div>
              <Link href={`/${currentLang}/convert/${families.energy.categories.power.slugs[currentLang]}`} className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</Link>
            </div>
          </div>

        </div>
      </main>

      {/* DİNAMİK LOKALİZE MAVİ FOOTER */}
      <section className="bg-[#d9e6f2] border-t border-blue-300 p-6 md:p-10">
        <div className="max-w-6xl w-full mx-auto">
          <h3 className="text-lg font-black text-blue-900 uppercase tracking-wide mb-8">{t.byFamily}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-xs text-blue-800 font-medium">
            {Object.keys(families).map((famKey) => {
              const family = families[famKey];
              return (
                <div key={famKey} className="space-y-2">
                  <h4 className="font-bold text-blue-950 text-sm border-b border-blue-300/40 pb-1 uppercase">{family.name[currentLang]}</h4>
                  <ul className="space-y-1.5">
                    {Object.keys(family.categories).map((cKey) => {
                      const cat = family.categories[cKey];
                      return (
                        <li key={cKey}>
                          <Link href={`/${currentLang}/convert/${cat.slugs[currentLang]}`} className="hover:underline flex items-center gap-1">
                            <span>+</span> <span>{cat.name[currentLang]}</span>
                          </Link>
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
        &copy; 2005-2026 Convertworld.com | Powered by OptiConv 4B Network.
      </footer>
    </div>
  );
}
