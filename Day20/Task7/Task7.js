/*
Activity 4: Using SessionStorage

Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
*/

window.onload = function() {
    let name = sessionStorage.getItem('name');
    let email = sessionStorage.getItem('email');
    if (name && email) {
        document.getElementById('name').innerText = name;
        document.getElementById('email').innerText = email;
        document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;
    }
};

saveData = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}