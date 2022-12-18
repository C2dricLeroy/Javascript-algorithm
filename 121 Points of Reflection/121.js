function symmetricPoint(p, q) {
  const Xc = 2 * q[0] - p[0];
  const Yc = 2 * q[1] - p[1];
  return [Xc, Yc];
}
