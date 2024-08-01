/*
Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
*/

sessionStorage.setItem('name', 'Archa');

console.log('Initial:', sessionStorage);
sessionStorage.removeItem('name');
console.log('After removal:', sessionStorage);