function lowercaseCount(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/)) {
      sum += 1;
    }
  } return sum;
}
