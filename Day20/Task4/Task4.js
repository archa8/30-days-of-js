/*
Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
*/

localStorage.setItem('name', 'John Doe');
localStorage.setItem('email', 'john123@gmail.com');

console.log('Initial info: ', localStorage);

localStorage.removeItem('name');

console.log('After removing: ', localStorage);