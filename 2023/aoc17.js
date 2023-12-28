import fs from 'fs'

// const raw = fs.readFileSync('aoc17.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('aoc17.input', 'utf8').slice(0, -1)

const city = raw.split('\n')

const lengthX = city[0].length
const lengthY = city.length

class UltraCrucible  {
    constructor() {
        this.x = 0
        this.y = 0
        this.heatLoss = 0
        this.history = []
    }

    getDistanceToTarget() {
        return lengthX - 1 - this.x + lengthY - 1 - this.y
    }

    getDistanceFromStart() {
        return this.x + this.y
    }

    getClone() {
        const clone = new UltraCrucible()
        clone.x = this.x
        clone.y = this.y
        clone.heatLoss = this.heatLoss
        clone.history.push(...this.history)
        return clone
    }

    canContinueStraight() {
        if (this.history.length < 10) return true
        const last = this.history.at(-1)
        return this.history.slice(-10).some(element => element !== last)
    }

    canTurn() {
        if (this.history.length < 4) return false
        const last = this.history.at(-1)

        return this.history.at(-2) === last && this.history.at(-3) === last && this.history.at(-4) === last
    }

    getOptions() {
        if (this.history.length === 0) return ['R', 'D']

        let options = []
        if (this.canContinueStraight()) {
            options.push(this.history.at(-1))
        }
        if (this.canTurn()) {
            if (this.history.at(-1) === 'U' || this.history.at(-1) === 'D') {
                options.push('R', 'L')
            } else {
                options.push('D', 'U')
            }
        }

        if (this.x === 0) options = options.filter((direction) => direction !== 'L')
        if (this.y === 0) options = options.filter((direction) => direction !== 'U')
        if (this.x === lengthX - 1) options = options.filter((direction) => direction !== 'R')
        if (this.y === lengthY - 1) options = options.filter((direction) => direction !== 'D')

        return options
    }

    getHeatLoss() {
        return Number(city[this.y][this.x])
    }

    step(direction) {
        if (direction === 'U') this.y--
        else if (direction === 'D') this.y++
        else if (direction === 'L') this.x--
        else if (direction === 'R') this.x++

        this.history.push(direction)
        this.heatLoss += this.getHeatLoss()
    }

    getKey() {
        if (this.history.length === 0) return `${this.x} ${this.y} _ 0`

        let straightSteps = 1
        const last = this.history.at(-1)

        while (this.history.at(-1 * ++straightSteps) === last) {}

        return `${this.x} ${this.y} ${last} ${straightSteps - 1}`
    }
}

const crucibleSorter = (a, b) => {
    if (a.getDistanceToTarget() === 0 && b.getDistanceToTarget() === 0) return (a.heatLoss / a.getDistanceFromStart()) - (b.heatLoss / b.getDistanceFromStart())
    if (a.getDistanceToTarget() === 0) return (a.heatLoss / a.getDistanceFromStart()) - b.getDistanceToTarget() * (b.heatLoss / b.getDistanceFromStart())
    if (b.getDistanceToTarget() === 0) return a.getDistanceToTarget() * (a.heatLoss / a.getDistanceFromStart()) - (b.heatLoss / b.getDistanceFromStart())
    return a.getDistanceToTarget() * (a.heatLoss / a.getDistanceFromStart()) - b.getDistanceToTarget() * (b.heatLoss / b.getDistanceFromStart())
}

const map = {}

const crucibles = [new UltraCrucible()]

let crucible
let counter = 0
let best = 999999
console.time('search')

while (crucibles.length > 0) {
    crucible = crucibles.shift()
    if (crucible.heatLoss >= best) continue

    const directions = crucible.getOptions()

    for (const direction of directions) {
        const clone = crucible.getClone()
        clone.step(direction)
        const key = clone.getKey()
        if(typeof map[key] === 'undefined' || map[key].heatLoss >= clone.heatLoss) {
            if (typeof map[key] !== 'undefined') {
                const index = crucibles.findIndex(crucible => crucible === map[key])
                if (index !== -1) crucibles.splice(index, 1)
            }
            map[key] = clone
            crucibles.push(clone)
        }
        if(clone.x === lengthX -1 && clone.y === lengthY - 1) {
            best = Math.min(best, clone.heatLoss)
        }
    }

    if (++counter === 100000) {
        counter = 0
        console.timeLog('search', crucibles.length, Object.keys(map).length / ((lengthX -1) * (lengthY - 1) * 4 * 10))
    }
}

console.timeEnd('search')

Object.values(map)
    .filter((crucible) => crucible.x === lengthX -1 && crucible.y === lengthY - 1)
    .sort(crucibleSorter)
    .forEach(
        (crucible) => {
            console.log(crucible.getKey(), crucible.heatLoss)
        }
)
