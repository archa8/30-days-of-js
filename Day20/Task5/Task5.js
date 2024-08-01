/*
Activity 3: Understanding SessionStorage

Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
*/

sessionStorage.setItem('name', 'Vaishali Chhipi');

let name = sessionStorage.getItem('name');
console.log(name);