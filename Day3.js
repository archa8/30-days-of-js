// Task 1
let a = -84;
if (a > 0) {
    console.log('Positive number');
} 
else if (a < 0) {
    console.log('Negative number');
}    
else {
    console.log('Zero number');
}

// Task 2
let age = 21;
if (age >= 18) console.log('Person is eligible to vote');
else console.log('Person is not eligible to vote');

// Task 3
let n1 = 31;
let n2 = 76;
let n3 = -47;
if (n1 > n2 && n1 > n3) console.log(`Greatest number is ${n1}`);
else if (n2 > n1 && n2 > n3) console.log(`Greatest number is ${n2}`);
else console.log(`Greatest number is ${n3}`);

// Task 4
let day = 3;
switch (day) {
    case 1: console.log('Monday');
            break;
    case 2: console.log('Tuesday');
            break;
    case 3: console.log('Wednesday');
            break;
    case 4: console.log('Thursday');
            break;
    case 5: console.log('Friday');
            break;
    case 6: console.log('Saturday');
            break;
    case 7: console.log('Sunday');
            break;
    default: console.log('Invalid day entered');
}

// Task 5
let marks = 85;
let grade;
switch (true) {
    case marks >= 90: grade = 'A';
            break;
    case marks >= 80: grade = 'B';
            break;
    case marks >= 70: grade = 'C';
            break;
    case marks >= 60: grade = 'D';
            break;
    case marks >= 50: grade = 'E';
            break;
    default: grade = 'F';
}
console.log(`Marks are ${marks} and grade is ${grade}`);

// Task 6
let integer = 5;
let checkEven = integer % 2 == 0 ? `${integer} is even` : `${integer} is odd`;
console.log(checkEven);

// Task 7
let year = 2020;
if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is a normal year`);
}