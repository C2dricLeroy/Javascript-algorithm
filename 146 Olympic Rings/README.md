# Olympic Rings

To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.

## Code Solution 

```js
function olympicRing(a){
  let roundCounter = 0;
  let b = a.split('');
  for (let i = 0; i < a.length; i++) {
    switch(b[i]) {
        case 'a': 
        case 'b':
        case 'd':
        case 'e':
        case 'g':
        case 'o':
        case 'p':
        case 'q':
        case 'A':
        case 'D':
        case 'O':
        case 'P':
        case 'Q':
        case 'R': 
        roundCounter ++;
        break;
        case 'B' : roundCounter += 2; break;
    }
    
  }
  
  return Math.floor(roundCounter / 2) <= 1 ? 'Not even a medal!' : Math.floor(roundCounter / 2) === 2 ? 'Bronze!' : Math.floor(roundCounter/2) === 3 ? 'Silver!' : 'Gold!'
}
```