function slope(points) {
  const divider = (points[2] - points[0]);
  if (divider === 0) {
    return 'undefined';
  } return ((points[3] - points[1]) / (points[2] - points[0])).toString();
}
