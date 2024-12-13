import fs from 'fs'

const raw = fs.readFileSync('aoc18.example', 'utf8').slice(0, -1)
// const raw = fs.readFileSync('aoc18.input', 'utf8').slice(0, -1)

const lines = raw.split('\n')

const getHash = (x, y) => `${x} ${y}`
class Instruction {
    constructor(line) {
        const [direction, lengthPart, colourPart] = line.split(' ')
        this.direction = direction
        this.length = Number(lengthPart)
        this.colour = colourPart.slice(2, -1)
    }
}

class Instruction2 {
    constructor(line) {
        const [direction, lengthPart, colourPart] = line.split(' ')
        this.length = parseInt(colourPart.slice(2, 7), 16)
        if (colourPart.slice(7, 8) === '0') this.direction = 'R'
        if (colourPart.slice(7, 8) === '1') this.direction = 'D'
        if (colourPart.slice(7, 8) === '2') this.direction = 'L'
        if (colourPart.slice(7, 8) === '3') this.direction = 'U'
    }
}

class Corner {
    constructor(x, y, sides) {
        this.x = x
        this.y = y
        this.sides = sides
        this.hash = getHash(x, y)
    }
}

class Digger {
    constructor(instructions) {
        this.x = 0
        this.y = 0
        this.instructions = instructions
        this.corners = []
        this.hashMap = {}
    }

    dig() {
        let firstSide
        while (this.instructions.length > 0) {
            const instruction = this.instructions.shift()
            let side
            if (instruction.direction === 'R') {
                this.x += instruction.length
                side = 'U'
            }
            if (instruction.direction === 'L') {
                this.x -= instruction.length
                side = 'D'
            }
            if (instruction.direction === 'D') {
                this.y += instruction.length
                side = 'R'
            }
            if (instruction.direction === 'U') {
                this.y -= instruction.length
                side = 'L'
            }

            if (typeof firstSide === 'undefined') firstSide = side

            if (this.corners.length > 0) this.corners.at(-1).sides.push(side)

            const corner = new Corner(this.x, this.y, [side])

            this.corners.push(corner)
            this.hashMap[corner.hash] = corner
        }
        this.corners.at(-1).sides.push(firstSide)
    }
}

const instructions = lines.map(line => new Instruction(line))
// const instructions = lines.map(line => new Instruction2(line))

const digger = new Digger(instructions)

console.time('digging')
digger.dig()
console.timeEnd('digging')


console.time('counting')
const minX = Math.min(...digger.corners.map(corner => corner.x))
const minY = Math.min(...digger.corners.map(corner => corner.y))
const maxX = Math.max(...digger.corners.map(corner => corner.x))
const maxY = Math.max(...digger.corners.map(corner => corner.y))


let xPositions = []
digger.corners.sort((a, b) => a.x - b.x).forEach(corner => {
    if (xPositions.length === 0 || xPositions.length > 0 && xPositions.at(-1) !== corner.x) xPositions.push(corner.x)
})

console.log(xPositions)
let yPositions = []
digger.corners.sort((a, b) => a.y - b.y).forEach(corner => {
    if (yPositions.length === 0 || yPositions.length > 0 && yPositions.at(-1) !== corner.y) yPositions.push(corner.y)
})

console.log(yPositions)

let digSites = 0

let lastLine = 0
let previousY = minY - 1
for (const y of yPositions) {
    console.log('new line with y =', y, 'and previous y =', previousY)

    let position = 'outside'
    let previousX = minX - 1

    digSites += lastLine * (y-previousY)
    console.log('added', lastLine * (y-previousY), 'dig sites, total', digSites)
    previousY = y

    lastLine = 0
    for (const x of xPositions) {
        const corner = digger.hashMap[getHash(x, y)]

        console.log(corner || `position ${x} ${y}`)

        if(typeof corner !== 'undefined') {
            if (corner.sides.includes('L')) {
                if (corner.sides.length === 2) {
                    position = position !== 'on top' ? 'on top' : 'inside'
                } else {
                    position = 'inside'
                }
            }
        }

        console.log(position)

        if (position !== 'outside') lastLine += x - previousX

        console.log('line added with', x - previousX, 'for total', lastLine)
        previousX = x

        if(typeof corner !== 'undefined') {
            if (corner.sides.includes('R')) {
                if (corner.sides.length === 2) {
                    position = position !== 'on top' ? 'on top' : 'outside'
                } else {
                    position = 'outside'
                }
            }
        }
        console.log(position)
    }
}

console.log(digSites)
console.timeEnd('counting')
