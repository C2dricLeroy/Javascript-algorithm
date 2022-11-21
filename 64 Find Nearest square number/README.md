# Find Nearest square number

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)


## Code Solution

```js
 function nearestSq(n) {
  const square = Math.round(Math.sqrt(n));
  return square ** 2;
}

```