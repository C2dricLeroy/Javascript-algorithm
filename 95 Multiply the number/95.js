function multiply(number) {
  const exponent = Math.abs(number).toString().length;
  return number * 5 ** exponent;
}
