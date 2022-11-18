function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const total = blueStart + redStart - bluePulled - redPulled;
  const prob = (blueStart - bluePulled) / total;
  return prob;
}
