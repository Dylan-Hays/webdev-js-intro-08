"use strict";

// Get elements from the DOM
const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

// Given array of numbers
const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Function to find the smallest number in the array
function findSmallestNumber(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

// Function to find the largest number in the array
function findLargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

// Function to calculate the average of the numbers in the array
function findAverage(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

// Function to display the calculated values in the DOM
function renderResults() {
  smallestNumberElement.textContent = findSmallestNumber(myNumbers);
  largestNumberElement.textContent = findLargestNumber(myNumbers);
  averageNumberElement.textContent = findAverage(myNumbers);
}

// Add event listener to the button to trigger calculations
submissionBtn.addEventListener("click", renderResults);
