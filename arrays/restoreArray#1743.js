/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
const restoreArray = (adjacentPairs) => {
    const graph = new Map();

    // Build the graph
    for (const [u, v] of adjacentPairs) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);

        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    // Find the start node (a node with only one neighbor)
    let startNode;
    for (const [node, neighbors] of graph) {
        if (neighbors.length === 1) {
            startNode = node;
            break;
        }
    }

    // Traverse the graph to reconstruct the array
    const result = [];
    const visited = new Set();

    const dfs = (node) => {
        visited.add(node);
        result.push(node);

        for (const neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    dfs(startNode);
    return result
};

// console.log(restoreArray([[2, 1], [3, 4], [3, 2]]));
// console.log(restoreArray([[4, -2], [1, 4], [-3, 1]]));
// console.log(restoreArray([[4, -10], [-1, 3], [4, -3], [-3, 3]]));//[-10,4,-3,3,-1]

export default restoreArray;