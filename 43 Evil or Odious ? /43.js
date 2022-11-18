function evil(n) {
  let sum = 0;

  for (let i = 0; i < n.toString(2).length; i += 1) {
    if (n.toString(2)[i] === '1') {
      sum += 1;
    }
  }
  console.log(sum);
  if (sum % 2 === 0) {
    return "It's Evil!";
  } return "It's Odious!";
}
