/* Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases. */
let isPalindrome = (str) => {
    if (!str) {
        return `String should NOT be empty!`;
    }
    if (str.length === 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.slice(1, str.length - 1));
    }
}

console.log(isPalindrome("hello"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("Malayalam"));