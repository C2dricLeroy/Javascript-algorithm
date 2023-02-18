# Largest Elements

Write a program that outputs the top n elements from a list.

Example:
```js
largest(2, [7,6,5,4,3,2,1])
// => [6,7]
```


## Code Solution 

```js
function largest(n,xs){
    let largest = [];
    let sorted = xs.sort((a,b) => a - b).reverse();
    for (let i = 0; i < n; i++){
      largest.push(sorted[i])
    } return largest.reverse()
}
```