const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}


const depthFirstSearch = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        const curr = stack.pop();
        console.log(curr);
        for (const neighbor of graph[curr]) {
            stack.push(neighbor);
        }
    }
}
depthFirstSearch(graph, 'a'); // abdfce


console.log(' ====================== Recursion ================== ')
const recurrDepthFirstSearch= (graph, source) => {
    console.log(source);
    for (const neighbor of graph[source]) {
        recurrDepthFirstSearch(graph, neighbor)
    }
}

recurrDepthFirstSearch(graph, 'a'); // abdfce