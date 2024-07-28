/* Activity 3: String Manipulation with Recursion

Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
*/

let reverse = (str) => {
    if (!str) {
        return "";
    }
    return reverse(str.substring(1)) + str.charAt(0);
}

console.log(reverse("hello"));
console.log(reverse("world"));
console.log(reverse("archa"));