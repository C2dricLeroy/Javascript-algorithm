function addLength(str) {
  const result = [];
  const splitted = str.split(' ');
  for (let i = 0; i < splitted.length; i++) {
    result.push(`${splitted[i]} ${splitted[i].length}`);
  } return result;
}
