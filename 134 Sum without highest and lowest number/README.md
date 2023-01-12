# Sum without highest and lowest number



## Code Solution


```
function sumArray(array) {
  if (array == null) {
    return 0;
  } if (array.length < 3) {
    return 0;
  }
  const sortedArray = array.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < sortedArray.length - 1; i++) {
    sum += sortedArray[i];
  } return sum;
}

```