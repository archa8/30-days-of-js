/* 
Activity 1: Class Definition

Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
*/

class Person {    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Happy ${this.age}th Birthday, ${this.name}`;
    }
}

const archa = new Person("Archa", 20);

console.log(archa.greeting());