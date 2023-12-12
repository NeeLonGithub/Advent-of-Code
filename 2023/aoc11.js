import fs from 'fs'

// const raw = fs.readFileSync('aoc11.example', 'utf8')
const raw = fs.readFileSync('aoc11.txt', 'utf8')

class Galaxy {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getManhattanDistanceTo(galaxy, emptyXs, emptyYs) {
        const lowestX = Math.min(this.x, galaxy.x)
        const highestX = Math.max(this.x, galaxy.x)
        const lowestY = Math.min(this.y, galaxy.y)
        const highestY = Math.max(this.y, galaxy.y)

        const extraX = emptyXs.filter(x => x > lowestX && x < highestX).length
        const extraY = emptyYs.filter(y => y > lowestY && y < highestY).length

        return highestX - lowestX + extraX * 999999 + highestY - lowestY + extraY * 999999
    }
}

const lines = raw.split('\n')

const galaxies = []

lines.forEach((line, y) => {
    line.split('').forEach((space, x) => {
        if (space === '#') {
            galaxies.push(new Galaxy(x, y))
        }
    })
})

const distances = []

const emptyXs = []
const emptyYs = []

for (let x = 0; x < lines[0].length; x++) {
    if (typeof galaxies.find(galaxy => galaxy.x === x) === 'undefined') {
        emptyXs.push(x)
    }
}

for (let y = 0; y < lines[0].length; y++) {
    if (typeof galaxies.find(galaxy => galaxy.y === y) === 'undefined') {
        emptyYs.push(y)
    }
}
galaxies.forEach((galaxy, index) => {
    galaxies.slice(index+1).forEach(other => {
        distances.push(galaxy.getManhattanDistanceTo(other, emptyXs, emptyYs))
    })
})

console.log(distances)
console.log(distances.reduce((sum, distance)=> sum + distance, 0))
