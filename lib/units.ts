export const translations: any = {
  en: { title: 'OptiConv', sub: 'World\'s Most Comprehensive Unit Converter', inputLabel: 'Value to convert', resultLabel: 'Converted value', selectCat: 'Measurement Categories', home: 'Home', sitemap: 'Sitemap', contact: 'Contact' },
  tr: { title: 'OptiConv', sub: 'Dünyanın En Kapsamlı Birim Dönüştürücüsü', inputLabel: 'Dönüştürülecek değer', resultLabel: 'Dönüştürülen değer', selectCat: 'Ölçüm Kategorileri', home: 'Ana Sayfa', sitemap: 'Site Haritası', contact: 'İletişim' },
  es: { title: 'OptiConv', sub: 'El Conversor de Unidades Más Completo del Mundo', inputLabel: 'Valor a convertir', resultLabel: 'Valor convertido', selectCat: 'Categorías de Medición', home: 'Inicio', sitemap: 'Mapa del Sitio', contact: 'Contacto' },
  hi: { title: 'OptiConv', sub: 'दुनिया का सबसे व्यापक इकाई कनवर्टर', inputLabel: 'कन्वर्ट करने के लिए मान', resultLabel: 'परिवर्तित मान', selectCat: 'माप श्रेणियां', home: 'होम', sitemap: 'साइटमैप', contact: 'संपर्क' }
};

