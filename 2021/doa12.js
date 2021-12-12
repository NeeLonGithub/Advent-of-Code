let input = [
    ['rf', 'RL'],
    ['rf', 'wz'],
    ['wz', 'RL'],
    ['AV', 'mh'],
    ['end', 'wz'],
    ['end', 'dm'],
    ['wz', 'gy'],
    ['wz', 'dm'],
    ['cg', 'AV'],
    ['rf', 'AV'],
    ['rf', 'gy'],
    ['end', 'mh'],
    ['cg', 'gy'],
    ['cg', 'RL'],
    ['gy', 'RL'],
    ['VI', 'gy'],
    ['AV', 'gy'],
    ['dm', 'rf'],
    ['start', 'cg'],
    ['start', 'RL'],
    ['rf', 'mh'],
    ['AV', 'start'],
    ['qk', 'mh'],
    ['wz', 'mh']
]

// input = [
//     ['start', 'A'],
//     ['start', 'b'],
//     ['A', 'c'],
//     ['A', 'b'],
//     ['b', 'd'],
//     ['A', 'end'],
//     ['b', 'end']
// ]

class Node {
    constructor(name) {
        this.name = name
        this.edges = []
        this.isBigCave = /[A-Z]/.test(name[0])
        this.hasFreebee = false
    }

    addEdge(node) {
        this.edges.push(node)
    }

    hasEdge(node) {
        return this.edges.includes((edge) => edge.name === node.name)
    }

    isStart() {
        return this.name === 'start'
    }

    isEnd() {
        return this.name === 'end'
    }

    setFreebee(freebee) {
        this.hasFreebee = freebee
    }

    canUseFreebee(path) {
        return this.hasFreebee && path.filter((cave) => cave === this.name).length === 1;
    }

    getPathsToStart(givenPath) {
        let path = [...givenPath]
        path.push(this.name)

        if (this.isStart()) return [path]

        let paths = []

        this.edges.forEach((edgeNode) => {
            if (edgeNode.isEnd()) return

            if (edgeNode.isBigCave || !path.includes(edgeNode.name) || edgeNode.canUseFreebee(path)) {
                paths.push(...edgeNode.getPathsToStart(path))
            }
        })

        return paths
    }
}

let nodes = []

input.forEach(([first, second]) => {
    if(!nodes.includes((node) => node.name === first)) nodes.push(new Node(first))
    if(!nodes.includes((node) => node.name === second)) nodes.push(new Node(second))
})

input.forEach(([first, second]) => {
    let node1 = nodes.find(((node) => node.name === first))
    let node2 = nodes.find(((node) => node.name === second))

    if (!node1.hasEdge(node2)) node1.addEdge(node2)
    if (!node2.hasEdge(node1)) node2.addEdge(node1)
})

let endNode = nodes.find((node) => node.isEnd())

console.log(endNode.getPathsToStart([]).length)

let paths = []

nodes[0].setFreebee(true)
paths.push(...endNode.getPathsToStart([]))

for (let i = 1; i < nodes.length; i++) {
    nodes[i-1].setFreebee(false)
    if (!nodes[i].isBigCave) {
        nodes[i].setFreebee(true)
        paths.push(...endNode.getPathsToStart([]))
    }
}

let uniques = new Set(paths.map((path) => path.reduce((p, c) => p+c), ''))

console.log(uniques.size)
