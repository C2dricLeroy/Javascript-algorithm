const Ball = function (ballType) {
  if (ballType) {
    this.ballType = 'super';
    return this.ballType;
  } this.ballType = 'regular';
  return this.ballType;
};
