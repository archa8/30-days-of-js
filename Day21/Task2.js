/*
Activity/Task 2: Reverse Integer
*/

reverseInt = (num) => {
    let reverse = parseInt(Math.abs(num).toString().split('').reverse().join(''));

    if (reverse > 2 ** 31) {
        return 0;
    }
    return num < 0 ? -Math.abs(reverse) : reverse;
}

let num1 = 123;
console.log(reverseInt(num1));

let num2 = -123;
console.log(reverseInt(num2));

let num3 = 120;
console.log(reverseInt(num3));