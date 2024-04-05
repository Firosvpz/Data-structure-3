class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarySearchTree{
    constructor(){
        this.root=null
    }
    insertion(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(newNode.value<node.value){
            if(node.left===null){
                node.left=newNode
            }else{
                this.insertNode(left.node,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    inOrderTraversal(node=this.root,result=[]){
        if(node !== null){
            this.inOrderTraversal(node.left,result)
            result.push(node.value)
            this.inOrderTraversal(node.right,result)
        }
        return result
    }
}

const bst = new binarySearchTree()
bst.insertion(10)
bst.insertion(20)
bst.insertion(30)
console.log(bst.inOrderTraversal());