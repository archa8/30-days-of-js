/*
Task 2: Add a method to the `Person` class that updates the `age` property and logs the updated age.
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Happy ${this.age}th Birthday, ${this.name}`;
    }
    update(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person = new Person("Archa", 19);
console.log(person.greeting());
person.update(20);
console.log(person.greeting());