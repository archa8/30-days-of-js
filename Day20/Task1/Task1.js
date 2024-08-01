/*
Activity 1: Understanding LocalStorage

Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
*/

localStorage.setItem('name', 'Archa');
localStorage.setItem('color', 'blue');

let item = localStorage.getItem('name');
let color = localStorage.getItem('color');
console.log('This is: ', item);
console.log('My favorite color is: ', color);