/*
Task 4: Override the greeting method in the Student class to include the student ID. Log the overridden greeting message.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Welcome, ${this.name}. Your age is ${this.age} years.`;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getID() {
        return this.studentId;
    }
    greeting() {
        return `Hello, my name is ${this.name}. I am ${this.age} years old. My student ID is ${this.studentId}`;
    }
}

const student = new Student("Archa", 20, 2201111);
console.log(student.greeting());