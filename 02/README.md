# FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

## Flowchart    

![Flowchart](02%20(1).png)  

## Pseudocode   

```
For Number from 1 to 100

  If Number % 3 = 0 AND Number % 5 = 0 
    Then : FizzBuzz

  If Number % 3 = 0 
    Then : AfficheConsoleFizz

  If Number % 5 = 0
    Then : Buzz

  Else Print Number   

```

## Code solution   

```
'use strict';

for (let i = 1; i < 101; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } if (i % 3 === 0) {
    console.log('Fizz');
  } if (i % 5 === 0) {
    console.log('Buzz');
  } else console.log(i);
}
```
