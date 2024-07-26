/*
Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static genericGreeting() {
        return "Hello, World!";
    }
}

class Student extends Person {
    static totalStudents = 0;
    constructor(name, age, StudentID) {
        super(name, age);
        this.StudentID = StudentID;
        Student.totalStudents++;
    }
}

const student1 = new Student("John", 20, 1234);
console.log(`Total number of students: ${Student.totalStudents}`);

const student2 = new Student("Jane", 21, 1235);
console.log(`Total number of students: ${Student.totalStudents}`);

const student3 = new Student("Doe", 20, 1236);
const student4 = new Student("David", 20, 1237);
console.log(`Total number of students: ${Student.totalStudents}`);