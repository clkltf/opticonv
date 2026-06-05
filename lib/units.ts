export const translations: any = {
  en: { title: 'OptiConv', sub: 'World\'s Ultimate Unit Conversion Platform', searchPlaceholder: 'Search categories...', byFamily: 'Converters by Family', home: 'Home', sitemap: 'Sitemap' },
  tr: { title: 'OptiConv', sub: 'Dünyanın En Kapsamlı Birim Dönüştürme Platformu', searchPlaceholder: 'Kategori ara...', byFamily: 'Ailelerine Göre Dönüştürücüler', home: 'Ana Sayfa', sitemap: 'Site Haritası' },
  es: { title: 'OptiConv', sub: 'La Plataforma de Conversión Más Grande del Mundo', searchPlaceholder: 'Buscar categorías...', byFamily: 'Conversores por Familia', home: 'Inicio', sitemap: 'Mapa del Sitio' },
  hi: { title: 'OptiConv', sub: 'दुनिया का सबसे बड़ा इकाई कनवर्टर', searchPlaceholder: 'श्रेणियां खोजें...', byFamily: 'परिवार के अनुसार कनवर्टर', home: 'होम', sitemap: 'साइटमैप' }
};

export const families: any = {
  dimension: {
    name: { en: 'Dimension', tr: 'Boyut', es: 'Dimensión' },
    categories: {
      length: { name: { en: 'Length', tr: 'Uzunluk' }, icon: '📏', units: { m: { name: { en: 'Meters', tr: 'Metre' }, ratio: 1 }, km: { name: { en: 'Kilometers', tr: 'Kilometre' }, ratio: 0.001 }, cm: { name: { en: 'Centimeters', tr: 'Santimetre' }, ratio: 100 }, mm: { name: { en: 'Millimeters', tr: 'Milimetre' }, ratio: 1000 }, inch: { name: { en: 'Inches', tr: 'İnç' }, ratio: 39.3701 }, feet: { name: { en: 'Feet', tr: 'Fit' }, ratio: 3.28084 }, yard: { name: { en: 'Yards', tr: 'Yarda' }, ratio: 1.09361 }, mile: { name: { en: 'Miles', tr: 'Mil' }, ratio: 0.000621371 }, nmi: { name: { en: 'Nautical Miles', tr: 'Deniz Mili' }, ratio: 0.000539957 } } },
      area: { name: { en: 'Area', tr: 'Alan' }, icon: '🗺️', units: { m2: { name: { en: 'Square Meters', tr: 'Metrekare' }, ratio: 1 }, km2: { name: { en: 'Square Kilometers', tr: 'Kilometrekare' }, ratio: 0.000001 }, hectare: { name: { en: 'Hectares', tr: 'Hektar' }, ratio: 0.0001 }, acre: { name: { en: 'Acres', tr: 'Aker' }, ratio: 0.000247105 }, sq_ft: { name: { en: 'Square Feet', tr: 'Fitkare' }, ratio: 10.7639 }, sq_in: { name: { en: 'Square Inches', tr: 'İnçkare' }, ratio: 1550.003 } } },
      volume: { name: { en: 'Volume', tr: 'Hacim' }, icon: '🧪', units: { l: { name: { en: 'Liters', tr: 'Litre' }, ratio: 1 }, ml: { name: { en: 'Milliliters', tr: 'Mililitre' }, ratio: 1000 }, m3: { name: { en: 'Cubic Meters', tr: 'Metreküp' }, ratio: 0.001 }, gal: { name: { en: 'Gallons (US)', tr: 'Galon' }, ratio: 0.264172 }, fl_oz: { name: { en: 'Fluid Ounces', tr: 'Sıvı Ons' }, ratio: 33.814 }, cup: { name: { en: 'Cups', tr: 'Su Bardağı' }, ratio: 4.22675 } } }
    }
  },
  mechanics: {
    name: { en: 'Mechanics', tr: 'Mekanik', es: 'Mecánica' },
    categories: {
      weight: { name: { en: 'Mass & Weight', tr: 'Kütle & Ağırlık' }, icon: '⚖️', units: { kg: { name: { en: 'Kilograms', tr: 'Kilogram' }, ratio: 1 }, g: { name: { en: 'Grams', tr: 'Gram' }, ratio: 1000 }, mg: { name: { en: 'Milligrams', tr: 'Miligram' }, ratio: 1000000 }, lb: { name: { en: 'Pounds', tr: 'Libre' }, ratio: 2.20462 }, oz: { name: { en: 'Ounces', tr: 'Ons' }, ratio: 35.274 }, ton: { name: { en: 'Tons', tr: 'Ton' }, ratio: 0.001 }, carat: { name: { en: 'Carats', tr: 'Karat' }, ratio: 5000 } } },
      force: { name: { en: 'Force', tr: 'Kuvvet' }, icon: '🏋️', units: { n: { name: { en: 'Newtons' }, ratio: 1 }, kn: { name: { en: 'Kilonewtons' }, ratio: 0.001 }, lbf: { name: { en: 'Pound-force' }, ratio: 0.224809 } } },
      torque: { name: { en: 'Torque', tr: 'Tork' }, icon: '🔧', units: { nm: { name: { en: 'Newton-meters' }, ratio: 1 }, ft_lb: { name: { en: 'Foot-pounds' }, ratio: 0.737562 } } },
      bmi: { name: { en: 'Body Mass Index (BMI)', tr: 'Beden Kitle İndeksi' }, icon: '🩻', units: { index: { name: { en: 'Standard BMI Score', tr: 'Standart BMI Puanı' }, ratio: 1 } } }
    }
  },
  motion: {
    name: { en: 'Motion', tr: 'Hareket', es: 'Movimiento' },
    categories: {
      speed: { name: { en: 'Speed', tr: 'Hız' }, icon: '🚀', units: { km_h: { name: { en: 'Km/Hour', tr: 'Km/Saat' }, ratio: 1 }, m_s: { name: { en: 'Meters/Second', tr: 'Metre/Saniye' }, ratio: 1 / 3.6 }, mph: { name: { en: 'Miles/Hour', tr: 'Mil/Saat' }, ratio: 0.621371 }, knot: { name: { en: 'Knots', tr: 'Düğüm' }, ratio: 0.539957 } } },
      acceleration: { name: { en: 'Acceleration', tr: 'İvme' }, icon: '🏎️', units: { m_s2: { name: { en: 'Meters/s²' }, ratio: 1 }, g_force: { name: { en: 'G-Force' }, ratio: 0.101972 } } },
      wind_speed: { name: { en: 'Wind Speed', tr: 'Rüzgar Hızı' }, icon: '💨', units: { knots: { name: { en: 'Knots (Rüzgar)' }, ratio: 1 }, beaufort: { name: { en: 'Beaufort Skalası' }, ratio: 1 } } },
      running: { name: { en: 'Running Pace', tr: 'Koşu Temposu' }, icon: '🏃', units: { min_km: { name: { en: 'min/km' }, ratio: 1 } } }
    }
  },
  chemistry: {
    name: { en: 'Chemistry', tr: 'Kimya', es: 'Química' },
    categories: {
      density: { name: { en: 'Density', tr: 'Yoğunluk' }, icon: '🥛', units: { kg_m3: { name: { en: 'kg/m³' }, ratio: 1 }, g_cm3: { name: { en: 'g/cm³' }, ratio: 0.001 } } },
      amount_substance: { name: { en: 'Amount of Substance', tr: 'Madde Miktarı' }, icon: '⚛️', units: { mol: { name: { en: 'Moles' }, ratio: 1 }, mmol: { name: { en: 'Millimoles' }, ratio: 1000 } } },
      molar_mass: { name: { en: 'Molar Mass', tr: 'Molar Kütle' }, icon: '🔬', units: { g_mol: { name: { en: 'g/mol' }, ratio: 1 } } },
      viscosity_dynamic: { name: { en: 'Dynamic Viscosity', tr: 'Dinamik Viskozite' }, icon: '🍯', units: { pa_s: { name: { en: 'Pascal-seconds' }, ratio: 1 }, cp: { name: { en: 'Centipoise' }, ratio: 1000 } } }
    }
  },
  clothing: {
    name: { en: 'Clothing', tr: 'Giyim', es: 'Ropa' },
    categories: {
      shoe_size: { name: { en: 'Shoe Size', tr: 'Ayakkabı Numarası' }, icon: '👟', units: { eu: { name: { en: 'EU Size' }, ratio: 1 }, us: { name: { en: 'US Size' }, ratio: 0.9 }, uk: { name: { en: 'UK Size' }, ratio: 0.85 } } },
      hat_size: { name: { en: 'Hat Size', tr: 'Şapka Ölçüsü' }, icon: '🎩', units: { cm: { name: { en: 'Centimeters' }, ratio: 1 }, inches: { name: { en: 'Inches' }, ratio: 1 / 2.54 } } },
      clothes_dress: { name: { en: 'Clothes: Dress & Suit', tr: 'Elbise & Takım Elbise' }, icon: '👔', units: { standard: { name: { en: 'Standard Size' }, ratio: 1 } } }
    }
  },
  computing: {
    name: { en: 'Computing', tr: 'Bilişim & Bilgisayar' },
    categories: {
      data_storage: { name: { en: 'Data Storage', tr: 'Veri Depolama' }, icon: '💾', units: { b: { name: { en: 'Bytes' }, ratio: 1 }, kb: { name: { en: 'Kilobytes' }, ratio: 1 / 1024 }, mb: { name: { en: 'Megabytes' }, ratio: 1 / (1024 * 1024) }, gb: { name: { en: 'Gigabytes' }, ratio: 1 / (1024 * 1024 * 1024) }, tb: { name: { en: 'Terabytes' }, ratio: 1 / (1024 * 1024 * 1024 * 1024) } } },
      bandwidth: { name: { en: 'Bandwidth', tr: 'Bant Genişliği' }, icon: '🌐', units: { bps: { name: { en: 'bps' }, ratio: 1 }, kbps: { name: { en: 'kbps' }, ratio: 1 / 1000 }, mbps: { name: { en: 'Mbps' }, ratio: 1 / 1000000 }, gbps: { name: { en: 'Gbps' }, ratio: 1 / 1000000000 } } }
    }
  },
  electricity: {
    name: { en: 'Electricity', tr: 'Elektrik', es: 'Electricidad' },
    categories: {
      electric_current: { name: { en: 'Electric Current', tr: 'Elektrik Akımı' }, icon: '🔌', units: { a: { name: { en: 'Amperes' }, ratio: 1 }, ma: { name: { en: 'Milliamperes' }, ratio: 1000 } } },
      voltage: { name: { en: 'Voltage', tr: 'Voltaj' }, icon: '💥', units: { v: { name: { en: 'Volts' }, ratio: 1 }, kv: { name: { en: 'Kilovolts' }, ratio: 0.001 }, mv: { name: { en: 'Millivolts' }, ratio: 1000 } } },
      resistance: { name: { en: 'Electrical Resistance', tr: 'Direnç' }, icon: '🎛️', units: { ohm: { name: { en: 'Ohms' }, ratio: 1 }, kohm: { name: { en: 'Kilohms' }, ratio: 0.001 } } }
    }
  },
  energy: {
    name: { en: 'Energy', tr: 'Enerji & Güç' },
    categories: {
      energy_src: { name: { en: 'Energy', tr: 'Enerji' }, icon: '🔋', units: { j: { name: { en: 'Joules' }, ratio: 1 }, kj: { name: { en: 'Kilojoules' }, ratio: 0.001 }, kcal: { name: { en: 'Kilocalories' }, ratio: 0.000239006 }, kwh: { name: { en: 'Kilowatt-hours' }, ratio: 1 / 3600000 } } },
      power: { name: { en: 'Power', tr: 'Güç' }, icon: '⚡', units: { w: { name: { en: 'Watts' }, ratio: 1 }, kw: { name: { en: 'Kilowatts' }, ratio: 0.001 }, hp: { name: { en: 'Horsepower' }, ratio: 0.00134102 } } },
      temperature: { name: { en: 'Temperature', tr: 'Sıcaklık' }, icon: '🌡️', units: { c: { name: { en: 'Celsius' }, ratio: 1 }, f: { name: { en: 'Fahrenheit' }, ratio: 1 }, k: { name: { en: 'Kelvin' }, ratio: 1 } } },
      fuel_consumption: { name: { en: 'Fuel Consumption', tr: 'Yakıt Tüketimi' }, icon: '⛽', units: { l_100km: { name: { en: 'L/100km' }, ratio: 1 }, mpg: { name: { en: 'MPG (US)' }, ratio: 235.215 } } }
    }
  },
  other: {
    name: { en: 'Other Metrics', tr: 'Diğer Birimler' },
    categories: {
      pressure: { name: { en: 'Pressure', tr: 'Basınç' }, icon: '🎈', units: { pa: { name: { en: 'Pascal' }, ratio: 1 }, bar: { name: { en: 'Bar' }, ratio: 0.00001 }, psi: { name: { en: 'PSI' }, ratio: 0.000145038 }, atm: { name: { en: 'Atmospheres' }, ratio: 0.0000098692 } } },
      currency: { name: { en: 'Currency', tr: 'Para Birimi' }, icon: '💵', units: { usd: { name: { en: 'US Dollar' }, ratio: 1 }, eur: { name: { en: 'Euro' }, ratio: 0.92 }, try: { name: { en: 'Türk Lirası' }, ratio: 32.5 }, gbp: { name: { en: 'British Pound' }, ratio: 0.79 } } },
      angle: { name: { en: 'Angle', tr: 'Açı' }, icon: '📐', units: { deg: { name: { en: 'Degrees' }, ratio: 1 }, rad: { name: { en: 'Radians' }, ratio: 0.0174533 }, grad: { name: { en: 'Gradians' }, ratio: 1.11111 } } },
      frequency: { name: { en: 'Frequency', tr: 'Frekans' }, icon: '📻', units: { hz: { name: { en: 'Hertz' }, ratio: 1 }, khz: { name: { en: 'Kilohertz' }, ratio: 0.001 }, mhz: { name: { en: 'Megahertz' }, ratio: 0.000001 } } },
      paper_size: { name: { en: 'Paper Size', tr: 'Kağıt Boyutu' }, icon: '📄', units: { a4: { name: { en: 'A4' }, ratio: 1 }, a3: { name: { en: 'A3' }, ratio: 0.5 }, letter: { name: { en: 'Letter' }, ratio: 0.95 } } }
    }
  }
};

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
    if (from === 'k') celsius = val - 273.15;
    if (to === 'c') return celsius;
    if (to === 'f') return (celsius * 9 / 5) + 32;
    if (to === 'k') return celsius + 273.15;
  }
  const cat = categories[catKey];
  if (!cat || !cat.units[from] || !cat.units[to]) return 0;
  return (val / cat.units[from].ratio) * cat.units[to].ratio;
};
