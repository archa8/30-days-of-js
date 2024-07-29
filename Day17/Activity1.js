/*
Activity 1: Linked Lists

Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
*/

class Node { // Construct a single node
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/* 
Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head) { // if list is empty, make the head
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    
    removeLast() {
        if(!this.head) {
            return;
        }
        let current = this.head;
        let previous;
        while(current.next) {
            previous = current;
            current = current.next;
        }
        if (previous) {
            previous.next = null;
            this.size--;
        } else {
            this.head = null;
            this.size--;
        }
    }

    display() {
        let current = this.head;
        const elements = [];
        while(current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}

const ll = new LinkedList();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(3);
ll.display(); // 1 -> 2 -> 3
ll.removeLast();
ll.display(); // 1 -> 2