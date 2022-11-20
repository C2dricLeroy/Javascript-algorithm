const cubeChecker = function (volume, side) {
  if (side <= 0 || volume <= 0) {
    return false;
  } if (volume === side ** 3) {
    return true;
  } return false;
};
