'use client';
import { useState } from 'react';
import { categories, convert } from '../lib/units';

export default function Home() {
  const [lang, setLang] = useState('en');

  // 1. Currency Card State
  const [currencyVal, setCurrencyVal] = useState(100);
  const [currencyFrom, setCurrencyFrom] = useState('usd');
  const [currencyTo, setCurrencyTo] = useState('eur');

  // 2. Length Card State
  const [lengthVal, setLengthVal] = useState(1);
  const [lengthFrom, setLengthFrom] = useState('km');
  const [lengthTo, setLengthTo] = useState('mile');

  // 3. Volume Card State
  const [volumeVal, setVolumeVal] = useState(1);
  const [volumeFrom, setVolumeFrom] = useState('l');
  const [volumeTo, setVolumeTo] = useState('gal');

  // 4. Mass Card State
  const [massVal, setMassVal] = useState(1);
  const [massFrom, setMassFrom] = useState('kg');
  const [massTo, setMassTo] = useState('lb');

  // 5. Area Card State
  const [areaVal, setAreaVal] = useState(1);
  const [areaFrom, setAreaFrom] = useState('m2');
  const [areaTo, setAreaTo] = useState('acre');

  // 6. Speed Card State
  const [speedVal, setSpeedVal] = useState(1);
  const [speedFrom, setSpeedFrom] = useState('km_h');
  const [speedTo, setSpeedTo] = useState('mph');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      
      {/* 1. SARI/ALTIN RENKLİ KÜRESEL HEADER */}
      <header className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 pt-6 pb-4 px-4 text-center relative shadow-md">
        {/* Dil Değiştirici (Sağ Üst Köşe) */}
        <div className="absolute top-2 right-4 flex gap-1 bg-black/10 p-1 rounded">
          {['en', 'tr', 'es', 'hi'].map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-2 py-0.5 text-xs font-bold uppercase rounded ${lang === l ? 'bg-white text-amber-600' : 'text-white hover:bg-white/20'}`}>
              {l}
            </button>
          ))}
        </div>

        {/* Logo ve Ok İkonları */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-blue-900 text-3xl font-extrabold">&larr;&rarr;</span>
          <span className="text-blue-900 text-3xl md:text-4xl font-black tracking-tighter">CONVERTWORLD.COM</span>
        </div>

        {/* Arama Çubuğu */}
        <div className="max-w-md mx-auto flex bg-white rounded shadow-sm border border-amber-600/40 overflow-hidden">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full px-3 py-1.5 text-sm outline-none text-gray-700"
          />
          <button className="bg-amber-500 hover:bg-amber-600 px-4 flex items-center justify-center text-white">
            🔍
          </button>
        </div>
      </header>

      {/* 2. KOYU SARI NAVİGASYON BARU */}
      <nav className="bg-amber-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 flex gap-6 justify-start shadow-inner overflow-x-auto whitespace-nowrap">
        <a href="#" className="hover:underline">Most Popular</a>
        <a href="#" className="hover:underline">By Family</a>
        <a href="/sitemap.xml" className="hover:underline">Site Map</a>
        <a href="#" className="hover:underline className='ml-auto'">Support Us</a>
      </nav>

      {/* 3. ANA İÇERİK ALANI */}
      <main className="max-w-6xl w-full mx-auto p-4 md:p-8 flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-600 tracking-tight">Quick conversion</h2>
          <p className="text-xs text-gray-500 mt-1">
            Access our most popular converters below to quickly <strong>convert currency rates, distance, temperature, area</strong> and more.
          </p>
        </div>

        {/* 6'LI HIZLI DÖNÜŞTÜRÜCÜ KART GRİDİ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* KART 1: CURRENCY */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded shadow-sm">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline cursor-pointer">Currency</h3>
              <label className="block text-xs text-gray-600 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-semibold outline-none focus:border-amber-500" value={currencyVal} onChange={(e) => setCurrencyVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2 outline-none font-medium text-gray-700" value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)}>
                {Object.keys(categories.currency?.units || {}).map(k => <option key={k} value={k}>{categories.currency.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-600 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 outline-none font-medium text-gray-700" value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)}>
                {Object.keys(categories.currency?.units || {}).map(k => <option key={k} value={k}>{categories.currency.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2 flex items-center justify-between text-sm font-bold text-blue-900 rounded">
                <span>🔄</span>
                <span>{convert(currencyVal, currencyFrom, currencyTo, 'currency').toFixed(2)} {currencyTo.toUpperCase()}</span>
              </div>
              <a href="/convert/currency" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* KART 2: LENGTH */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded shadow-sm">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline cursor-pointer">Length</h3>
              <label className="block text-xs text-gray-600 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-semibold outline-none focus:border-amber-500" value={lengthVal} onChange={(e) => setLengthVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2 outline-none font-medium text-gray-700" value={lengthFrom} onChange={(e) => setLengthFrom(e.target.value)}>
                {Object.keys(categories.length?.units || {}).map(k => <option key={k} value={k}>{categories.length.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-600 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 outline-none font-medium text-gray-700" value={lengthTo} onChange={(e) => setLengthTo(e.target.value)}>
                {Object.keys(categories.length?.units || {}).map(k => <option key={k} value={k}>{categories.length.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2 flex items-center justify-between text-sm font-bold text-blue-900 rounded">
                <span>🔄</span>
                <span>{convert(lengthVal, lengthFrom, lengthTo, 'length').toFixed(4)} {lengthTo}</span>
              </div>
              <a href="/convert/length" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* KART 3: VOLUME */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded shadow-sm">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline cursor-pointer">Volume</h3>
              <label className="block text-xs text-gray-600 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-semibold outline-none focus:border-amber-500" value={volumeVal} onChange={(e) => setVolumeVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2 outline-none font-medium text-gray-700" value={volumeFrom} onChange={(e) => setVolumeFrom(e.target.value)}>
                {Object.keys(categories.volume?.units || {}).map(k => <option key={k} value={k}>{categories.volume.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-600 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 outline-none font-medium text-gray-700" value={volumeTo} onChange={(e) => setVolumeTo(e.target.value)}>
                {Object.keys(categories.volume?.units || {}).map(k => <option key={k} value={k}>{categories.volume.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2 flex items-center justify-between text-sm font-bold text-blue-900 rounded">
                <span>🔄</span>
                <span>{convert(volumeVal, volumeFrom, volumeTo, 'volume').toFixed(4)} {volumeTo}</span>
              </div>
              <a href="/convert/volume" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* KART 4: MASS */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded shadow-sm">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline cursor-pointer">Mass</h3>
              <label className="block text-xs text-gray-600 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-semibold outline-none focus:border-amber-500" value={massVal} onChange={(e) => setMassVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2 outline-none font-medium text-gray-700" value={massFrom} onChange={(e) => setMassFrom(e.target.value)}>
                {Object.keys(categories.weight?.units || {}).map(k => <option key={k} value={k}>{categories.weight.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-600 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 outline-none font-medium text-gray-700" value={massTo} onChange={(e) => setMassTo(e.target.value)}>
                {Object.keys(categories.weight?.units || {}).map(k => <option key={k} value={k}>{categories.weight.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2 flex items-center justify-between text-sm font-bold text-blue-900 rounded">
                <span>🔄</span>
                <span>{convert(massVal, massFrom, massTo, 'weight').toFixed(4)} {massTo}</span>
              </div>
              <a href="/convert/weight" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* KART 5: AREA */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded shadow-sm">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline cursor-pointer">Area</h3>
              <label className="block text-xs text-gray-600 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-semibold outline-none focus:border-amber-500" value={areaVal} onChange={(e) => setAreaVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2 outline-none font-medium text-gray-700" value={areaFrom} onChange={(e) => setAreaFrom(e.target.value)}>
                {Object.keys(categories.area?.units || {}).map(k => <option key={k} value={k}>{categories.area.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-600 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 outline-none font-medium text-gray-700" value={areaTo} onChange={(e) => setAreaTo(e.target.value)}>
                {Object.keys(categories.area?.units || {}).map(k => <option key={k} value={k}>{categories.area.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2 flex items-center justify-between text-sm font-bold text-blue-900 rounded">
                <span>🔄</span>
                <span>{convert(areaVal, areaFrom, areaTo, 'area').toFixed(4)} {areaTo}</span>
              </div>
              <a href="/convert/area" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

          {/* KART 6: SPEED */}
          <div className="border border-dashed border-gray-400 bg-white p-4 flex flex-col justify-between rounded shadow-sm">
            <div>
              <h3 className="text-base font-bold text-orange-600 hover:underline cursor-pointer">Speed</h3>
              <label className="block text-xs text-gray-600 my-1">I want to convert:</label>
              <input type="number" className="w-full border border-gray-300 rounded p-1.5 text-sm font-semibold outline-none focus:border-amber-500" value={speedVal} onChange={(e) => setSpeedVal(Number(e.target.value))}/>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 mt-2 outline-none font-medium text-gray-700" value={speedFrom} onChange={(e) => setSpeedFrom(e.target.value)}>
                {Object.keys(categories.speed?.units || {}).map(k => <option key={k} value={k}>{categories.speed.units[k].name[lang] || k}</option>)}
              </select>
              <label className="block text-xs text-gray-600 my-1">To:</label>
              <select className="w-full border border-gray-300 rounded p-1.5 text-xs bg-gray-50 outline-none font-medium text-gray-700" value={speedTo} onChange={(e) => setSpeedTo(e.target.value)}>
                {Object.keys(categories.speed?.units || {}).map(k => <option key={k} value={k}>{categories.speed.units[k].name[lang] || k}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 border border-blue-100 p-2 flex items-center justify-between text-sm font-bold text-blue-900 rounded">
                <span>🔄</span>
                <span>{convert(speedVal, speedFrom, speedTo, 'speed').toFixed(4)} {speedTo}</span>
              </div>
              <a href="/convert/speed" className="block text-center text-xs text-blue-600 hover:underline mt-2">Extended conversion</a>
            </div>
          </div>

        </div>

        {/* Orta Metin Alanı */}
        <p className="text-xs text-gray-500 mt-8 leading-relaxed border-t border-gray-100 pt-6">
          Convertworld is one of the most used unit conversion services in the world. You can quick and easy find out <strong>how many pounds is a kilo, how many dollars is a euro</strong>, how many centimeters is a foot as well as paper sizes, shoe sizes, area, volume, temperature and much more.
        </p>
      </main>

      {/* 4. MAVİ RENKLİ GENİŞ "CONVERTERS BY FAMILY" FOOTER SEKSİYONU */}
      <section className="bg-[#d9e6f2] border-t border-blue-300/40 p-6 md:p-10">
        <div className="max-w-6xl w-full mx-auto">
          <h3 className="text-base font-black text-blue-900 uppercase tracking-wide mb-6">Converters by family</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-xs text-blue-800 font-medium">
            <div>
              <h4 className="font-bold text-blue-950 mb-2">Clothing</h4>
              <ul className="space-y-1">
                <li><a href="/convert/shoe_size" className="hover:underline">+ Shoe size</a></li>
                <li><a href="/convert/hat_size" className="hover:underline">+ Hat size</a></li>
                <li><a href="/convert/clothes_dress" className="hover:underline">+ Clothes: dress & suit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-950 mb-2">Computing</h4>
              <ul className="space-y-1">
                <li><a href="/convert/bandwidth" className="hover:underline">+ Bandwidth</a></li>
                <li><a href="/convert/data_storage" className="hover:underline">+ Data storage</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-950 mb-2">Dimension</h4>
              <ul className="space-y-1">
                <li><a href="/convert/area" className="hover:underline">+ Area</a></li>
                <li><a href="/convert/length" className="hover:underline">+ Length</a></li>
                <li><a href="/convert/volume" className="hover:underline">+ Volume</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-950 mb-2">Electricity</h4>
              <ul className="space-y-1">
                <li><a href="/convert/electric_current" className="hover:underline">+ Electric current</a></li>
                <li><a href="/convert/voltage" className="hover:underline">+ Voltage</a></li>
                <li><a href="/convert/resistance" className="hover:underline">+ Electrical resistance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-950 mb-2">Energy</h4>
              <ul className="space-y-1">
                <li><a href="/convert/energy_src" className="hover:underline">+ Energy</a></li>
                <li><a href="/convert/power" className="hover:underline">+ Power</a></li>
                <li><a href="/convert/temperature" className="hover:underline">+ Temperature</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-950 mb-2">Motion</h4>
              <ul className="space-y-1">
                <li><a href="/convert/speed" className="hover:underline">+ Speed</a></li>
                <li><a href="/convert/acceleration" className="hover:underline">+ Acceleration</a></li>
                <li><a href="/convert/wind_speed" className="hover:underline">+ Wind speed</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* En Alt Haklar Saklıdır Alanı */}
      <footer className="bg-[#c2d6e8] py-4 text-center text-xs text-blue-950 font-semibold">
        &copy; 2005-2026 Convertworld.com / OptiConv Clone Altyapısı.
      </footer>
    </div>
  );
}
EOF
