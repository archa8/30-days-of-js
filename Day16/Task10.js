/* Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases. */
let depth = (node) => {
    if(node === null) {
        return 0;
    } else {
        let leftDepth = depth(node.left);
        let rightDepth = depth(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
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
root.left.left.left = new Node(6);
root.left.left.right = new Node(7);
root.left.right.left = new Node(8);

console.log(`Depth of binary tree is ${depth(root)}`);