function generateSeriesProblem3(a) {
  const limit = a % 2 === 0 ? a - 1 : a;
  const result = [];
  for (let i = 1; result.length < limit; i += 2) {
    result.push(i);
  }
  return result;
}

console.log(generateSeriesProblem3(7));
