# Grasshopper - Combine strings 

Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:
```
combineNames('James', 'Stevens')
```
returns:
```
'James Stevens'
```

## Code Solution 

```js
function combineNames(a, b) {
  return `${a} ${b}`;
}

```