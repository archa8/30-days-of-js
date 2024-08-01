/*
Activity 2: Using LocalStorage

Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
*/

window.onload = function() {
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    if (name && email) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('display').innerHTML = `Name: ${name}, Email: ${email}`;
    }
};

saveData = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    document.getElementById('display').innerHTML = `Name: ${name}, Email: ${email}`;
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}