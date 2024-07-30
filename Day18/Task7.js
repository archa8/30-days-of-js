/*
Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
*/

longestSubstring = (str) => {
    let longest = 0
    for (let i = 0; i < str.length; i++) {
        let currentString = new Set()
        for (let j = i; j < str.length; j++) {
            if (currentString.has(str[j])) {
                break
            } else {
                currentString.add(str[j])
            }
        }
        longest = Math.max(longest, currentString.size)
    }
    return longest
}

let str = "abcabcbb"
console.log("Length of longest substring without repeating characters: ", longestSubstring(str))