/*
Activity 5: Graph

Task 9: Implement a Graph class with methods to add vertices, add edges and perform a breadth-first search (BFS).
*/

class Graph {
    constructor() {
        this.vertex = {};
    }

    addVertex(vertex) {
        if (this.vertex[vertex]) {
            return "Vertex already exists!";
        }
        this.vertex[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (!this.vertex[vertex1] || !this.vertex[vertex2]) {
            return "Vertex does not exist!";
        }
        this.vertex[vertex1].push(vertex2);
        this.vertex[vertex2].push(vertex1);
    }

    bfs(vertex) {
        if (!this.vertex[vertex]) {
            console.log("Starting vertex does not exist in the graph");
            return;
        }
        const queue = [];
        const visited = new Set();
        queue.push(vertex);
        visited.add(vertex);
        const traversalPath = [];
        while (queue.length > 0) {
            const current = queue.shift();
            traversalPath.push(current);
            for (const adjacent of this.vertex[current]) {
                if (!visited.has(adjacent)) {
                    visited.add(adjacent);
                    queue.push(adjacent);
                }
            }
        }
        return traversalPath;
    }

    shortestPath(start, target) {
        if (!this.vertex[start] || !this.vertex[target]) {
            console.log("Starting or target vertex does not exist in the graph");
            return;
        }
        const queue = [];
        const visited = new Set();
        const parentMap = {};
        queue.push(start);
        visited.add(start);
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            for (const adjacent of this.vertex[currentVertex]) {
                if (!visited.has(adjacent)) {
                    visited.add(adjacent);
                    parentMap[adjacent] = currentVertex;
                    if (adjacent === target) {
                        return this.constructPath(parentMap, start, target);
                    }
                    queue.push(adjacent);
                }
            }
        }
        console.log("No path found between the starting and target vertex");
        return;
    }

    constructPath(parentMap, start, target) {
        const shortestPath = [target];
        let currentVertex = target;
        while (currentVertex !== start) {
            currentVertex = parentMap[currentVertex];
            shortestPath.unshift(currentVertex);
        }
        return shortestPath;
    }
}

let graph = new Graph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addVertex("e");
graph.addVertex("f");
graph.addVertex("g");
graph.addVertex("h");

graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("b", "d");
graph.addEdge("c", "e");
graph.addEdge("d", "f");
graph.addEdge("e", "f");
graph.addEdge("e", "g");
graph.addEdge("f", "h");

let traverse = graph.bfs("a");
console.log("BFS traversal: ", traverse.join("->"));

let shortestPath = graph.shortestPath("a", "h");
console.log("Shortest path: ", shortestPath.join("->"));