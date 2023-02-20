# Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

## Code Solution 

```js
function findShort(s){
    let splitted = s.split(' ');
    let result = splitted[0].length;
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].length <= result) {
            result = splitted[i].length;
        }
    } return result;
}
```