class Graph {
  constructor() {
    this.list = {};
  }
  addNode(node) {
    if (!this.list[node]){
      this.list[node] = [];
    }
  }
  addEdge(fromNode, toNode) {
    this.list[fromNode].push(toNode);
    this.list[toNode].push(fromNode);
  }
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      let currentnode = queue.shift();
      result.push(currentnode);

      this.list[currentnode].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();

// Add vertices to the graph
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

// Add edges to the graph
graph.addEdge("A", "B");
graph.addEdge("B", "C");

// Perform BFS traversal starting from node "B"
const bfsResult = graph.bfs("B");

console.log("BFS result starting from node B:", bfsResult);
