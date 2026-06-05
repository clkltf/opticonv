export const translations: any = {
  en: { title: 'OptiConv', sub: 'World\'s Ultimate Unit Conversion Platform', searchPlaceholder: 'Search categories...', byFamily: 'Converters by Family', home: 'Home', sitemap: 'Sitemap', quick: 'Quick conversion' },
  es: { title: 'OptiConv', sub: 'La Plataforma de Conversión Más Grande del Mundo', searchPlaceholder: 'Buscar categorías...', byFamily: 'Conversores por Familia', home: 'Inicio', sitemap: 'Mapa del Sitio', quick: 'Conversión rápida' },
  hi: { title: 'OptiConv', sub: 'दुनिया का सबसे बड़ा इकाई कनवर्टर', searchPlaceholder: 'श्रेणियां खोजें...', byFamily: 'परिवार के अनुसार कनवर्टर', home: 'होम', sitemap: 'साइटमैप', quick: 'त्वरित रूपांतरण' },
  zh: { title: 'OptiConv', sub: '全球终极单位换算平台', searchPlaceholder: '搜索类别...', byFamily: '按家族分类的换算器', home: '首页', sitemap: '网站地图', quick: '快速换算' }
};

export const families: any = {
  dimension: {
    name: { en: 'Dimension', es: 'Dimensión', hi: 'आयाम', zh: '维度空间' },
    categories: {
      length: {
        slugs: { en: 'length', es: 'longitud', hi: 'lambai', zh: 'changdu' },
        name: { en: 'Length 📏', es: 'Longitud 📏', hi: 'लंबाई 📏', zh: '长度 📏' },
        units: {
          m: { name: { en: 'Meters', es: 'Metros', hi: 'मीटर', zh: '米' }, ratio: 1 },
          km: { name: { en: 'Kilometers', es: 'Kilómetros', hi: 'किलोमीटर', zh: '千米' }, ratio: 0.001 },
          cm: { name: { en: 'Centimeters', es: 'Centímetros', hi: 'सेंटीमीटर', zh: '厘米' }, ratio: 100 },
          inch: { name: { en: 'Inches', es: 'Pulgadas', hi: 'इंच', zh: '英寸' }, ratio: 39.3701 },
          feet: { name: { en: 'Feet', es: 'Pies', hi: 'फिट', zh: '英尺' }, ratio: 3.28084 },
          mile: { name: { en: 'Miles', es: 'Millas', hi: 'मील', zh: '英里' }, ratio: 0.000621371 }
        }
      },
      area: {
        slugs: { en: 'area', es: 'area', hi: 'kshetrafal', zh: 'mianji' },
        name: { en: 'Area 🗺️', es: 'Área 🗺️', hi: 'क्षेत्रफल 🗺️', zh: '面积 🗺️' },
        units: {
          m2: { name: { en: 'Square Meters', es: 'Metros Cuadrados', hi: 'वर्ग मीटर', zh: '平方米' }, ratio: 1 },
          km2: { name: { en: 'Square Kilometers', es: 'Kilómetros Cuadrados', hi: 'वर्ग किलोमीटर', zh: '平方千米' }, ratio: 0.000001 },
          acre: { name: { en: 'Acres', es: 'Acres', hi: 'एकड़', zh: '英亩' }, ratio: 0.000247105 }
        }
      },
      volume: {
        slugs: { en: 'volume', es: 'volumen', hi: 'ayatan', zh: 'tiji' },
        name: { en: 'Volume 🧪', es: 'Volumen 🧪', hi: 'आयतन 🧪', zh: '体积 🧪' },
        units: {
          l: { name: { en: 'Liters', es: 'Litros', hi: 'लीटर', zh: '升' }, ratio: 1 },
          ml: { name: { en: 'Milliliters', es: 'Mililitros', hi: 'मिलीलीटर', zh: '毫升' }, ratio: 1000 },
          m3: { name: { en: 'Cubic Meters', es: 'Metros Cúbicos', hi: 'घन meter', zh: '立方米' }, ratio: 0.001 },
          gal: { name: { en: 'Gallons', es: 'Galones', hi: 'गैलन', zh: '加仑' }, ratio: 0.264172 }
        }
      }
    }
  },
  mechanics: {
    name: { en: 'Mechanics', es: 'Mecánica', hi: 'यांत्रिकी', zh: '力学机械' },
    categories: {
      weight: {
        slugs: { en: 'weight', es: 'peso', hi: 'vajan', zh: 'zhongliang' },
        name: { en: 'Mass & Weight ⚖️', es: 'Peso y Masa ⚖️', hi: 'वजन ⚖️', zh: '重量与质量 ⚖️' },
        units: {
          kg: { name: { en: 'Kilograms', es: 'Kilogramos', hi: 'किलोग्राम', zh: '千克' }, ratio: 1 },
          g: { name: { en: 'Grams', es: 'Gramos', hi: 'ग्राम', zh: '克' }, ratio: 1000 },
          lb: { name: { en: 'Pounds', es: 'Libras', hi: 'पाउंड', zh: '磅' }, ratio: 2.20462 },
          ton: { name: { en: 'Tons', es: 'Toneladas', hi: 'टन', zh: '吨' }, ratio: 0.001 }
        }
      },
      force: {
        slugs: { en: 'force', es: 'fuerza', hi: 'bal', zh: 'liliang' },
        name: { en: 'Force 🏋️', es: 'Fuerza 🏋️', hi: 'बल 🏋️', zh: '力 🏋️' },
        units: {
          n: { name: { en: 'Newtons', es: 'Newtons', hi: 'न्यूटन', zh: '牛顿' }, ratio: 1 },
          kn: { name: { en: 'Kilonewtons', es: 'Kilonewtons', hi: 'किलोन्यूटन', zh: '千牛' }, ratio: 0.001 }
        }
      }
    }
  },
  motion: {
    name: { en: 'Motion', es: 'Movimiento', hi: 'गति', zh: '运动速度' },
    categories: {
      speed: {
        slugs: { en: 'speed', es: 'velocidad', hi: 'gati', zh: 'sudu' },
        name: { en: 'Speed 🚀', es: 'Velocidad 🚀', hi: 'गति 🚀', zh: '速度 🚀' },
        units: {
          km_h: { name: { en: 'Km/Hour', es: 'Km/Hora', hi: 'किमी/घंटा', zh: '千米/小时' }, ratio: 1 },
          mph: { name: { en: 'Miles/Hour', es: 'Millas/Hora', hi: 'मील/घंटा', zh: '英里/小时' }, ratio: 0.621371 },
          m_s: { name: { en: 'Meters/Second', es: 'Metros/Segundo', hi: 'मीटर/सेकंड', zh: '米/秒' }, ratio: 1 / 3.6 }
        }
      }
    }
  },
  computing: {
    name: { en: 'Computing', es: 'Informática', hi: 'कंप्यूटिंग', zh: '数据计算' },
    categories: {
      data_storage: {
        slugs: { en: 'data-storage', es: 'almacenamiento', hi: 'data-storage', zh: 'shuju-cunchu' },
        name: { en: 'Data Storage 💾', es: 'Almacenamiento 💾', hi: 'डेटा स्टोरेज 💾', zh: '数据存储 💾' },
        units: {
          b: { name: { en: 'Bytes', es: 'Bytes', hi: 'बाइट', zh: '字节' }, ratio: 1 },
          mb: { name: { en: 'Megabytes', es: 'Megabytes', hi: 'मेगाबाइट', zh: '兆字节' }, ratio: 1 / (1024 * 1024) },
          gb: { name: { en: 'Gigabytes', es: 'Gigabytes', hi: 'गीगाबाइट', zh: '吉字节' }, ratio: 1 / (1024 * 1024 * 1024) }
        }
      }
    }
  },
  energy: {
    name: { en: 'Energy', es: 'Energía', hi: 'ऊर्जा', zh: '能量与热量' },
    categories: {
      power: {
        slugs: { en: 'power', es: 'potencia', hi: 'shakti', zh: 'gonglv' },
        name: { en: 'Power ⚡', es: 'Potencia ⚡', hi: 'शक्ति ⚡', zh: '功率 ⚡' },
        units: {
          w: { name: { en: 'Watts', es: 'Watts', hi: 'वाट', zh: '瓦特' }, ratio: 1 },
          hp: { name: { en: 'Horsepower', es: 'Caballos Fuerza', hi: 'हॉर्सपावर', zh: '马力' }, ratio: 0.00134102 }
        }
      },
      temperature: {
        slugs: { en: 'temperature', es: 'temperatura', hi: 'tapman', zh: 'wendu' },
        name: { en: 'Temperature 🌡️', es: 'Temperatura 🌡️', hi: 'तापमान 🌡️', zh: '温度 🌡️' },
        units: {
          c: { name: { en: 'Celsius', es: 'Celsius', hi: 'सेल्सियस', zh: '摄氏度' }, ratio: 1 },
          f: { name: { en: 'Fahrenheit', es: 'Fahrenheit', hi: 'फ़ारेनहाइट', zh: '华氏度' }, ratio: 1 }
        }
      }
    }
  }
};

export const findCategoryByKeyOrSlug = (inputSlug: string, lang: string) => {
  for (const famKey of Object.keys(families)) {
    for (const catKey of Object.keys(families[famKey].categories)) {
      const cat = families[famKey].categories[catKey];
      if (cat.slugs[lang] === inputSlug || catKey === inputSlug) {
        return { catKey, cat };
      }
    }
  }
  return { catKey: null, cat: null };
};

export const categories: any = {};
Object.keys(families).forEach((famKey) => {
  Object.keys(families[famKey].categories).forEach((catKey) => {
    categories[catKey] = families[famKey].categories[catKey];
  });
});

export const convert = (val: number, from: string, to: string, catKey: string) => {
  if (!categories[catKey]) return 0;
  const cat = categories[catKey];
  if (!cat.units[from] || !cat.units[to]) return 0;
  
  if (catKey === 'temperature') {
    if (from === to) return val;
    let celsius = val;
    if (from === 'f') celsius = (val - 32) * 5 / 9;
    if (to === 'c') return celsius;
    if (to === 'f') return (celsius * 9 / 5) + 32;
  }
  return (val / cat.units[from].ratio) * cat.units[to].ratio;
};
