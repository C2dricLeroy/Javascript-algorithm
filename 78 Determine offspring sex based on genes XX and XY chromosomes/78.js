function chromosomeCheck(sperm) {
  if (sperm.split('').includes('Y')) {
    return "Congratulations! You're going to have a son.";
  } return "Congratulations! You're going to have a daughter.";
}
