// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = []; // Create an empty array

for (let color of colors) {
  reversedColors.unshift(color); // Add each color at the beginning of the new array
}

console.log(reversedColors);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = []; // Create an empty array

for (let num of numbers) {
  if (num % 2 === 0) { // Check if the number is even
    evenNumbers.push(num); // Add even number to the new array
  }
}

console.log(evenNumbers);


// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

var names = ['Tom', 'Tim', 'Tin', 'Tik'];

let result = ''; // Start with an empty string

for (let name of names) {
  result = result + name; // Add each name to result
}

console.log(result);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';

const words = statement.split(' '); // Split sentence into words
const reversedWords = words.reverse(); // Reverse the array of words
const results = reversedWords.join(' '); // Join words back into a sentence

console.log(results);

