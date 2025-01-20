// Prevent us from attempting to use variables
// that are not declared
"use strict";

/*
// Create an array and loop through it, logging out each value using the basic loop syntax.
let colors = ["red", "blue", "green", "yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
*/

/*
// Create an array and loop through it, logging out each value using the "for...of" syntax.
let fruits = ["apple", "banana", "cherry", "grape"];
for (let fruit of fruits) {
  console.log(fruit);
}
*/

/*
// Create an array and loop through it, logging out each value using the Array.forEach() method.
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function (number) {
  console.log(number);
});
*/

/*
// Loop through an array using "for...of" and try assigning all the elements a new value.
let scores = [70, 80, 90];
for (let score of scores) {
  score = 100; // This won't change the original array
}
console.log(scores); // Output: [70, 80, 90]
*/

/*
// Loop through an array using the Array.forEach() method and try assigning all the elements a new value.
let prices = [5, 10, 15];
prices.forEach(function (price) {
  price = 20; // This won't change the original array
});
console.log(prices); // Output: [5, 10, 15]
*/

/*
// Research "for...in" loops (commented example)
// The for...in loop iterates over the keys (indexes) of an array instead of values.
let animals = ["cat", "dog", "bird"];
for (let index in animals) {
  console.log(index, animals[index]); // Logs index and value
}
*/
