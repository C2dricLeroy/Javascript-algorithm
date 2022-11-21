# Tip Calculator

Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.


## Code Solution

```js
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

```