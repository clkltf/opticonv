export const converter: any = {
  length: {
    m: 1,
    km: 0.001,
    inch: 39.37,
    feet: 3.28
  },
  convert: (value: number, from: string, to: string, type: 'length') => {
    const unitMap = converter[type];
    const baseValue = value / unitMap[from];
    return baseValue * unitMap[to];
  }
};
