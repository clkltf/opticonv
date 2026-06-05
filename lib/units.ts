export const translations: any = {
  en: { title: 'OptiConv', sub: 'World\'s Most Comprehensive Converter', inputLabel: 'Enter Value', resultLabel: 'Result', selectCat: 'Categories', home: 'Home', sitemap: 'Sitemap', contact: 'Contact' },
  tr: { title: 'OptiConv', sub: 'Dünyanın En Kapsamlı Dönüştürücüsü', inputLabel: 'Değer Girin', resultLabel: 'Sonuç', selectCat: 'Kategoriler', home: 'Ana Sayfa', sitemap: 'Site Haritası', contact: 'İletişim' },
  es: { title: 'OptiConv', sub: 'El Conversor Más Completo del Mundo', inputLabel: 'Introducir Valor', resultLabel: 'Resultado', selectCat: 'Categorías', home: 'Inicio', sitemap: 'Mapa del Sitio', contact: 'Contacto' },
  hi: { title: 'OptiConv', sub: 'दुनिया का सबसे व्यापक कनवर्टर', inputLabel: 'मान दर्ज करें', resultLabel: 'परिणाम', selectCat: 'श्रेणियाँ', home: 'होम', sitemap: 'साइटमैप', contact: 'संपर्क' }
};

export const categories: any = {
  length: {
    name: { en: 'Length 📏', tr: 'Uzunluk 📏', es: 'Longitud 📏', hi: 'लंबाई 📏' },
    units: {
      m: { name: { en: 'Meters', tr: 'Metre', es: 'Metros', hi: 'मीटर' }, ratio: 1 },
      km: { name: { en: 'Kilometers', tr: 'Kilometre', es: 'Kilómetros', hi: 'किलोमीटर' }, ratio: 0.001 },
      cm: { name: { en: 'Centimeters', tr: 'Santimetre', es: 'Centímetros', hi: 'सेंटीमीटर' }, ratio: 100 },
      mm: { name: { en: 'Millimeters', tr: 'Milimetre', es: 'Milímetros', hi: 'मिलीमीटर' }, ratio: 1000 },
      inch: { name: { en: 'Inches', tr: 'İnç', es: 'Pulgadas', hi: 'इंच' }, ratio: 39.3701 },
      feet: { name: { en: 'Feet', tr: 'Fit', es: 'Pies', hi: 'अधिरोहण' }, ratio: 3.28084 },
      mile: { name: { en: 'Miles', tr: 'Mil', es: 'Millas', hi: 'मील' }, ratio: 0.000621371 }
    }
  },
  weight: {
    name: { en: 'Weight/Mass ⚖️', tr: 'Ağırlık/Kütle ⚖️', es: 'Peso/Masa ⚖️', hi: 'वजन ⚖️' },
    units: {
      kg: { name: { en: 'Kilograms', tr: 'Kilogram', es: 'Kilogramos', hi: 'किलोग्राम' }, ratio: 1 },
      g: { name: { en: 'Grams', tr: 'Gram', es: 'Gramos', hi: 'ग्राम' }, ratio: 1000 },
      mg: { name: { en: 'Milligrams', tr: 'Miligram', es: 'Miligramos', hi: 'मिलीग्राम' }, ratio: 1000000 },
      lb: { name: { en: 'Pounds', tr: 'Libre', es: 'Libras', hi: 'पाउंड' }, ratio: 2.20462 },
      oz: { name: { en: 'Ounces', tr: 'Ons', es: 'Onzas', hi: 'औंस' }, ratio: 35.274 }
    }
  },
  temperature: {
    name: { en: 'Temperature 🌡️', tr: 'Sıcaklık 🌡️', es: 'Temperatura 🌡️', hi: 'तापमान 🌡️' },
    units: {
      c: { name: { en: 'Celsius', tr: 'Santigrat', es: 'Celsius', hi: 'सेल्सियस' }, ratio: 1, isTemp: true },
      f: { name: { en: 'Fahrenheit', tr: 'Fahrenhayt', es: 'Fahrenheit', hi: 'फ़ारेनहाइट' }, ratio: 1, isTemp: true },
      k: { name: { en: 'Kelvin', tr: 'Kelvin', es: 'Kelvin', hi: 'केल्विन' }, ratio: 1, isTemp: true }
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
  }
};

export const convert = (val: number, from: string, to: string, catKey: string) => {
  if (catKey === 'temperature') {
    if (from === to) return val;
    let celsius = val;
    if (from === 'f') celsius = (val - 32) * 5 / 9;
    if (from === 'k') celsius = val - 273.15;
    
    if (to === 'c') return celsius;
    if (to === 'f') return (celsius * 9 / 5) + 32;
    if (to === 'k') return celsius + 273.15;
  }
  const cat = categories[catKey];
  if (!cat || !cat.units[from] || !cat.units[to]) return 0;
  return (val / cat.units[from].ratio) * cat.units[to].ratio;
};
