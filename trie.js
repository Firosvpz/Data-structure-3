class Node{
    constructor(){
        this.children={}
        this.endsWith=false
    }
}

class trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node = node.children[char]
        }
        this.endsWith=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return this.endsWith
    }
    startsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
}

const tree = new trie()
tree.insert('paachu')
tree.insert('insert')
console.log(tree.search('paachu'));
console.log(tree.search('in'));
console.log(tree.startsWith('p'));