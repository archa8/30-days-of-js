/*
Task 10: Write a fucntion that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
*/

clearAll = () => {
    localStorage.clear();
    sessionStorage.clear();
    console.log('Local Storage:', localStorage);
    console.log('Session Storage:', sessionStorage);
}

clearAll();