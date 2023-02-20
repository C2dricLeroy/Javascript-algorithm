# Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = fals

## Code Solution 

```js
function isIsogram(str){
  let arr = [];
  let splitted = str.toLowerCase().split('');
  for (let i = 0; i < splitted.length; i++) {
    if (arr.includes(splitted[i])){
      continue;
    } else arr.push(splitted[i])
  } return str.length === arr.length ? true : false
}
```