export const categories: any = {
  length: {
    name: { en: 'Length', tr: 'Uzunluk', es: 'Longitud', hi: 'लंबाई' },
    icon: '📏',
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
    name: { en: 'Weight & Mass', tr: 'Ağırlık & Kütle', es: 'Peso y Masa', hi: 'वजन और द्रव्यमान' },
    icon: '⚖️',
    units: {
      kg: { name: { en: 'Kilograms', tr: 'Kilogram', es: 'Kilogramos', hi: 'किलोग्राम' }, ratio: 1 },
      g: { name: { en: 'Grams', tr: 'Gram', es: 'Gramos', hi: 'ग्राम' }, ratio: 1000 },
      mg: { name: { en: 'Milligrams', tr: 'Miligram', es: 'Miligramos', hi: 'मिलीग्राम' }, ratio: 1000000 },
      lb: { name: { en: 'Pounds', tr: 'Libre', es: 'Libras', hi: 'पाउंड' }, ratio: 2.20462 },
      oz: { name: { en: 'Ounces', tr: 'Ons', es: 'Onzas', hi: 'औंस' }, ratio: 35.274 }
    }
  },
  temperature: {
    name: { en: 'Temperature', tr: 'Sıcaklık', es: 'Temperatura', hi: 'तापमान' },
    icon: '🌡️',
    units: {
      c: { name: { en: 'Celsius', tr: 'Santigrat', es: 'Celsius', hi: 'सेल्सियस' }, ratio: 1 },
      f: { name: { en: 'Fahrenheit', tr: 'Fahrenhayt', es: 'Fahrenheit', hi: 'फ़ारेनहाइट' }, ratio: 1 },
      k: { name: { en: 'Kelvin', tr: 'Kelvin', es: 'Kelvin', hi: 'केल्विन' }, ratio: 1 }
    }
  },
  area: {
    name: { en: 'Area', tr: 'Alan', es: 'Área', hi: 'क्षेत्रफल' },
    icon: '🗺️',
    units: {
      m2: { name: { en: 'Square Meters', tr: 'Metrekare', es: 'Metros Cuadrados', hi: 'वर्ग मीटर' }, ratio: 1 },
      km2: { name: { en: 'Square Kilometers', tr: 'Kilometrekare', es: 'Kilómetros Cuadrados', hi: 'वर्ग किलोमीटर' }, ratio: 0.000001 },
      hectare: { name: { en: 'Hectares', tr: 'Hektar', es: 'Hectáreas', hi: 'हेक्टेयर' }, ratio: 0.0001 },
      acre: { name: { en: 'Acres', tr: 'Aker', es: 'Acres', hi: 'एकड़' }, ratio: 0.000247105 }
    }
  },
  volume: {
    name: { en: 'Volume', tr: 'Hacim', es: 'Volumen', hi: 'आयतन' },
    icon: '🧪',
    units: {
      l: { name: { en: 'Liters', tr: 'Litre', es: 'Litros', hi: 'लीटर' }, ratio: 1 },
      ml: { name: { en: 'Milliliters', tr: 'Mililitre', es: 'Mililitros', hi: 'मिलीलीटर' }, ratio: 1000 },
      m3: { name: { en: 'Cubic Meters', tr: 'Metreküp', es: 'Metros Cúbicos', hi: 'घन meter' }, ratio: 0.001 },
      gal: { name: { en: 'Gallons (US)', tr: 'Galon (ABD)', es: 'Galones (EE.UU.)', hi: 'गैलन' }, ratio: 0.264172 }
    }
  },
  speed: {
    name: { en: 'Speed', tr: 'Hız', es: 'Velocidad', hi: 'गति' },
    icon: '🚀',
    units: {
      m_s: { name: { en: 'Meters/Second', tr: 'Metre/Saniye', es: 'Metros/Segundo', hi: 'मीटर/सेकंड' }, ratio: 1 },
      km_h: { name: { en: 'Km/Hour', tr: 'Km/Saat', es: 'Km/Hora', hi: 'किमी/घंटा' }, ratio: 3.6 },
      mph: { name: { en: 'Miles/Hour', tr: 'Mil/Saat', es: 'Millas/Hora', hi: 'मील/घंटा' }, ratio: 2.23694 }
    }
  },
  time: {
    name: { en: 'Time', tr: 'Zaman', es: 'Tiempo', hi: 'समय' },
    icon: '⏱️',
    units: {
      sec: { name: { en: 'Seconds', tr: 'Saniye', es: 'Segundos', hi: 'सेकंड' }, ratio: 1 },
      min: { name: { en: 'Minutes', tr: 'Dakika', es: 'Minutos', hi: 'मिनट' }, ratio: 1 / 60 },
      hour: { name: { en: 'Hours', tr: 'Saat', es: 'Horas', hi: 'घंटे' }, ratio: 1 / 3600 },
      day: { name: { en: 'Days', tr: 'Gün', es: 'Días', hi: 'दिन' }, ratio: 1 / 86400 }
    }
  },
  data: {
    name: { en: 'Digital Data', tr: 'Dijital Veri', es: 'Datos Digitales', hi: 'डेटा' },
    icon: '💾',
    units: {
      b: { name: { en: 'Bytes', tr: 'Bayt', es: 'Bytes', hi: 'बाइट' }, ratio: 1 },
      kb: { name: { en: 'Kilobytes', tr: 'Kilobayt', es: 'Kilobytes', hi: 'كيلوبايت' }, ratio: 1 / 1024 },
      mb: { name: { en: 'Megabytes', tr: 'Megabayt', es: 'Megabytes', hi: 'मेगाबाइट' }, ratio: 1 / (1024 * 1024) },
      gb: { name: { en: 'Gigabytes', tr: 'Gigabayt', es: 'Gigabytes', hi: 'गीगाबाइट' }, ratio: 1 / (1024 * 1024 * 1024) }
    }
  },
  pressure: {
    name: { en: 'Pressure', tr: 'Basınç', es: 'Presión', hi: 'दबाव' },
    icon: '🎈',
    units: {
      pa: { name: { en: 'Pascal', tr: 'Pascal', es: 'Pascal', hi: 'पास्कल' }, ratio: 1 },
      bar: { name: { en: 'Bar', tr: 'Bar', es: 'Bar', hi: 'बार' }, ratio: 0.00001 },
      psi: { name: { en: 'PSI', tr: 'PSI', es: 'PSI', hi: 'पीएसआई' }, ratio: 0.000145038 }
    }
  },
  power: {
    name: { en: 'Power', tr: 'Güç', es: 'Potencia', hi: 'शक्ति' },
    icon: '⚡',
    units: {
      w: { name: { en: 'Watts', tr: 'Watt', es: 'Watts', hi: 'वाट' }, ratio: 1 },
      kw: { name: { en: 'Kilowatts', tr: 'Kilowatt', es: 'Kilovatios', hi: 'किलोवाट' }, ratio: 0.001 },
      hp: { name: { en: 'Horsepower', tr: 'Beygir Gücü', es: 'Caballos de Fuerza', hi: 'हॉर्सपावर' }, ratio: 0.00134102 }
    }
  },
  energy: {
    name: { en: 'Energy', tr: 'Enerji', es: 'Energía', hi: 'ऊर्जा' },
    icon: '🔋',
    units: {
      j: { name: { en: 'Joules', tr: 'Joule', es: 'Julios', hi: 'जूल' }, ratio: 1 },
      kj: { name: { en: 'Kilojoules', tr: 'Kilojoule', es: 'Kilojulios', hi: 'किलोजूल' }, ratio: 0.001 },
      kcal: { name: { en: 'Kilocalories', tr: 'Kilokalori', es: 'Kilocalorías', hi: 'किलोकैलोरी' }, ratio: 0.000239006 }
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
