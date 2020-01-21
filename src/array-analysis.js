const arrayAnalysis = array => ({
  length: array.length,
  average: array.reduce((acc, item) => acc + item, 0) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
});

export default arrayAnalysis;
