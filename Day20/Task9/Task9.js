/*
Activity 5: Comparing LocalStorage and SessionStorage

Task 9: Write a function that accpets a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
*/

comparison = (key, value) => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    let local = localStorage.getItem(key);
    let session = sessionStorage.getItem(key);

    console.log(`Local: ${local}, Session: ${session}`);
}

comparison('name', 'Archa');