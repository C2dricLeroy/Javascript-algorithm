function expressionMatter(a, b, c) {
  const result = [
    a + b + c,
    a * b * c,
    (a + b) * c,
    a * (b + c),
    a + (b * c),
    a * b + c,
  ];
  return Math.max(...result);
}
