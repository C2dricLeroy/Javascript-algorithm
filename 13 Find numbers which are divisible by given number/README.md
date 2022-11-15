# Find numbers which are divisible by given number 

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor.

## Code Solution

```js
function divisibleBy(numbers, divisor) {
  const result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % divisor === 0) {
      result.push(numbers[i]);
    }
  } return result;
}

```