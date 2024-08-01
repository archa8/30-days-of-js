/*
Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
*/

let person = {
    name: 'Abhinay Tiwary',
    age: 21,
    phone: '9988776655'
};

sessionStorage.setItem('person', JSON.stringify(person));

let personString = sessionStorage.getItem('person');
let parsed = JSON.parse(personString);
console.log(parsed);