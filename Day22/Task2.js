/*
Activity/Task1: Longest substring without repeating characters
*/

lengthOfLongestSubstring = (str) => {
    var startOfWindow = 0, longest = 0;
    var characterMap = new Map();
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let currCharPosInMap = characterMap.get(currChar);
        if (currCharPosInMap >= startOfWindow) {
            startOfWindow = currCharPosInMap + 1;
        }
        characterMap.set(currChar, i);
        longest = Math.max(longest, i - startOfWindow + 1);
    }
    return longest;
};