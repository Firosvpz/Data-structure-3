class Graph {
    constructor(numNodes) {
      this.matrix = [];
      for (let i = 0; i < numNodes; i++) {
        this.matrix.push(new Array(numNodes).fill(0));
      }
    }
    addEdge(fromNode, toNode) {
      this.matrix[fromNode][toNode] = 1;
      this.matrix[toNode][fromNode] = 1;
    }
    removeEdge(fromNode, toNode) {
      this.matrix[fromNode][toNode] = 0;
      this.matrix[toNode][fromNode] = 0;
    }
    isEdge(fromNode, toNode) {
      return this.matrix[fromNode][toNode] === 1;
    }
    display() {
        for (let i = 0; i < this.matrix.length; i++) {
          console.log(this.matrix[i].join(' '));
        }
      }
  }

const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.display();
console.log(graph.isEdge(1, 2));
console.log(graph.isEdge(0, 3)); 
graph.removeEdge(1, 2);
graph.display();
