export const translations: any = {
  en: { title: 'OptiConv', sub: 'World\'s Complete Unit Conversion Platform', searchPlaceholder: 'Search categories...', byFamily: 'Converters by Family', home: 'Home', sitemap: 'Sitemap' },
  tr: { title: 'OptiConv', sub: 'Dünyanın En Kapsamlı Birim Dönüştürme Platformu', searchPlaceholder: 'Kategori ara...', byFamily: 'Ailelerine Göre Dönüştürücüler', home: 'Ana Sayfa', sitemap: 'Site Haritası' },
  es: { title: 'OptiConv', sub: 'La Plataforma de Conversión Más Completa del Mundo', searchPlaceholder: 'Buscar categorías...', byFamily: 'Conversores por Familia', home: 'Inicio', sitemap: 'Mapa del Sitio' },
  hi: { title: 'OptiConv', sub: 'दुनिया का सबसे व्यापक इकाई कनवर्टर', searchPlaceholder: 'श्रेणियां खोजें...', byFamily: 'परिवार के अनुसार कनवर्टर', home: 'होम', sitemap: 'साइटमैप' }
};

export const families: any = {
  dimension: {
    name: { en: 'Dimension', tr: 'Boyut', es: 'Dimensión', hi: 'आयाम' },
    categories: {
      length: { name: { en: 'Length 📏', tr: 'Uzunluk 📏' }, units: { m: { name: { en: 'Meters', tr: 'Metre' }, ratio: 1 }, km: { name: { en: 'Kilometers', tr: 'Kilometre' }, ratio: 0.001 }, cm: { name: { en: 'Centimeters', tr: 'Santimetre' }, ratio: 100 }, inch: { name: { en: 'Inches', tr: 'İnç' }, ratio: 39.3701 } } },
      area: { name: { en: 'Area 🗺️', tr: 'Alan 🗺️' }, units: { m2: { name: { en: 'Square Meters', tr: 'Metrekare' }, ratio: 1 }, km2: { name: { en: 'Square Kilometers', tr: 'Kilometrekare' }, ratio: 0.000001 }, acre: { name: { en: 'Acres', tr: 'Aker' }, ratio: 0.000247105 } } },
      volume: { name: { en: 'Volume 🧪', tr: 'Hacim 🧪' }, units: { l: { name: { en: 'Liters', tr: 'Litre' }, ratio: 1 }, ml: { name: { en: 'Milliliters', tr: 'Mililitre' }, ratio: 1000 }, m3: { name: { en: 'Cubic Meters', tr: 'Metreküp' }, ratio: 0.001 } } }
    }
  },
  mechanics: {
    name: { en: 'Mechanics', tr: 'Mekanik', es: 'Mecánica', hi: 'यांत्रिकी' },
    categories: {
      mass: { name: { en: 'Mass & Weight ⚖️', tr: 'Kütle & Ağırlık ⚖️' }, units: { kg: { name: { en: 'Kilograms', tr: 'Kilogram' }, ratio: 1 }, g: { name: { en: 'Grams', tr: 'Gram' }, ratio: 1000 }, lb: { name: { en: 'Pounds', tr: 'Libre' }, ratio: 2.20462 } } },
      force: { name: { en: 'Force 🏋️', tr: 'Kuvvet 🏋️' }, units: { n: { name: { en: 'Newtons' }, ratio: 1 }, kn: { name: { en: 'Kilonewtons' }, ratio: 0.001 } } },
      torque: { name: { en: 'Torque 🔧', tr: 'Tork 🔧' }, units: { nm: { name: { en: 'Newton-meters' }, ratio: 1 }, ft_lb: { name: { en: 'Foot-pounds' }, ratio: 0.737562 } } },
      bmi: { name: { en: 'Body Mass Index (BMI) 🩻', tr: 'Beden Kitle İndeksi (BMI) 🩻' }, units: { index: { name: { en: 'Standard BMI' }, ratio: 1 } } }
    }
  },
  motion: {
    name: { en: 'Motion', tr: 'Hareket', es: 'Movimiento', hi: 'गति' },
    categories: {
      speed: { name: { en: 'Speed 🚀', tr: 'Hız 🚀' }, units: { km_h: { name: { en: 'Km/Hour', tr: 'Km/Saat' }, ratio: 1 }, mph: { name: { en: 'Miles/Hour', tr: 'Mil/Saat' }, ratio: 0.621371 } } },
      acceleration: { name: { en: 'Acceleration 🏎️', tr: 'İvme 🏎️' }, units: { m_s2: { name: { en: 'Meters/s²' }, ratio: 1 }, g_force: { name: { en: 'G-Force' }, ratio: 0.101972 } } },
      wind_speed: { name: { en: 'Wind Speed 💨', tr: 'Rüzgar Hızı 💨' }, units: { knots: { name: { en: 'Knots' }, ratio: 1 }, beaufort: { name: { en: 'Beaufort Scale' }, ratio: 1 } } },
      running: { name: { en: 'Running Pace 🏃', tr: 'Koşu Temposu 🏃' }, units: { min_km: { name: { en: 'min/km' }, ratio: 1 } } }
    }
  },
  chemistry: {
    name: { en: 'Chemistry', tr: 'Kimya', es: 'Química', hi: 'रसायन विज्ञान' },
    categories: {
      density: { name: { en: 'Density 🥛', tr: 'Yoğunluk 🥛' }, units: { kg_m3: { name: { en: 'kg/m³' }, ratio: 1 }, g_cm3: { name: { en: 'g/cm³' }, ratio: 0.001 } } },
      amount_substance: { name: { en: 'Amount of Substance ⚛️', tr: 'Madde Miktarı ⚛️' }, units: { mol: { name: { en: 'Moles' }, ratio: 1 }, mmol: { name: { en: 'Millimoles' }, ratio: 1000 } } },
      molar_mass: { name: { en: 'Molar Mass 🔬', tr: 'Molar Kütle 🔬' }, units: { g_mol: { name: { en: 'g/mol' }, ratio: 1 } } },
      viscosity_dynamic: { name: { en: 'Dynamic Viscosity 🍯', tr: 'Dinamik Viskozite 🍯' }, units: { pa_s: { name: { en: 'Pascal-seconds' }, ratio: 1 }, cp: { name: { en: 'Centipoise' }, ratio: 1000 } } }
    }
  },
  clothing: {
    name: { en: 'Clothing', tr: 'Giyim', es: 'Ropa', hi: 'कपड़े' },
    categories: {
      shoe_size: { name: { en: 'Shoe Size 👟', tr: 'Ayakkabı Numarası 👟' }, units: { eu: { name: { en: 'EU Size' }, ratio: 1 }, us: { name: { en: 'US Size' }, ratio: 1 } } },
      hat_size: { name: { en: 'Hat Size 🎩', tr: 'Şapka Ölçüsü 🎩' }, units: { cm: { name: { en: 'Centimeters' }, ratio: 1 } } },
      clothes_dress: { name: { en: 'Clothes: Dress & Suit 👔', tr: 'Elbise & Takım Elbise 👔' }, units: { standard: { name: { en: 'Standard Size' }, ratio: 1 } } }
    }
  },
  computing: {
    name: { en: 'Computing', tr: 'Bilişim & Bilgisayar', es: 'Informática', hi: 'कंप्यूटिंग' },
    categories: {
      data_storage: { name: { en: 'Data Storage 💾', tr: 'Veri Depolama 💾' }, units: { b: { name: { en: 'Bytes' }, ratio: 1 }, mb: { name: { en: 'Megabytes' }, ratio: 1 / (1024 * 1024) }, gb: { name: { en: 'Gigabytes' }, ratio: 1 / (1024 * 1024 * 1024) } } },
      bandwidth: { name: { en: 'Bandwidth 🌐', tr: 'Bant Genişliği 🌐' }, units: { bps: { name: { en: 'bps' }, ratio: 1 }, mbps: { name: { en: 'Mbps' }, ratio: 1 / 1000000 } } }
    }
  },
  electricity: {
    name: { en: 'Electricity', tr: 'Elektrik', es: 'Electricidad', hi: 'बिजली' },
    categories: {
      electric_current: { name: { en: 'Electric Current 🔌', tr: 'Elektrik Akımı 🔌' }, units: { a: { name: { en: 'Amperes' }, ratio: 1 }, ma: { name: { en: 'Milliamperes' }, ratio: 1000 } } },
      voltage: { name: { en: 'Electric Potential (Voltage) 💥', tr: 'Voltaj 💥' }, units: { v: { name: { en: 'Volts' }, ratio: 1 }, kv: { name: { en: 'Kilovolts' }, ratio: 0.001 } } },
      resistance: { name: { en: 'Electrical Resistance 🎛️', tr: 'Elektriksel Direnç 🎛️' }, units: { ohm: { name: { en: 'Ohms' }, ratio: 1 } } }
    }
  },
  energy: {
    name: { en: 'Energy', tr: 'Enerji & Güç', es: 'Energía', hi: 'ऊर्जा' },
    categories: {
      energy_src: { name: { en: 'Energy 🔋', tr: 'Enerji 🔋' }, units: { j: { name: { en: 'Joules' }, ratio: 1 }, kcal: { name: { en: 'Kilocalories' }, ratio: 0.000239006 } } },
      power: { name: { en: 'Power ⚡', tr: 'Güç ⚡' }, units: { w: { name: { en: 'Watts' }, ratio: 1 }, hp: { name: { en: 'Horsepower' }, ratio: 0.00134102 } } },
      temperature: { name: { en: 'Temperature 🌡️', tr: 'Sıcaklık 🌡️' }, units: { c: { name: { en: 'Celsius' }, ratio: 1 }, f: { name: { en: 'Fahrenheit' }, ratio: 1 } } },
      fuel_consumption: { name: { en: 'Fuel Consumption ⛽', tr: 'Yakıt Tüketimi ⛽' }, units: { l_100km: { name: { en: 'L/100km' }, ratio: 1 } } }
    }
  },
  other: {
    name: { en: 'Other Metrics', tr: 'Diğer Birimler', es: 'Otros', hi: 'अन्य' },
    categories: {
      pressure: { name: { en: 'Pressure 🎈', tr: 'Basınç 🎈' }, units: { pa: { name: { en: 'Pascal' }, ratio: 1 }, bar: { name: { en: 'Bar' }, ratio: 0.00001 }, atm: { name: { en: 'Atmospheres' }, ratio: 0.0000098692 } } },
      currency: { name: { en: 'Currency 💵', tr: 'Para Birimi 💵' }, units: { usd: { name: { en: 'US Dollar' }, ratio: 1 }, eur: { name: { en: 'Euro' }, ratio: 0.92 } } },
      angle: { name: { en: 'Angle 📐', tr: 'Açı 📐' }, units: { deg: { name: { en: 'Degrees' }, ratio: 1 }, rad: { name: { en: 'Radians' }, ratio: 0.0174533 } } },
      frequency: { name: { en: 'Frequency 📻', tr: 'Frekans 📻' }, units: { hz: { name: { en: 'Hertz' }, ratio: 1 }, mhz: { name: { en: 'Megahertz' }, ratio: 0.000001 } } },
      paper_size: { name: { en: 'Paper Size 📄', tr: 'Kağıt Boyutu 📄' }, units: { a4: { name: { en: 'A4' }, ratio: 1 }, a3: { name: { en: 'A3' }, ratio: 1 } } }
    }
  }
};

// Global düz listeyi de sitemap ve yönlendirmeler için otomatik besleyelim
export const categories: any = {};
Object.keys(families).forEach((famKey) => {
  Object.keys(families[famKey].categories).forEach((catKey) => {
    categories[catKey] = families[famKey].categories[catKey];
  });
});

export const convert = (val: number, from: string, to: string, catKey: string) => {
  if (catKey === 'temperature') {
    if (from === to) return val;
    let celsius = val;
    if (from === 'f') celsius = (val - 32) * 5 / 9;
    if (to === 'c') return celsius;
    if (to === 'f') return (celsius * 9 / 5) + 32;
  }
  const cat = categories[catKey];
  if (!cat || !cat.units[from] || !cat.units[to]) return 0;
  return (val / cat.units[from].ratio) * cat.units[to].ratio;
};
