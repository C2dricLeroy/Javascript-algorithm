# Regexp Basics - Is it a digit?

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

## Code Solution

```js
String.prototype.digit = function () {
  return /^[0-9]$/.test(this);
};

```