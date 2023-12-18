import fs from 'fs'

// const raw = fs.readFileSync('aoc18.example', 'utf8').slice(0, -1); let previousSide = 'U'
const raw = fs.readFileSync('aoc18.input', 'utf8').slice(0, -1); let previousSide = 'D'

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

class DigSite {
    constructor(x, y, sides, colour) {
        this.x = x
        this.y = y
        this.sides = sides
        this.colour = colour
        this.hash = getHash(x, y)
    }
}

class Digger {
    constructor(instructions) {
        this.x = 0
        this.y = 0
        this.instructions = instructions
        this.trenches = []
        this.hashMap = {}
    }

    dig() {
        let firstSide
        while (this.instructions.length > 0) {
            const instruction = this.instructions.shift()

            for (let i = 0; i < instruction.length; i++) {
                const sides = []
                let side
                if (instruction.direction === 'R') {
                    this.x++
                    side = 'U'
                }
                if (instruction.direction === 'L') {
                    this.x--
                    side = 'D'
                }
                if (instruction.direction === 'D') {
                    this.y++
                    side = 'R'
                }
                if (instruction.direction === 'U') {
                    this.y--
                    side = 'L'
                }

                if (typeof firstSide === 'undefined') firstSide = side

                if (i === 0 && this.trenches.length > 0) this.trenches.at(-1).sides.push(side)

                const trench = new DigSite(this.x, this.y, [side], instruction.colour)

                this.trenches.push(trench)
                this.hashMap[trench.hash] = trench
            }
        }
        this.trenches.at(-1).sides.push(firstSide)
    }
}

const instructions = lines.map(line => new Instruction(line))
const digger = new Digger(instructions)

digger.dig()

const minX = Math.min(...digger.trenches.map(trench => trench.x))
const minY = Math.min(...digger.trenches.map(trench => trench.y))
const maxX = Math.max(...digger.trenches.map(trench => trench.x))
const maxY = Math.max(...digger.trenches.map(trench => trench.y))

// console.log( minX, minY, maxX, maxY )
//               -71  -261   303   136

let digSites = []

for (let y = minY; y <= maxY; y++) {
    let position = 'outside'
    for (let x = minX; x <= maxX; x++) {

        const trench = digger.hashMap[getHash(x, y)]

        if(typeof trench !== 'undefined') {
            if (trench.sides.includes('L')) {
                if (trench.sides.length === 2) {
                    position = position !== 'on top' ? 'on top' : 'inside'
                } else {
                    position = 'inside'
                }
            }
        }

        if (position !== 'outside') digSites.push({x, y})

        if(typeof trench !== 'undefined') {
            if (trench.sides.includes('R')) {
                if (trench.sides.length === 2) {
                    position = position !== 'on top' ? 'on top' : 'outside'
                } else {
                    position = 'outside'
                }
            }
        }
    }
}

console.log(digSites.length)


if (true) {
    const print = []
    for (let i = minY; i <= maxY; i++) {
        const newLine = []
        for (let ii = minX; ii <= maxX; ii++) {
            newLine.push(' ')
        }
        print.push(newLine)
    }
    digger.trenches.forEach(trench => {
        let element = ' '
        if (trench.sides.length === 1 && (trench.sides[0] === 'L' || trench.sides[0] === 'R')) element = '|'
        if (trench.sides.length === 1 && (trench.sides[0] === 'U' || trench.sides[0] === 'D')) element = '-'
        if (trench.sides.includes('L') && trench.sides.includes('D')) element = 'L'
        if (trench.sides.includes('L') && trench.sides.includes('U')) element = 'F'
        if (trench.sides.includes('R') && trench.sides.includes('D')) element = 'J'
        if (trench.sides.includes('R') && trench.sides.includes('U')) element = '7'
        print[trench.y - minY][trench.x - minX] = element
    })
    // print[0 - minY][0 - minX] = 'O'

    console.log(print.reduce((print, line) => `${print}\n${line.join('')}`, ''))
}

