const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]
const buildGraph = (edges, nodeA, nodeB) => {
    const graph = buildHelper(edges);
    return graph;
}

const buildHelper = () => {
    const graph = {};
    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph;
}



const undirectedPath = (edges, src, dist) => {
    const graph = buildGraph(edges);
    return hasPath(graph, src, dist);
}

const hasPath = (graph, src, dist, visited = new Set()) => {
    if (visited.has(src)) return false;
    if (src === dist) return true;
    visited.add(src)

    for (const neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dist, visited)) return true;
    }
    return false;
}
console.log(undirectedPath(edges, 'j', 'm'))