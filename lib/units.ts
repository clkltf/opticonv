export const translations: any = {
  en: { title: 'OptiConv', sub: 'World\'s Ultimate Unit Conversion Platform', inputLabel: 'Value to convert', resultLabel: 'Converted value', selectCat: 'Measurement Categories', home: 'Home', sitemap: 'Sitemap', contact: 'Contact' },
  tr: { title: 'OptiConv', sub: 'Dünyanın En Kapsamlı Birim Dönüştürme Platformu', inputLabel: 'Dönüştürülecek değer', resultLabel: 'Dönüştürülen değer', selectCat: 'Ölçüm Kategorileri', home: 'Ana Sayfa', sitemap: 'Site Haritası', contact: 'İletişim' },
  es: { title: 'OptiConv', sub: 'La Plataforma de Conversión Más Grande del Mundo', inputLabel: 'Valor a convertir', resultLabel: 'Valor convertido', selectCat: 'Categorías de Medición', home: 'Inicio', sitemap: 'Mapa del Sitio', contact: 'Contacto' },
  hi: { title: 'OptiConv', sub: 'दुनिया का सबसे बड़ा इकाई कनवर्टर', inputLabel: 'कन्वर्ट करने के लिए मान', resultLabel: 'परिवर्तित मान', selectCat: 'माप श्रेणियां', home: 'होम', sitemap: 'साइटमैप', contact: 'संपर्क' }
};

