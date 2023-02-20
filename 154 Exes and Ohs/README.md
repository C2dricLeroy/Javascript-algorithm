# Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
XO("zzoo") => false

## Code Solution 

```js
function XO(str) {
  let splitted = str.toUpperCase().split('');
  let oCounter = 0;
  let xCounter = 0;
  for (let i = 0; i < splitted.length; i++){
    if (splitted[i] === 'O') {
      oCounter ++;
    } else if (splitted[i] === 'X') {
      xCounter ++
    }
    }if (oCounter === xCounter) {
      return true
    } else return false
  console.log(oCounter)
  console.log(xCounter)
  }
```