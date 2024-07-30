/*
Activity 3: String Algorithms

Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
*/

countCharacters = (str) => {
    let characterCount = {}
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i)
        if (!characterCount[ch]) {
            characterCount[ch] = 1
        } else {
            characterCount[ch]++
        }
    }
    console.log("Occurence of each letter in the given string is: ", characterCount)
}

let str = "hello world"
countCharacters(str)