export const categories: any = {
  length: { name: { en: 'Length', tr: 'Uzunluk', es: 'Longitud', hi: 'लंबाई' }, icon: '📏', units: { m: { name: { en: 'Meters', tr: 'Metre' }, ratio: 1 }, km: { name: { en: 'Kilometers', tr: 'Kilometre' }, ratio: 0.001 }, cm: { name: { en: 'Centimeters', tr: 'Santimetre' }, ratio: 100 }, mm: { name: { en: 'Millimeters', tr: 'Milimetre' }, ratio: 1000 }, inch: { name: { en: 'Inches', tr: 'İnç' }, ratio: 39.3701 }, feet: { name: { en: 'Feet', tr: 'Fit' }, ratio: 3.28084 }, yard: { name: { en: 'Yards', tr: 'Yarda' }, ratio: 1.09361 }, mile: { name: { en: 'Miles', tr: 'Mil' }, ratio: 0.000621371 }, nmi: { name: { en: 'Nautical Miles', tr: 'Deniz Mili' }, ratio: 0.000539957 } } },
  weight: { name: { en: 'Weight & Mass', tr: 'Ağırlık & Kütle', es: 'Peso', hi: 'वजन' }, icon: '⚖️', units: { kg: { name: { en: 'Kilograms', tr: 'Kilogram' }, ratio: 1 }, g: { name: { en: 'Grams', tr: 'Gram' }, ratio: 1000 }, mg: { name: { en: 'Milligrams', tr: 'Miligram' }, ratio: 1000000 }, lb: { name: { en: 'Pounds', tr: 'Libre' }, ratio: 2.20462 }, oz: { name: { en: 'Ounces', tr: 'Ons' }, ratio: 35.274 }, ton: { name: { en: 'Tons', tr: 'Ton' }, ratio: 0.001 }, carat: { name: { en: 'Carats', tr: 'Karat' }, ratio: 5000 } } },
  temperature: { name: { en: 'Temperature', tr: 'Sıcaklık', es: 'Temperatura', hi: 'तापमान' }, icon: '🌡️', units: { c: { name: { en: 'Celsius', tr: 'Santigrat' }, ratio: 1 }, f: { name: { en: 'Fahrenheit', tr: 'Fahrenhayt' }, ratio: 1 }, k: { name: { en: 'Kelvin', tr: 'Kelvin' }, ratio: 1 } } },
  area: { name: { en: 'Area', tr: 'Alan', es: 'Área', hi: 'क्षेत्रफल' }, icon: '🗺️', units: { m2: { name: { en: 'Square Meters', tr: 'Metrekare' }, ratio: 1 }, km2: { name: { en: 'Square Kilometers', tr: 'Kilometrekare' }, ratio: 0.000001 }, hectare: { name: { en: 'Hectares', tr: 'Hektar' }, ratio: 0.0001 }, acre: { name: { en: 'Acres', tr: 'Aker' }, ratio: 0.000247105 }, sq_ft: { name: { en: 'Square Feet', tr: 'Metrekare (Fit)' }, ratio: 10.7639 } } },
  volume: { name: { en: 'Volume', tr: 'Hacim', es: 'Volumen', hi: 'आयतन' }, icon: '🧪', units: { l: { name: { en: 'Liters', tr: 'Litre' }, ratio: 1 }, ml: { name: { en: 'Milliliters', tr: 'Mililitre' }, ratio: 1000 }, m3: { name: { en: 'Cubic Meters', tr: 'Metreküp' }, ratio: 0.001 }, gal: { name: { en: 'Gallons', tr: 'Galon' }, ratio: 0.264172 }, fl_oz: { name: { en: 'Fluid Ounces', tr: 'Sıvı Ons' }, ratio: 33.814 } } },
  speed: { name: { en: 'Speed', tr: 'Hız', es: 'Velocidad', hi: 'गति' }, icon: '🚀', units: { m_s: { name: { en: 'Meters/Second', tr: 'Metre/Saniye' }, ratio: 1 }, km_h: { name: { en: 'Km/Hour', tr: 'Km/Saat' }, ratio: 3.6 }, mph: { name: { en: 'Miles/Hour', tr: 'Mil/Saat' }, ratio: 2.23694 }, knot: { name: { en: 'Knots', tr: 'Düğüm' }, ratio: 1.94384 } } },
  time: { name: { en: 'Time', tr: 'Zaman', es: 'Tiempo', hi: 'समय' }, icon: '⏱️', units: { sec: { name: { en: 'Seconds', tr: 'Saniye' }, ratio: 1 }, min: { name: { en: 'Minutes', tr: 'Dakika' }, ratio: 1 / 60 }, hour: { name: { en: 'Hours', tr: 'Saat' }, ratio: 1 / 3600 }, day: { name: { en: 'Days', tr: 'Gün' }, ratio: 1 / 86400 }, week: { name: { en: 'Weeks', tr: 'Hafta' }, ratio: 1 / 604800 }, year: { name: { en: 'Years', tr: 'Yıl' }, ratio: 1 / 31536000 } } },
  data: { name: { en: 'Digital Data', tr: 'Dijital Veri', es: 'Datos', hi: 'डेटा' }, icon: '💾', units: { b: { name: { en: 'Bytes', tr: 'Bayt' }, ratio: 1 }, kb: { name: { en: 'Kilobytes', tr: 'Kilobayt' }, ratio: 1 / 1024 }, mb: { name: { en: 'Megabytes', tr: 'Megabayt' }, ratio: 1 / (1024 * 1024) }, gb: { name: { en: 'Gigabytes', tr: 'Gigabayt' }, ratio: 1 / (1024 * 1024 * 1024) }, tb: { name: { en: 'Terabytes', tr: 'Terabayt' }, ratio: 1 / (1024 * 1024 * 1024 * 1024) } } },
  pressure: { name: { en: 'Pressure', tr: 'Basınç', es: 'Presión', hi: 'दबाव' }, icon: '🎈', units: { pa: { name: { en: 'Pascal', tr: 'Pascal' }, ratio: 1 }, bar: { name: { en: 'Bar', tr: 'Bar' }, ratio: 0.00001 }, psi: { name: { en: 'PSI', tr: 'PSI' }, ratio: 0.000145038 }, atm: { name: { en: 'Atmospheres', tr: 'Atmosfer' }, ratio: 0.0000098692 } } },
  power: { name: { en: 'Power', tr: 'Güç', es: 'Potencia', hi: 'शक्ति' }, icon: '⚡', units: { w: { name: { en: 'Watts', tr: 'Watt' }, ratio: 1 }, kw: { name: { en: 'Kilowatts', tr: 'Kilowatt' }, ratio: 0.001 }, hp: { name: { en: 'Horsepower', tr: 'Beygir Gücü' }, ratio: 0.00134102 } } },
  energy: { name: { en: 'Energy', tr: 'Enerji', es: 'Energía', hi: 'ऊर्जा' }, icon: '🔋', units: { j: { name: { en: 'Joules', tr: 'Joule' }, ratio: 1 }, kj: { name: { en: 'Kilojoules', tr: 'Kilojoule' }, ratio: 0.001 }, kcal: { name: { en: 'Kilocalories', tr: 'Kilokalori' }, ratio: 0.000239006 }, kwh: { name: { en: 'Kilowatt-hours', tr: 'Kilowattsaat' }, ratio: 1 / 3600000 } } },
  angle: { name: { en: 'Angle', tr: 'Açı', es: 'Ángulo', hi: 'कोण' }, icon: '📐', units: { deg: { name: { en: 'Degrees', tr: 'Derece' }, ratio: 1 }, rad: { name: { en: 'Radians', tr: 'Radyan' }, ratio: 0.0174533 }, grad: { name: { en: 'Gradians', tr: 'Grad' }, ratio: 1.11111 } } },
  frequency: { name: { en: 'Frequency', tr: 'Frekans', es: 'Frecuencia', hi: 'आवृत्ति' }, icon: '📻', units: { hz: { name: { en: 'Hertz', tr: 'Hertz' }, ratio: 1 }, khz: { name: { en: 'Kilohertz', tr: 'Kilohertz' }, ratio: 0.001 }, mhz: { name: { en: 'Megahertz', tr: 'Megahertz' }, ratio: 0.000001 }, ghz: { name: { en: 'Gigahertz', tr: 'Gigahertz' }, ratio: 0.000000001 } } },
  force: { name: { en: 'Force', tr: 'Kuvvet' }, icon: '🏋️', units: { n: { name: { en: 'Newtons' }, ratio: 1 }, kn: { name: { en: 'Kilonewtons' }, ratio: 0.001 }, lbf: { name: { en: 'Pound-force' }, ratio: 0.224809 } } },
  torque: { name: { en: 'Torque', tr: 'Tork' }, icon: '🔧', units: { nm: { name: { en: 'Newton-meters' }, ratio: 1 }, ft_lb: { name: { en: 'Foot-pounds' }, ratio: 0.737562 } } },
  acceleration: { name: { en: 'Acceleration', tr: 'İvme' }, icon: '🏎️', units: { m_s2: { name: { en: 'Meters/s²' }, ratio: 1 }, g_force: { name: { en: 'G-Force' }, ratio: 0.101972 } } },
  density: { name: { en: 'Density', tr: 'Yoğunluk' }, icon: '🥛', units: { kg_m3: { name: { en: 'kg/m³' }, ratio: 1 }, g_cm3: { name: { en: 'g/cm³' }, ratio: 0.001 } } },
  electric_current: { name: { en: 'Electric Current', tr: 'Elektrik Akımı' }, icon: '🔌', units: { a: { name: { en: 'Amperes' }, ratio: 1 }, ma: { name: { en: 'Milliamperes' }, ratio: 1000 } } },
  voltage: { name: { en: 'Voltage', tr: 'Voltaj' }, icon: '💥', units: { v: { name: { en: 'Volts' }, ratio: 1 }, kv: { name: { en: 'Kilovolts' }, ratio: 0.001 }, mv: { name: { en: 'Millivolts' }, ratio: 1000 } } },
  resistance: { name: { en: 'Electric Resistance', tr: 'Direnç' }, icon: '🎛️', units: { ohm: { name: { en: 'Ohms' }, ratio: 1 }, kohm: { name: { en: 'Kilohms' }, ratio: 0.001 } } },
  capacitance: { name: { en: 'Capacitance', tr: 'Kapasitans' }, icon: '🧲', units: { farad: { name: { en: 'Farads' }, ratio: 1 }, uf: { name: { en: 'Microfarads' }, ratio: 1000000 } } },
  inductance: { name: { en: 'Inductance', tr: 'Endüktans' }, icon: '🌀', units: { henry: { name: { en: 'Henries' }, ratio: 1 }, mh: { name: { en: 'Millihenries' }, ratio: 1000 } } },
  charge: { name: { en: 'Electric Charge', tr: 'Elektrik Yükü' }, icon: '🔋', units: { coulomb: { name: { en: 'Coulombs' }, ratio: 1 }, ah: { name: { en: 'Ampere-hours' }, ratio: 1 / 3600 } } },
  illuminance: { name: { en: 'Illuminance', tr: 'Aydınlık' }, icon: '💡', units: { lux: { name: { en: 'Lux' }, ratio: 1 }, fc: { name: { en: 'Foot-candles' }, ratio: 0.092903 } } },
  luminous_intensity: { name: { en: 'Luminous Intensity', tr: 'Işık Şiddeti' }, icon: '🕯️', units: { cd: { name: { en: 'Candela' }, ratio: 1 } } },
  luminance: { name: { en: 'Luminance', tr: 'Aparlaklık' }, icon: '🖥️', units: { nit: { name: { en: 'Nits' }, ratio: 1 }, cd_m2: { name: { en: 'cd/m²' }, ratio: 1 } } },
  luminous_flux: { name: { en: 'Luminous Flux', tr: 'Işık Akısı' }, icon: '☀️', units: { lumen: { name: { en: 'Lumens' }, ratio: 1 } } },
  fuel_consumption: { name: { en: 'Fuel Consumption', tr: 'Yakıt Tüketimi' }, icon: '⛽', units: { l_100km: { name: { en: 'L/100km' }, ratio: 1 }, mpg: { name: { en: 'MPG (US)' }, ratio: 235.215 } } },
  typography: { name: { en: 'Typography', tr: 'Tipografi' }, icon: '🔤', units: { pt: { name: { en: 'Points' }, ratio: 1 }, px: { name: { en: 'Pixels' }, ratio: 1.33333 }, em: { name: { en: 'Em' }, ratio: 1 / 12 } } },
  cooking_volume: { name: { en: 'Cooking Volume', tr: 'Mutfak Ölçüleri' }, icon: '🍳', units: { tbsp: { name: { en: 'Tablespoons' }, ratio: 1 }, tsp: { name: { en: 'Teaspoons' }, ratio: 3 }, cup: { name: { en: 'Cups' }, ratio: 1 / 16 } } },
  flow_volumetric: { name: { en: 'Volumetric Flow', tr: 'Hacimsel Debiye' }, icon: '💧', units: { m3_s: { name: { en: 'm³/s' }, ratio: 1 }, l_min: { name: { en: 'L/min' }, ratio: 60000 } } },
  flow_mass: { name: { en: 'Mass Flow', tr: 'Kütlesel Debiye' }, icon: '⏳', units: { kg_s: { name: { en: 'kg/s' }, ratio: 1 }, lb_h: { name: { en: 'lb/h' }, ratio: 7936.64 } } },
  viscosity_dynamic: { name: { en: 'Dynamic Viscosity', tr: 'Dinamik Vizkozite' }, icon: '🍯', units: { pa_s: { name: { en: 'Pascal-seconds' }, ratio: 1 }, cp: { name: { en: 'Centipoise' }, ratio: 1000 } } },
  viscosity_kinematic: { name: { en: 'Kinematic Viscosity', tr: 'Kinematik Vizkozite' }, icon: '🌪️', units: { m2_s: { name: { en: 'm²/s' }, ratio: 1 }, cst: { name: { en: 'Centistokes' }, ratio: 1000000 } } },
  radiation_activity: { name: { en: 'Radiation Activity', tr: 'Radyasyon Aktivitesi' }, icon: '☢️', units: { bq: { name: { en: 'Becquerels' }, ratio: 1 }, ci: { name: { en: 'Curies' }, ratio: 1 / 37000000000 } } },
  radiation_exposure: { name: { en: 'Radiation Exposure', tr: 'Radyasyona Maruz Kalma' }, icon: '☣️', units: { r: { name: { en: 'Roentgens' }, ratio: 1 }, c_kg: { name: { en: 'C/kg' }, ratio: 0.000258 } } },
  absorbed_dose: { name: { en: 'Absorbed Dose', tr: 'Sorgulanan Doz' }, icon: '🏥', units: { gy: { name: { en: 'Grays' }, ratio: 1 }, rad: { name: { en: 'Rads' }, ratio: 100 } } },
  sound: { name: { en: 'Sound Level', tr: 'Ses Seviyesi' }, icon: '🔊', units: { db: { name: { en: 'Decibels' }, ratio: 1 }, bel: { name: { en: 'Bels' }, ratio: 0.1 } } },
  concentration_molar: { name: { en: 'Molar Concentration', tr: 'Molar Konsantrasyon' }, icon: '🧪', units: { mol_m3: { name: { en: 'mol/m³' }, ratio: 1 }, molar: { name: { en: 'Molar (M)' }, ratio: 0.001 } } },
  concentration_mass: { name: { en: 'Mass Concentration', tr: 'Kütlesel Konsantrasyon' }, icon: '⚗️', units: { kg_l: { name: { en: 'kg/L' }, ratio: 1 }, g_l: { name: { en: 'g/L' }, ratio: 1000 } } },
  specific_volume: { name: { en: 'Specific Volume', tr: 'Özgül Hacim' }, icon: '📦', units: { m3_kg: { name: { en: 'm³/kg' }, ratio: 1 }, ft3_lb: { name: { en: 'ft³/lb' }, ratio: 16.0185 } } },
  thermal_conductivity: { name: { en: 'Thermal Conductivity', tr: 'Isıl İletkenlik' }, icon: '🔥', units: { w_mk: { name: { en: 'W/(m·K)' }, ratio: 1 } } },
  thermal_resistance: { name: { en: 'Thermal Resistance', tr: 'Isıl Direnç' }, icon: '❄️', units: { k_w: { name: { en: 'K/W' }, ratio: 1 } } },
  specific_heat: { name: { en: 'Specific Heat Capacity', tr: 'Özgül Isı Kapasitesi' }, icon: '🌡️', units: { j_kgk: { name: { en: 'J/(kg·K)' }, ratio: 1 } } },
  apparent_power: { name: { en: 'Apparent Power', tr: 'Görünür Güç' }, icon: '⚡', units: { va: { name: { en: 'Volt-Amperes' }, ratio: 1 }, kva: { name: { en: 'kVA' }, ratio: 0.001 } } },
  reactive_power: { name: { en: 'Reactive Power', tr: 'Reaktif Güç' }, icon: '📉', units: { var: { name: { en: 'VAR' }, ratio: 1 }, kvar: { name: { en: 'kVAR' }, ratio: 0.001 } } },
  magnetic_flux: { name: { en: 'Magnetic Flux', tr: 'Manyetik Akı' }, icon: '🧲', units: { wb: { name: { en: 'Webers' }, ratio: 1 }, mx: { name: { en: 'Maxwells' }, ratio: 100000000 } } },
  magnetic_field: { name: { en: 'Magnetic Field', tr: 'Manyetik Alan' }, icon: '🎚️', units: { tesla: { name: { en: 'Tesla' }, ratio: 1 }, gauss: { name: { en: 'Gauss' }, ratio: 10000 } } },
  digital_resolution: { name: { en: 'Image Resolution', tr: 'Görüntü Çözünürlüğü' }, icon: '🖼️', units: { dpi: { name: { en: 'DPI' }, ratio: 1 }, dpc: { name: { en: 'DPC (dots/cm)' }, ratio: 0.3937 } } },
  data_transfer_rate: { name: { en: 'Data Transfer Rate', tr: 'Veri Aktarım Hızı' }, icon: '🌐', units: { bps: { name: { en: 'bps' }, ratio: 1 }, kbps: { name: { en: 'kbps' }, ratio: 1 / 1000 }, mbps: { name: { en: 'Mbps' }, ratio: 1 / 1000000 }, gbps: { name: { en: 'Gbps' }, ratio: 1 / 1000000000 } } }
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
