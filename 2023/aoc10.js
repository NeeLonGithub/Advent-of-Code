import fs from 'fs'

// const raw = fs.readFileSync('aoc10.example', 'utf8'); const startLetter = 'F'
const raw = fs.readFileSync('aoc10.txt', 'utf8'); const startLetter = '7'

const getId = (x, y) => `${x}`.padStart(4, '0')+`${y}`.padStart(4, '0')

class Pipe {
    constructor (letter, x, y) {
        this.letter = letter
        this.x = x
        this.y = y
        this.id = getId(x,y)
        this.neighbours = []
        this.isPartOfLoop = false
    }

    setNeighbours(map) {
        const north = map[getId(this.x, this.y - 1)]
        const east = map[getId(this.x + 1, this.y)]
        const south = map[getId(this.x, this.y + 1)]
        const west = map[getId(this.x - 1, this.y)]
        if (typeof north !== 'undefined' && '|LJ'.includes(this.letter)) {
            this.neighbours.push(north)
        }
        if (typeof east !== 'undefined' && '-LF'.includes(this.letter)) {
            this.neighbours.push(east)
        }
        if (typeof south !== 'undefined' && '|F7'.includes(this.letter)) {
            this.neighbours.push(south)
        }
        if (typeof west !== 'undefined' && '-7J'.includes(this.letter)) {
            this.neighbours.push(west)
        }
    }
}

const map = {}
let start

const lines = raw.split('\n').slice(0, -1)

for (let y = 0; y < lines.length; y++) {
    const line = lines[y]
    for (let x = 0; x < line.length; x++) {
        let letter = line[x]
        let pipe = new Pipe(letter, x, y)
        if (letter === 'S') {
            pipe = new Pipe(startLetter, x, y)
            start = pipe
        }
        map[getId(x,y)] = pipe
    }
}

Object.values(map).forEach(pipe => pipe.setNeighbours(map))

let steps = 1
let previousPipe = start
let currentPipe = start.neighbours[0]

start.isPartOfLoop = true
currentPipe.isPartOfLoop = true

while (currentPipe.id !== start.id) {
    const nextPipe = currentPipe.neighbours.find(pipe => pipe !== previousPipe)
    nextPipe.isPartOfLoop = true
    previousPipe = currentPipe
    currentPipe = nextPipe
    steps++
}

console.log(steps /2)

let pipes = Array(lines.length * 2 + 1).fill([])
for (let i = 0; i < pipes.length; i++) {
    pipes[i] = Array(lines[0].length * 2 + 1).fill(' ')
}

Object.values(map).filter(pipe => pipe.isPartOfLoop).forEach(pipe => {
    const pipeX = pipe.x * 2 + 1
    const pipeY = pipe.y * 2 + 1
    pipes[pipeY][pipeX] = pipe.letter

    if ('|LJ'.includes(pipe.letter)) {
        pipes[(pipe.y * 2) + 1 - 1][(pipe.x * 2) + 1] = '|'
    }
    if ('-LF'.includes(pipe.letter)) {
        pipes[(pipe.y * 2) + 1][(pipe.x * 2) + 1 + 1] = '-'
    }
    if ('|F7'.includes(pipe.letter)) {
        pipes[(pipe.y * 2) + 1 + 1][(pipe.x * 2) + 1] = '|'
    }
    if ('-7J'.includes(pipe.letter)) {
        pipes[(pipe.y * 2) + 1][(pipe.x * 2) + 1 - 1] = '-'
    }
})

const outsides = [[0,0]]

while (outsides.length > 0) {
    const outside = outsides.shift()
    if(outside[0] >= 0 && outside[1] >= 0 && outside[0] < pipes[0].length && outside[1] < pipes.length) {
        const check = pipes[outside[1]][outside[0]]
        if (check === ' ') {
            pipes[outside[1]][outside[0]] = '.'
            outsides.push(
                [outside[0] - 1, outside[1]],
                [outside[0], outside[1] - 1],
                [outside[0] + 1, outside[1]],
                [outside[0], outside[1] + 1]
            )
        }
    }
}

const newPipes = pipes.filter((_, i) => i % 2 === 1).map(pipe => pipe.filter((_, i) => i % 2 === 1))

let print = ''

for (let y = 0; y < newPipes.length; y++) {
    for (let x = 0; x < newPipes[y].length; x++) {
        print += newPipes[y][x]
    }
    print += '\n'
}

console.log(print)
const enclosed = []

newPipes.forEach(row => {
    row.forEach(pipe => {
        if (pipe === ' ') enclosed.push(pipe)
    })
})

console.log(enclosed.length)
