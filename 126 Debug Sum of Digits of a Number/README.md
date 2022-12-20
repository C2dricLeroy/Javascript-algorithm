# Debug Sum of Digits of a Number

Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
```
123  => 6
223  => 7
1337 => 14
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