# Surface Area and Volume of a Box

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

## Code Solution 

```js
function getSize(width, height, depth) {
  let area1 = 2 * (width * height) + 2*(depth * height) + 2*(width * depth);
  let volume = width * depth * height;
  
  return [area1   , volume]
}
```