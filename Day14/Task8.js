/*
Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
*/

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const names = name.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

const person1 = new Person("Miles", "Davis");
console.log(person1.fullName);

person1.fullName = "John Coltrane";
console.log(person1.fullName);