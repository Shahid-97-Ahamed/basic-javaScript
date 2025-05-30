// object practice

// Task-001
// Access the golden rod color value in output.
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// }
// console.log(colors["golden rod"])

// Task-002
// For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// }
// car.passengerCapacity =5;
// console.log(car)

// Task-003
// Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// }
// console.log(student.physics['marks'])

// Task-004
// Count the number of properties.

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// }
// let propertyCount = Object.keys(student).length;
// console.log(propertyCount)

// Task-005
// Loop through an object and print the key-value pairs with their types

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// }
//  for(key in myObject){
//     console.log(key,'type:',typeof myObject [key]);
//  }


//   *****Demo*******?-------

// let mySubject ={
//     name :'Chemistry',
//     boi:true,
//     class:14,
// }
// for(let keys in mySubject){
//     console.log(keys,'type:',typeof mySubject[keys])
// }

// String Task///////

// Task-001
// Count how many times a string has the letter a
// let sentence ='Bangladesh';
// let Count = (sentence.split('').filter(sobdo => sobdo.toLowerCase() === 'a').length);
// console.log(Count)

// let sentence = 'Japan';
// let Count = (sentence.split('').filter(bakko => bakko.toUpperCase()==='J').length);
// console.log(Count)

// const sentence ="The quick brown fox jumps over the lazy sleeping dog.";
// const Count =(sentence.split("").filter(bakko =>bakko.toLowerCase()==='e').length);
// console.log(Count)

// Task-002
// Count how many times a string has the letter a or A

// let name = 'BAngladesh';
// let Count =(name.split('').filter(bakko => bakko==='a' ||bakko ==='A').length);
// console.log(Count)

// Task-003
// Check whether a string contains all the vowels a, e, i, o, u

// EX-koyta vowel aca 

// let sentence = 'The quick brown fox jumps over the lazy sleeping dog.';
// let count = (sentence.split("").filter(vowel => vowel=='a'||vowel ==='e'||vowel ==='i'||vowel ==='o'||vowel ==='u').length)
// console.log(count)

// let sentence ='Check whether a string contains all the vowels a, e, i, o, u';
// let vowel =['a','e','i','o','u'];
// let containAllvowel =vowel.every(vowel => sentence.includes(vowel));
// console.log(containAllvowel)

// const sentence = 'lpm';
// const vowel =['a','e','i','o','u'];
// const containAllvowel =(vowel.every(vowel=>sentence.includes(vowel)));
// console.log(containAllvowel)

// ===>false

// Task-004
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let sentence = 'xamX';
// let change =(sentence.replace(/x/g,'E').replace(/X/g,'m'));
// console.log(change)

// const name = 'shahid AhamEd';
// const changeName =name.replace(/s/g,'S').replace(/E/g,'e');
// console.log(changeName)

// Task-005
// Capitalize Every first Letter of each word in a String

// const name = "shahid ahamed rabbi";
// const borName =name.replace(/\b\w/g,sobdo =>sobdo.toUpperCase());
// console.log(borName); // Output: "Shahid Ahamed Rabbi"

// for small latter

// let name ='Shahid Ahamed Rabbi';
// let Capitalize =name.replace(/\b\w/g,cher =>cher.toLowerCase());
// console.log(Capitalize)










