# Vowel count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


## Code solution

```js
const prompt = require('prompt-sync')();

const word = prompt('Enter a word :');
let counter = 0;

function vowelCount(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
      counter += 1;
    }
  }
  console.log(`Ỳour word contains ${counter} vowels.`);
}

vowelCount(word);
```