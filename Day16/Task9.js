/* Activity 5: Tree Traversal

Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited. */

let inOrder = (node) => {
    if(node) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inOrder(root);