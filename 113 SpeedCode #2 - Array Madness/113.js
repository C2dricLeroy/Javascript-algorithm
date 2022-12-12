function arrayMadness(a, b) {
  const acarre = a.map((x) => x ** 2);
  const bcarre = b.map((x) => x ** 3);
  return acarre.reduce((a, b) => a + b) > bcarre.reduce((a, b) => a + b);
}
