/*
Activity 2: Stack

Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
*/

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    pop() {
        if (this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count--;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }
}

/*
Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
*/

function reverseString(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedString = "";
    for (let i = 0; i < str.length; i++) {
        reversedString += stack.pop();
    }
    return reversedString;
}

const str = "archa";
console.log(reverseString(str));