class Graph {
    constructor() {
        this.list = {
          A: ['B', 'C'],
          B: ['A', 'D'],
          C: ['A', 'E'],
          D: ['B'],
          E: ['C']
        };
      }
    dfs(startNode, visited = new Set()) {
      visited.add(startNode);
      this.list[startNode].forEach((node) => {
        if (!visited.has(node)) {
          this.dfs(node, visited);
        }
      });
    }
  }
  const graph = new Graph()
  graph.dfs('D')