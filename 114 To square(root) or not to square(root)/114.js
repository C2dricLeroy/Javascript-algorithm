function squareOrSquareRoot(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      result.push(Math.sqrt(array[i]));
    } else result.push(array[i] ** 2);
  }
  return result;
}
