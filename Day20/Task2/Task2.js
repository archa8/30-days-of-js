/*
Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
*/

let bank = {
    account: '1234567890',
    branch: 'Patna',
    balance: 10000
};

localStorage.setItem('bank', JSON.stringify(bank));

let bankDetails = localStorage.getItem('bank');
let bankObj = JSON.parse(bankDetails);
console.log(bankObj);