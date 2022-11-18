# Evil or Odious ? 

The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)


## Code Solution 

```js
function evil(n) {
  let sum = 0;

  for (let i = 0; i < n.toString(2).length; i += 1) {
    if (n.toString(2)[i] === '1') {
      sum += 1;
    }
  }
  console.log(sum);
  if (sum % 2 === 0) {
    return "It's Evil!";
  } return "It's Odious!";
}

```