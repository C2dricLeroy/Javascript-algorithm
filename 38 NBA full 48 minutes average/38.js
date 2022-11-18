function pointsPer48(ppg, mpg) {
  const total = ((ppg / mpg) * 48);
  if (mpg === 0 || ppg === 0) {
    return 0;
  }
  return Number(total.toFixed(1));
}
