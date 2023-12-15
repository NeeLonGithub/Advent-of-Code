import fs from 'fs'

// const raw = fs.readFileSync('aoc14.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('aoc14.input', 'utf8').slice(0, -1)

const lines = raw.split('\n')

const getId = (x, y) => `${x}x`.padStart(4, '0')+`${y}y`.padStart(4, '0')

class Rock {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Stone {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getId() {
        return getId(this.x, this.y)
    }
}

const getFingerprint = (stones) => {
    return stones.sort((s1, s2) => {
        const deltaX = s1.x - s2.x
        return deltaX !== 0 ? deltaX : s1.y - s2.y
    }).reduce((fingerprint, stone) => `${stone.getId()}${fingerprint}`, '')
}

const rocks = []
const stones = []

const maxX = lines[0].length
const maxY = lines.length


for (let x = 0; x < maxX; x++) {
    for (let y = 0; y < maxY; y++) {
        if (lines[y][x] === '#') rocks.push(new Rock(x,y))
        if (lines[y][x] === 'O') stones.push(new Stone(x,y))
    }
}

const map = {}
let currentState = getFingerprint(stones)
let turns = 0

const printField = () => {
    let print = []

    for (let y = 0; y < maxY; y++) {
        print.push([])
        for (let x = 0; x < maxX; x++) {
            print[y].push('.')
        }
    }

    stones.forEach(stone => print[stone.y][stone.x] = 'O')
    rocks.forEach(rock => print[rock.y][rock.x] = '#')

    const newPrint = print.map(line => line.join('')).join('\n')
    console.log(newPrint)
    console.log(' ')
}

const cycleStones = () => {
    // Move North
    for (let x = 0; x < maxX; x++) {
        const columnRocks = rocks.filter(rock => rock.x === x).sort((r1, r2) => r1.y - r2.y)
        const columnStones = stones.filter(stone => stone.x === x).sort((s1, s2) => s1.y - s2.y)

        columnStones.forEach(stone => {
            let free = true
            let y = stone.y
            while (free && y >= 0) {
                y--
                const rock = columnRocks.find(rock => rock.y === y)
                if (rock) free = false
                const stone = columnStones.find(stone => stone.y === y)
                if (stone) free = false
            }
            stone.y = y + 1
        })
    }

    // Move West
    for (let y = 0; y < maxY; y++) {
        const columnRocks = rocks.filter(rock => rock.y === y).sort((r1, r2) => r1.x - r2.x)
        const columnStones = stones.filter(stone => stone.y === y).sort((s1, s2) => s1.x - s2.x)

        columnStones.forEach(stone => {
            let free = true
            let x = stone.x
            while (free && x >= 0) {
                x--
                const rock = columnRocks.find(rock => rock.x === x)
                if (rock) free = false
                const stone = columnStones.find(stone => stone.x === x)
                if (stone) free = false
            }
            stone.x = x + 1
        })
    }

    // Move South
    for (let x = 0; x < maxX; x++) {
        const columnRocks = rocks.filter(rock => rock.x === x).sort((r1, r2) => r2.y - r1.y)
        const columnStones = stones.filter(stone => stone.x === x).sort((s1, s2) => s2.y - s1.y)

        columnStones.forEach(stone => {
            let free = true
            let y = stone.y
            while (free && y < maxY) {
                y++
                const rock = columnRocks.find(rock => rock.y === y)
                if (rock) free = false
                const stone = columnStones.find(stone => stone.y === y)
                if (stone) free = false
            }
            stone.y = y - 1
        })
    }

    // Move East
    for (let y = 0; y < maxY; y++) {
        const columnRocks = rocks.filter(rock => rock.y === y).sort((r1, r2) => r2.x - r1.x)
        const columnStones = stones.filter(stone => stone.y === y).sort((s1, s2) => s2.x - s1.x)

        columnStones.forEach(stone => {
            let free = true
            let x = stone.x
            while (free && x < maxX) {
                x++
                const rock = columnRocks.find(rock => rock.x === x)
                if (rock) free = false
                const stone = columnStones.find(stone => stone.x === x)
                if (stone) free = false
            }
            stone.x = x - 1
        })
    }
}

while(typeof map[currentState] === 'undefined') {
    map[currentState] = turns++
    cycleStones()
    currentState = getFingerprint(stones)
}

const firstOccurance = map[currentState]
const rotationsDone = turns
const loopSize = rotationsDone - firstOccurance

const restRotations = (1000000000 - rotationsDone) % loopSize

for (let i = 0; i < restRotations; i++) {
    cycleStones()
}

console.log(stones.map((stone) => maxY - stone.y).reduce((sum, load) => sum + load, 0))
