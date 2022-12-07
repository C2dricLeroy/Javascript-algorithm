function tripleTrouble(one, two, three) {
  let solution = '';
  for (let i = 0; i < one.length; i++) {
    solution += `${one[i]}${two[i]}${three[i]}`;
  } return solution;
}
