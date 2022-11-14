function getSumOfDigits(integer) {
  let sum = 0;
  const digits = integer.toString();
  for (let i = 0; i < digits.length; i += 1) {
    sum += Number(digits[i]);
  }
  return sum;
}
