function toFreud(string) {
  const splitted = string.split(' ');
  const result = [];
  if (string === '') {
    return string;
  }
  for (let i = 0; i < splitted.length; i++) {
    result.push('sex');
  }

  return result.join(' ');
}
