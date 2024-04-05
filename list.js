class Graph {
    constructor() {
      this.list = {};
    }
    addNode(node) {
      this.list[node] = [];
    }
    addEdge(fromNode, toNode) {
      this.list[fromNode].push(toNode);
      this.list[toNode].push(fromNode);
    }
    removeEdge(fromNode, toNode) {
      this.list[fromNode] = this.list[fromNode].filter((node) => node !== toNode);
      this.list[toNode] = this.list[toNode].filter((node) => node !== fromNode);
    }
    isEdge(fromNode, toNode) {
      return this.list[fromNode].includes(toNode);
    }
    display() {
        for (let node in this.list) {
          console.log(node + " -> " + this.list[node].join(", "));
        }
      }
  }

  const graph = new Graph()
  graph.addNode('A')
  graph.addNode('B')
  graph.addNode('C')
  graph.addEdge("A","B")
  graph.addEdge("B","C")
  graph.addEdge("A","C")
  graph.display()