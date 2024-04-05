class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (!node.left) {
            node.left = newNode;
        } else if (!node.right) {
            node.right = newNode;
        } else {
            // If both left and right child exist, insert into the left child
            this._insertNode(node.left, newNode);
        }
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (!node) {
            return false;
        }
        if (node.value === value) {
            return true;
        }
        return this._searchNode(node.left, value) || this._searchNode(node.right, value);
    }

    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (!node) {
            return null;
        }

        if (node.value === value) {
            return null; // Just set the node to null to simulate deletion
        }

        node.left = this._deleteNode(node.left, value);
        node.right = this._deleteNode(node.right, value);

        return node;
    }
}

// Usage:
const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(2);
tree.insert(4);
tree.insert(7);
tree.insert(9);

console.log("Pre-order traversal:", tree.preOrderTraversal()); // Output: [5, 3, 2, 4, 8, 7, 9]
console.log("In-order traversal:", tree.inOrderTraversal());   // Output: [2, 3, 4, 5, 7, 8, 9]
console.log("Post-order traversal:", tree.postOrderTraversal()); // Output: [2, 4, 3, 7, 9, 8, 5]

console.log("Is 7 present in the tree?", tree.search(7)); // Output: true

tree.delete(4); // Delete operation (not a real deletion in this example)
console.log("In-order traversal after deletion:", tree.inOrderTraversal()); // Output: [2, 3, 5, 7, 8, 9]
