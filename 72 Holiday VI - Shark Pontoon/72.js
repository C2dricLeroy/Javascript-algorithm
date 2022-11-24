function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) sharkSpeed /= 2;
  if ((sharkSpeed / sharkDistance) > (youSpeed / pontoonDistance)) {
    return 'Shark Bait!';
  } return 'Alive!';
}
