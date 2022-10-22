'use strict';

for (let i = 0; i < 7; i += 1) {
  let word = '';
  if (i % 2 === 0) {
    for (let j = 0; j < 8; j += 1) {
      if (j % 2 === 0) {
        word += '#';
      } else {
        word += '_';
      }
    }
  } else {
    for (let j = 0; j < 8; j += 1) {
      if (j % 2 === 0) {
        word += '_';
      } else {
        word += '#';
      }
    }
  }

  console.log(word);
}
