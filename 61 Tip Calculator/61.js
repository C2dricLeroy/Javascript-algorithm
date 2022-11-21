function calculateTip(amount, rating) {
  let result = 0;
  rating = rating.toLowerCase();
  if (rating === 'excellent') {
    result = amount * 20 / 100;
  } else if (rating === 'great') {
    result = amount * 15 / 100;
  } else if (rating === 'good') {
    result = amount * 10 / 100;
  } else if (rating === 'poor') {
    result = amount * 5 / 100;
  } else if (rating === 'terrible') {
    result = 0;
  } else return 'Rating not recognised';
  return Math.ceil(result);
}
