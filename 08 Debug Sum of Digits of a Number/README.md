# Debug Sum of Digits of a Number

Debug function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

```js
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}
```

## Code Solution

```js
function getSumOfDigits(integer) {
  let sum = 0;
  const digits = integer.toString();
  for (let i = 0; i < digits.length; i += 1) {
    sum += Number(digits[i]);
  }
  return sum;
}

```
