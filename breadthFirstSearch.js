const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const breadthFirstSearch = (graph, source) => {
    const q = [source];
    while (q.length > 0) {
        const curr = q.shift();
        console.log(curr);
        for(let neighbor of graph[curr]) {
            q.push(neighbor)
        }
    }
}

breadthFirstSearch(graph, 'a')