function contamination(text, char) {
  let string = '';
  for (let i = 0; i < text.length; i += 1) {
    string += char;
  }
  return string;
}
