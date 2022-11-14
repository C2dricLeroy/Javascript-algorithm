const prompt = require('prompt-sync')();

const input1 = prompt('Prompt value1: ');
const input2 = prompt('Prompt value2: ');

function returnMinimum(value1, value2) {
  if (value1 < value2) {
    console.log(`${value1} is the lowest value`);
  } else if (value2 < value1) {
    console.log(`${value2} is the lowest value`);
  } else console.log('error: You\'re values are equal');
}

returnMinimum(input1, input2);
