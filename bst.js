class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() { 
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(newNode, node) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    search(value) {
        return this.searchNode(this.root, value)
    }
    searchNode(node, value) {
        if (node === null) {
            return false
        }
        if (value === node.value) {
            return true
        } else if (value < node.value) {
            return this.searchNode(node.left, value)
        } else {
            return this.searchNode(node.right, value)
        }
    }
    inorederTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inorederTraversal(node.left, result)
            result.push(node.value)
            this.inorederTraversal(node.right, result)
        }
        return result

    }
    preorderTraversal(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value)
            this.preorderTraversal(node.left, result)
            this.preorderTraversal(node.right, result)
        }
        return result
    }
    postorderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.postorderTraversal(node.left, result)
            this.postorderTraversal(node.right, result)
            result.push(node.value)
        }
        return result
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
        if (node === null) {
            return null
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value)
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value)
        } else {

            // Case 1: Node has no children
            if (node.left === null && node.right === null) {
                return null
            }

            // Case 2: Node has one child
            if (node.left === null) {
                return node.right
            }
            if (node.right === null) {
                return node.left
            }

            // Case 3: Node has two children
            const minRightNode = this.findMinNode(node.right);
            node.value = minRightNode.value;
            node.right = this.deleteNode(node.right, minRightNode.value);
        }
        return node
    }
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

const binary = new BST()
console.log('empty:', binary.isEmpty());
binary.insert(10)
binary.insert(50)
binary.insert(70)
binary.insert(20)
console.log('search:', binary.search(50));
binary.delete(50)
console.log('inorder:', binary.inorederTraversal());
console.log('preorder', binary.preorderTraversal());
console.log('postorder', binary.postorderTraversal());
