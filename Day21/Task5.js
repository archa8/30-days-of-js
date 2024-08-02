/*
Activity/Task 5: Valid Parentheses
*/

validParentheses = (inputString) => {
    while (
        inputString.indexOf('()') !== -1 ||
        inputString.indexOf('{}') !== -1 ||
        inputString.indexOf('[]') !== -1
    ) {
        inputString = inputString
            .replace('()', '')
            .replace('{}', '')
            .replace('[]', '');
    }
    return !inputString.length;
};