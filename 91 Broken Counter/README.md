# Broken Counter

Our counter prototype is broken. Can you spot, what's wrong here?


## Code Solution

```js
function Counter(value) {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};

```