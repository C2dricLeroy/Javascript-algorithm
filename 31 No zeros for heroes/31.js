function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/g, ''));
}
