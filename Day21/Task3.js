/*
Activity/Task 3: Palindrome Number
*/

isPalindrome = (x) => {
    if (x < 0) return false;

    let original = x, reversed = 0;
    while (x !== 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};

let num1 = 121;
console.log(isPalindrome(num1));

let num2 = -121;
console.log(isPalindrome(num2));

let num3 = 10;
console.log(isPalindrome(num3));