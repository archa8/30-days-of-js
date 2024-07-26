/*
Activity 2: Class Inheritance

Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Welcome, ${this.name}. Your age is ${this.age} years and your assigned ID is: ${this.studentId}`;
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
}

const student = new Student("Archa", 20, 2201111);
console.log(student.greeting());