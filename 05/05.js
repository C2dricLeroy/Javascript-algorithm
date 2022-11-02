'use strict';

const prompt = require('prompt-sync')();

let counter = 0;
let word = prompt('Enter a word: ');
let letter = prompt('Enter a letter to count: ');

for (let i = 0; i < word.length; i += 1) {
  if (word[i] === letter) {
    counter += 1;
  }
}

console.log(counter);
