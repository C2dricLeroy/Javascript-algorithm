function dutyFree(normPrice, discount, hol) {
  const reduction = normPrice * (discount / 100);
  return Math.floor(hol / reduction);
}
