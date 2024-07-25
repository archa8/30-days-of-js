// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// Install axios by running:
// npm i -g npm
// npm i --save axios
const axios = require('axios');
console.log("Making a network request...");
axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        const user = response.data;
        console.log('User information: ');
        console.log('Name: ', user.name);
        console.log('Email: ', user.email);
        console.log('Address: ', user.address.street, user.address.suite, user.address.city, user.address.zipcode);
    }).catch(error => {
        console.log('An error occurred: ', error.message);
    });

/*const axios = require("axios");

async function fetchUser(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
    } catch (error) {
        console.error("Error fetching user:", error.message);
    }
}
async function main() {
    const userId = 1;

    console.log(`Fetching data for user ${userId}...`);

    const user = await fetchUser(userId);
    console.log("User:", user.name);
}
main().catch((error) => {
    console.log("Main function error", error.message);
}); */