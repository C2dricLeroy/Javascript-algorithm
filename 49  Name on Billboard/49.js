function billboard(name, price = 30) {
  let sum = 0;
  for (let i = 0; i < name.length; i += 1) {
    sum += price;
  }
  return sum;
}
