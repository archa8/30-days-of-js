// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise(function (resolve) {
    setTimeout(function() {
        console.log("Task 1 completed")
        resolve()
    }, 2000)
})
promise1.then(function() {
    console.log("Promise 1 consumed")
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
new Promise ((_, reject) => {
    setTimeout(() => {
        reject("ERROR: Task 2 Failed!!!")
    }, 2000)
}).catch((error) => {
    console.log(error)
})

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetch1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 3 in progress...Data fetched from server 1")
    }, 1000)
})
const fetch2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 3 in progress...Data fetched from server 2")
    }, 2000)
})
const fetch3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 3 in progress...Data fetched from server 3")
    }, 3000)
})
fetch1.then((data) => {
    console.log(data)
    return fetch2
}).then((data) => {
    console.log(data)
    return fetch3
}).then((data) => {
    console.log(data)
}).finally(() => {
    console.log("Task 3 completed")
})

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 4 successfully executed")
    }, 1000)
})

async function consumePromise4() {
    const response = await promise4
    console.log(response)
}

consumePromise4()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve ({username: "test", password: "12345"})
        } else {
            reject('ERROR: Task 5 went wrong!')
        }
    }, 1000)
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise5() 

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log("Data fetched using promises from API: ", data)
})
    .catch(error => {
        console.log("ERROR in Task 6: ", error)
})

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchUserData(){
    const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers`)
    const data = await response.json()
    const userEmail = data.data
    console.log(userEmail)
}

fetchUserData()

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all() to wait for multiple promises to resolve and then log all their values.
const pr1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 8 in progress...First promise resolved")
    }, 1000)
})
const pr2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 8 in progress...Second promise resolved")
    }, 2000)
})
const pr3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 8 in progress...Third promise resolved")
    }, 3000)
})

Promise.all([pr1, pr2, pr3]).then((values) => {
    console.log("Task 8 completed")
    console.log(values)
})

// Task 9: Use Promise.race() to log the value of the first promise that resolves among multiple promises.
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 9 in progress...First promise resolved")
    }, 1000)
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 9 in progress...Second promise resolved")
    }, 2000)
})
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 9 in progress...Third promise resolved")
    }, 3000)
})

Promise.race([p1, p2, p3]).then((value) => {
    console.log("Task 9 completed")
})