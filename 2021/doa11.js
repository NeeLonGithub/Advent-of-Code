let input = [
    [6, 1, 1, 1, 8, 2, 1, 7, 6, 7],
    [1, 7, 6, 3, 6, 1, 1, 6, 1, 5],
    [3, 5, 1, 2, 6, 8, 3, 1, 3, 1],
    [8, 5, 8, 2, 7, 7, 1, 4, 7, 3],
    [8, 2, 1, 4, 8, 1, 3, 8, 7, 4],
    [2, 3, 2, 5, 8, 2, 3, 2, 1, 7],
    [2, 2, 2, 2, 4, 8, 2, 8, 2, 3],
    [5, 4, 7, 1, 3, 5, 6, 7, 8, 2],
    [3, 7, 3, 8, 6, 7, 1, 2, 8, 7],
    [8, 6, 7, 5, 2, 2, 6, 5, 7, 4]
]

// //test inout
// input = [
//     [5, 4, 8, 3, 1, 4, 3, 2, 2, 3],
//     [2, 7, 4, 5, 8, 5, 4, 7, 1, 1],
//     [5, 2, 6, 4, 5, 5, 6, 1, 7, 3],
//     [6, 1, 4, 1, 3, 3, 6, 1, 4, 6],
//     [6, 3, 5, 7, 3, 8, 5, 4, 7, 8],
//     [4, 1, 6, 7, 5, 2, 4, 6, 4, 5],
//     [2, 1, 7, 6, 8, 4, 1, 7, 2, 1],
//     [6, 8, 8, 2, 8, 8, 1, 1, 3, 4],
//     [4, 8, 4, 6, 8, 4, 8, 5, 5, 4],
//     [5, 2, 8, 3, 7, 5, 1, 5, 2, 6]
// ]

let flashes = 0

class Octopus {
    constructor(energy) {
        this.energy = energy
        this.hasFlashed = false
        this.neighbours = []
    }

    addNeighbour(octopus) {
        this.neighbours.push(octopus)
    }

    increaseEnergy() {
        this.energy += 1
        if(this.energy  > 9 && !this.hasFlashed) this.flash()
    }

    flash() {
        flashes++
        this.hasFlashed = true
        this.neighbours.forEach((neighbour) => neighbour.increaseEnergy())
    }

    sweep() {
        if(this.hasFlashed) {
            this.energy = 0
            this.hasFlashed = false
        }
    }
}

let grid = new Array(10)
for (let i=0; i<grid.length; i++) {
    grid[i] = new Array(10)
    for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = new Octopus(input[i][j])
    }
}

for (let i=0; i<grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (i > 0) {
            if (typeof grid[i - 1][j - 1] !== 'undefined') grid[i][j].addNeighbour(grid[i - 1][j - 1])
            if (typeof grid[i - 1][j] !== 'undefined') grid[i][j].addNeighbour(grid[i - 1][j])
            if (typeof grid[i - 1][j + 1] !== 'undefined') grid[i][j].addNeighbour(grid[i - 1][j + 1])
        }

        if (typeof grid[i][j-1] !== 'undefined') grid[i][j].addNeighbour(grid[i][j-1])
        if (typeof grid[i][j+1] !== 'undefined') grid[i][j].addNeighbour(grid[i][j+1])

        if (i < grid.length - 1) {
            if (typeof grid[i + 1][j - 1] !== 'undefined') grid[i][j].addNeighbour(grid[i + 1][j - 1])
            if (typeof grid[i + 1][j] !== 'undefined') grid[i][j].addNeighbour(grid[i + 1][j])
            if (typeof grid[i + 1][j + 1] !== 'undefined') grid[i][j].addNeighbour(grid[i + 1][j + 1])
        }
    }
}

let step = 0
let before = 0

while (flashes < before + 100) {
    before = flashes
    step++
    grid.forEach((row) => row.forEach((octopus) => octopus.increaseEnergy()))
    grid.forEach((row) => row.forEach((octopus) => octopus.sweep()))
    if(step === 100) console.log(flashes)
}

console.log(step)
