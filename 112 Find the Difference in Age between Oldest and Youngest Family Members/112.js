function differenceInAges(ages) {
  const minimum = Math.min(...ages);
  const maximum = Math.max(...ages);
  const difference = maximum - minimum;
  return [minimum, maximum, difference];
}
