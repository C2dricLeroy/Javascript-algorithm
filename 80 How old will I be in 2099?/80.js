function calculateAge(a, b) {
  const age = b - a;
  if (age === 0) {
    return 'You were born this very year!';
  } if (age === 1) {
    return `You are ${age} year old.`;
  } if (age === -1) {
    return `You will be born in ${Math.abs(age)} year.`;
  } if (age > 0) {
    return `You are ${age} years old.`;
  }
  return `You will be born in ${(age * -1)} years.`;
}
