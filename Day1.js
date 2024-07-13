// Task 1
var num = 10
console.log(num);

// Task 2
let string = "Hello World"
console.log(string);

// Task 3
const bool = true
console.log(bool);

// Task 4
let a = 5
let b = "archa"
let c = true
let obj = {name: "archa", age: 20, college: "nit patna"}
let arr = ["ferrari", "aston martin", "lamborghini"]
console.table([typeof a, typeof b, typeof c, typeof obj, typeof arr]);

// Task 5
let x = 8
console.log(`Initial value of x is ${x}`);
x += 10
console.log("Final value of x: " + x);

// Task 6
const y = "here"
console.log(y);
//y = "there"
//console.log(y); // ? TypeError: Assignment to constant variable.

// ----------------------------------------------------------------------------------------
/* Feature Requests */
// 1
let length = 1
let breadth = 1.5
let colour = "green"
let choice = false
let object = {hobby: "reading", instrument: "bass guitar"}
let array = ["apple", "banana", "cherry"]
let date = new Date("2024-03-08")
console.log(`Type is: ${typeof(length)} and Value is: ${length}`)
console.log(`Type is: ${typeof(breadth)} and Value is: ${breadth}`)
console.log(`Type is: ${typeof(colour)} and Value is: ${colour}`)
console.log(`Type is: ${typeof(choice)} and Value is: ${choice}`)
console.log(`Type is: ${typeof(object)} and Value is: ${JSON.stringify(object)}`)
console.log(`Type is: ${typeof(array)} and Value is: ${array}`)

// 2
let var1 = 56.8
console.log("Value of var1: ", var1)
const var2 = 60
console.log("Value of var2: ", var2)
var1 = var2
console.log("New value of var1: ", var1)
var2 = var1
console.log("New value of var2: ", var2) // ? Error: Assignment to constant variable