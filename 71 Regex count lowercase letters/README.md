# Regex count lowercase letters

Your task is simply to count the total number of lowercase letters in a string.

Examples
```
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
```

## Code Solution 

```js
function lowercaseCount(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/)) {
      sum += 1;
    }
  } return sum;
}

```