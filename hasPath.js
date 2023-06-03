const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

// Depth first search
const hasPathDepthSearch = (graph, src, dist) => {
    if (src === dist) return true;
    for (const item of graph[src]) {
        if (hasPathDepthSearch(graph, item, dist)) return true;
    }
    return false;
}

console.log('Depth first search', hasPathDepthSearch(graph, 'f', 'k'));

const hasPathBreadthSearch = (graph, src, dist) => {
    const q = [src];

    while (q.length > 0) {
        const curr = q.shift();
        if (curr === dist) return true;
        for (const neighbor of graph[curr]) {
            q.push(neighbor);
        }
    }
    return false;
}

console.log('Breadth first search = ', hasPathBreadthSearch(graph, 'f', 'k'));
console.log('Breadth first search = ', hasPathBreadthSearch(graph, 'f', 'h'));
console.log('Breadth first search = ', hasPathBreadthSearch(graph, 'f', 'j'));