// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

function cube(x) {
    return x * x * x;
}

let root = (x) => {
    return Math.sqrt(x);
}

const foo = Math.PI;
const bar = Math.E;

export { cube, root, foo, bar };