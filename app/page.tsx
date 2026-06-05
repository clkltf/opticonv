'use client';
import { useState } from 'react';

// Tüm dillerin çeviri sözlüğü
const translations: any = {
  en: { title: 'OptiConv', sub: 'Global Unit Converter', inputLabel: 'Enter Value', resultLabel: 'Result', selectCat: 'Select Category' },
  tr: { title: 'OptiConv', sub: 'Küresel Birim Dönüştürücü', inputLabel: 'Değer Girin', resultLabel: 'Sonuç', selectCat: 'Kategori Seçin' },
  es: { title: 'OptiConv', sub: 'Conversor de Unidades Global', inputLabel: 'Introducir Valor', resultLabel: 'Resultado', selectCat: 'Selecciona Categoría' },
  hi: { title: 'OptiConv', sub: 'वैश्विक इकाई कनवर्टर', inputLabel: 'मान दर्ज करें', resultLabel: 'परिणाम', selectCat: 'श्रेणी चुनें' }
};

// Convertworld standartlarında dev birim kütüphanesi
const categories: any = {
  length: {
    name: { en: 'Length 📏', tr: 'Uzunluk 📏', es: 'Longitud 📏', hi: 'लंबाई 📏' },
    units: {
      m: { name: { en: 'Meters', tr: 'Metre', es: 'Metros', hi: 'मीटर' }, ratio: 1 },
      km: { name: { en: 'Kilometers', tr: 'Kilometre', es: 'Kilómetros', hi: 'किलोमीटर' }, ratio: 0.001 },
      cm: { name: { en: 'Centimeters', tr: 'Santimetre', es: 'Centímetros', hi: 'सेंटीमीटर' }, ratio: 100 },
      mm: { name: { en: 'Millimeters', tr: 'Milimetre', es: 'Milímetros', hi: 'मिलीमीटर' }, ratio: 1000 },
      inch: { name: { en: 'Inches', tr: 'Inç', es: 'Pulgadas', hi: 'इंच' }, ratio: 39.3701 },
      feet: { name: { en: 'Feet', tr: 'Fit', es: 'Pies', hi: 'अधिरोहण' }, ratio: 3.28084 },
      mile: { name: { en: 'Miles', tr: 'Mil', es: 'Millas', hi: 'मील' }, ratio: 0.000621371 }
    }
  },
  weight: {
    name: { en: 'Weight/Mass ⚖️', tr: 'Ağırlık/Kütle ⚖️', es: 'Peso/Masa ⚖️', hi: 'वजन/द्रव्यमान ⚖️' },
    units: {
      kg: { name: { en: 'Kilograms', tr: 'Kilogram', es: 'Kilogramos', hi: 'किलोग्राम' }, ratio: 1 },
      g: { name: { en: 'Grams', tr: 'Gram', es: 'Gramos', hi: 'ग्राम' }, ratio: 1000 },
      mg: { name: { en: 'Milligrams', tr: 'Miligram', es: 'Miligramos', hi: 'मिलीग्राम' }, ratio: 1000000 },
      lb: { name: { en: 'Pounds', tr: 'Llibre', es: 'Libras', hi: 'पाउंड' }, ratio: 2.20462 },
      oz: { name: { en: 'Ounces', tr: 'Ons', es: 'Onzas', hi: 'औंस' }, ratio: 35.274 }
    }
  },
  area: {
    name: { en: 'Area 🗺️', tr: 'Alan 🗺️', es: 'Área 🗺️', hi: 'क्षेत्रफल 🗺️' },
    units: {
      m2: { name: { en: 'Square Meters', tr: 'Metrekare', es: 'Metros Cuadrados', hi: 'वर्ग मीटर' }, ratio: 1 },
      km2: { name: { en: 'Square Kilometers', tr: 'Kilometrekare', es: 'Kilómetros Cuadrados', hi: 'वर्ग किलोमीटर' }, ratio: 0.000001 },
      hectare: { name: { en: 'Hectares', tr: 'Hektar', es: 'Hectáreas', hi: 'हेक्टेयर' }, ratio: 0.0001 },
      acre: { name: { en: 'Acres', tr: 'Aker', es: 'Acres', hi: 'एकड़' }, ratio: 0.000247105 }
    }
  },
  volume: {
    name: { en: 'Volume 🧪', tr: 'Hacim 🧪', es: 'Volumen 🧪', hi: 'आयतन 🧪' },
    units: {
      l: { name: { en: 'Liters', tr: 'Litre', es: 'Litros', hi: 'लीटर' }, ratio: 1 },
      ml: { name: { en: 'Milliliters', tr: 'Mililitre', es: 'Mililitros', hi: 'मिलीलीटर' }, ratio: 1000 },
      m3: { name: { en: 'Cubic Meters', tr: 'Metreküp', es: 'Metros Cúbicos', hi: 'घन मीटर' }, ratio: 0.001 },
      gal: { name: { en: 'Gallons (US)', tr: 'Galon (ABD)', es: 'Galones (EE.UU.)', hi: 'गैलन' }, ratio: 0.264172 }
    }
  },
  data: {
    name: { en: 'Digital Data 💾', tr: 'Dijital Veri 💾', es: 'Datos Digitales 💾', hi: 'डिजिटल डेटा 💾' },
    units: {
      b: { name: { en: 'Bytes', tr: 'Bayt', es: 'Bytes', hi: 'बाइट' }, ratio: 1 },
      kb: { name: { en: 'Kilobytes (KB)', tr: 'Kilobayt (KB)', es: 'Kilobytes (KB)', hi: 'किलोबाइट' }, ratio: 1 / 1024 },
      mb: { name: { en: 'Megabytes (MB)', tr: 'Megabayt (MB)', es: 'Megabytes (MB)', hi: 'मेगाबाइट' }, ratio: 1 / (1024 * 1024) },
      gb: { name: { en: 'Gigabytes (GB)', tr: 'Gigabayt (GB)', es: 'Gigabytes (GB)', hi: 'गीगाबाइट' }, ratio: 1 / (1024 * 1024 * 1024) }
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const [catKey, setCatKey] = useState('length');
  const [val, setVal] = useState(1);
  
  // Kategori değiştiğinde varsayılan birimleri otomatik seçmek için ilk anahtarları alıyoruz
  const currentCat = categories[catKey];
  const unitKeys = Object.keys(currentCat.units);
  
  const [fromUnit, setFromUnit] = useState(unitKeys[0]);
  const [toUnit, setToUnit] = useState(unitKeys[1] || unitKeys[0]);

  // Kategori değişirse birim seçimlerini sıfırla
  const handleCategoryChange = (key: string) => {
    setCatKey(key);
    const newKeys = Object.keys(categories[key].units);
    setFromUnit(newKeys[0]);
    setToUnit(newKeys[1] || newKeys[0]);
  };

  const t = translations[lang];
  const fromRatio = currentCat.units[fromUnit]?.ratio || 1;
  const toRatio = currentCat.units[toUnit]?.ratio || 1;
  const result = (val / fromRatio) * toRatio;

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 md:p-10 font-sans">
      {/* Dil Seçici */}
      <div className="absolute top-4 right-4 flex gap-2 bg-slate-800 p-2 rounded-xl border border-slate-700">
        <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-lg text-sm font-bold ${lang === 'en' ? 'bg-blue-600' : 'hover:bg-slate-700'}`}>EN</button>
        <button onClick={() => setLang('tr')} className={`px-3 py-1 rounded-lg text-sm font-bold ${lang === 'tr' ? 'bg-blue-600' : 'hover:bg-slate-700'}`}>TR</button>
        <button onClick={() => setLang('es')} className={`px-3 py-1 rounded-lg text-sm font-bold ${lang === 'es' ? 'bg-blue-600' : 'hover:bg-slate-700'}`}>ES</button>
        <button onClick={() => setLang('hi')} className={`px-3 py-1 rounded-lg text-sm font-bold ${lang === 'hi' ? 'bg-blue-600' : 'hover:bg-slate-700'}`}>HI</button>
      </div>

      <div className="w-full max-w-2xl bg-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">{t.title}</h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base">{t.sub}</p>
        </header>

        {/* Kategori Seçim Butonları */}
        <div className="mb-6">
          <label className="block text-xs uppercase font-bold text-slate-400 mb-2 tracking-wider">{t.selectCat}</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`p-3 rounded-xl text-sm font-semibold transition-all text-left ${catKey === key ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'}`}
              >
                {categories[key].name[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Girdi ve Hesaplama Alanı */}
        <div className="space-y-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
          <div>
            <label className="block text-xs uppercase font-bold text-slate-400 mb-2 tracking-wider">{t.inputLabel}</label>
            <input
              type="number"
              className="w-full bg-slate-900 text-white text-2xl p-4 rounded-xl border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all font-mono font-bold"
              value={val}
              onChange={(e) => setVal(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                className="w-full bg-slate-700 border border-slate-600 p-3 rounded-xl font-medium focus:outline-none focus:border-blue-500"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                {unitKeys.map((k) => (
                  <option key={k} value={k}>{currentCat.units[k]?.name[lang] || k}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                className="w-full bg-slate-700 border border-slate-600 p-3 rounded-xl font-medium focus:outline-none focus:border-blue-500"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                {unitKeys.map((k) => (
                  <option key={k} value={k}>{currentCat.units[k]?.name[lang] || k}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Sonuç Paneli */}
        <div className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-center shadow-xl">
          <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">{t.resultLabel}</span>
          <div className="text-4xl md:text-5xl font-black mt-2 tracking-tight break-all font-mono">
            {result.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 5 })}
          </div>
        </div>
      </div>
    </main>
  );
}
