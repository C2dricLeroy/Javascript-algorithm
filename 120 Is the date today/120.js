function isToday(date) {
  const today = new Date();
  if (date.toDateString() === today.toDateString()) {
    return true;
  } return false;
}
