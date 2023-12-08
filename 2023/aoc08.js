import fs from 'fs'

// const raw = fs.readFileSync('aoc08.example', 'utf8')
// const raw = fs.readFileSync('aoc08.example2', 'utf8')
// const raw = fs.readFileSync('aoc08.test', 'utf8')
const raw = fs.readFileSync('aoc08.txt', 'utf8')

class Node {
    constructor(line) {
        const [namePart, optionPart] = line.split(' = ')
        this.name = namePart
        this.options = optionPart.slice(1, -1).split(', ')
    }
}

const [instructionsPart, networkPart] = raw.split('\n\n')
const instructions = instructionsPart.split('')
const nodes = networkPart.split('\n').slice(0,-1).map(line => new Node(line))

const nodeMap = {}
nodes.forEach(node => nodeMap[node.name] = node)

const start = nodeMap['AAA']
const end = nodeMap['ZZZ']

let current = start
let steps = 0

while (current !== end) {
    const instruction = instructions[steps % instructions.length]
    const pick = current.options[instruction === 'L' ? 0 : 1]
    current = nodeMap[pick]
    steps++
}

console.log(steps)

const startingNodes = nodes.filter(node => node.name[2] === 'A')

const stepsPerNode = startingNodes.map(node => {
    let current = node
    let steps = 0

    while (current.name[2] !== 'Z') {
        const instruction = instructions[steps % instructions.length]
        const pick = current.options[instruction === 'L' ? 0 : 1]
        current = nodeMap[pick]
        steps++
    }

    return steps
})

// Voorbeeld: 20 (2*10) en 30 (3*10) komen elkaar uiteindelijk tegen bij 60 (6*10). Dus (20/10)*(30/10)*10
// priem ontbinding (online website) laat zien dat alles een vermenigvuldiging is van 281 en een ander priemgetal.
// Dus hier ook alle getallen eerste delen door 281, dan vermenigvuldingen en dan nog met 281 vermenigvuldigen.
console.log(stepsPerNode.reduce((result, steps) => steps/281 * result, 281))
