export function analyzeArray(datas) {
  let sum = datas.reduce((total, data) => {
    total += data;
    return total;
  }, 0);

  if (datas.length === 0) {
    return {
      average: NaN,
      min: "no value to access",
      max: "no value to access",
      length: datas.length
    };
  }
  return {
    average: Number((sum / datas.length).toPrecision(2)),
    min: Math.min(...datas),
    max: Math.max(...datas),
    length: datas.length
  };
}
