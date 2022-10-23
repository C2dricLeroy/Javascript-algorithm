'use strict';

const prompt = require('prompt-sync')();

let BCounter = 0;
const word = prompt('enter a word: ');

for (let i = 0; i < word.length; i += 1) {
  if (word[i] === 'B') {
    BCounter += 1;
  }
}

console.log(BCounter);
