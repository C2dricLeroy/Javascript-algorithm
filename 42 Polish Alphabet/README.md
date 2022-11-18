# Polish Alphabet 

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

```
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
```

and print out the string without the use of the Polish letters.

For example:
```
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
``` 

## Code Solution : 

```js
function correctPolishLetters(string) {
  const splitted = string.split('');
  const result = [];
  for (let i = 0; i < string.length; i += 1) {
    if (splitted[i] === 'ą') {
      result.push('a');
    } else if (splitted[i] === 'ć') {
      result.push('c');
    } else if (splitted[i] === 'ę') {
      result.push('e');
    } else if (splitted[i] === 'ł') {
      result.push('l');
    } else if (splitted[i] === 'ń') {
      result.push('n');
    } else if (splitted[i] === 'ó') {
      result.push('o');
    } else if (splitted[i] === 'ś') {
      result.push('s');
    } else if (splitted[i] === 'ź') {
      result.push('z');
    } else if (splitted[i] === 'ż') {
      result.push('z');
    } else {
      result.push(splitted[i]);
    }
  }
  return result.join('');
}

```