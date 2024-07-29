/*
Activity 4: Binary Tree

Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* 
Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
*/

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

let tree = new BinaryTree();
tree.insert(2);
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(6);
tree.insert(9);

tree.inOrder(tree.root);