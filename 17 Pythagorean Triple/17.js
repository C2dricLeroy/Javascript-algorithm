function isPythagoreanTriple(integers) {
  const [a, b, c] = integers.sort((x, y) => x - y);
  if (c ** 2 === (a ** 2 + b ** 2)) {
    return true;
  } return false;
}
