import fs from 'fs'

// const raw = fs.readFileSync('aoc17.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('aoc17.input', 'utf8').slice(0, -1)

const city = raw.split('\n')

const lengthX = city[0].length
const lengthY = city.length

const map = {}

const target = {
    x: 135,
    y: 135
}
class Crusible {
    constructor() {
        this.x = lengthX -1
        this.y = lengthY -1
        this.heatLoss = 0
        this.history = []
        this.bestX = this.x
        this.bestY = this.y
    }

    clone() {
        const clone = new Crusible()
        clone.x = this.x
        clone.y = this.y
        clone.heatLoss = this.heatLoss
        clone.history.push(...this.history)
        clone.bestX = this.bestX
        clone.bestY = this.bestY
        return clone
    }

    getId() {
        return `${this.x} ${this.y} ${this.history.at(-1)}`
    }

    outMatched() {
        if (typeof map[this.getId()] !== 'undefined') return map[this.getId()] < this.heatLoss
        return false
    }

    overStepped() {
        if (this.history.length >= 4) {
            const lastFour = this.history.slice(-4)
            return lastFour.every((element) => element === lastFour[0])
        } else return false
    }

    getNewSteps(maxHeatLoss) {
        const clones = []
        'ULDR'.split('')
            .filter(direction => {
                if (this.history.length === 0) return true
                return (direction === 'U' && this.history.at(-1) !== 'D') ||
                       (direction === 'L' && this.history.at(-1) !== 'R') ||
                       (direction === 'D' && this.history.at(-1) !== 'U') ||
                       (direction === 'R' && this.history.at(-1) !== 'L')
            })
            .forEach(direction => {
                const steppedClone = this.step(direction)
                if (steppedClone !== null) clones.push(steppedClone)
        })

        return clones
            .filter(clone => !clone.overStepped())
            .filter(clone => clone.heatLoss < maxHeatLoss)
            .filter(clone => !clone.outMatched())
            .filter(clone => clone.x <= clone.bestX + 2 && clone.y <= clone.bestY + 2)
            .filter(clone => clone.x >= target.x - 2 && clone.y >= target.y - 2)
    }

    canStep(x, y) {
        return x >= 0 && x < lengthX && y >= 0 && y < lengthY
    }

    getHeatLoss() {
        return Number(city[this.y][this.x])
    }

    setBests() {
        this.bestX = Math.min(this.x, this.bestX)
        this.bestY = Math.min(this.y, this.bestY)
    }

    step(direction) {
        const clone = this.clone()
        clone.heatLoss += this.getHeatLoss()

        if (direction === 'U' && clone.canStep(clone.x, clone.y - 1)) clone.y--
        else if (direction === 'D' && clone.canStep(clone.x, clone.y + 1)) clone.y++
        else if (direction === 'L' && clone.canStep(clone.x - 1, clone.y)) clone.x--
        else if (direction === 'R' && clone.canStep(clone.x + 1, clone.y)) clone.x++
        else return null

        clone.history.push(direction)
        clone.setBests()

        return clone
    }

    hasReachedLocation(x, y) {
        return this.x === x && this.y === y
    }
}

const findBestPathFrom = (x, y) => {
    let best = Number.MAX_SAFE_INTEGER
    const cruciblesOnTarget = []
    const crucibles = [new Crusible()]

    // let repetitions = 0

    while (crucibles.length > 0) {
        // console.log(crucibles)
        const crucible = crucibles.shift()

        if (crucible.hasReachedLocation(x, y)) {
            crucible.heatLoss -= crucible.getHeatLoss()
            cruciblesOnTarget.push(crucible)
            if (crucible.heatLoss < best) best = crucible.heatLoss
            continue
        }

        const newCrucibles = crucible.getNewSteps(best)

        crucibles.push(...newCrucibles.filter(crucible => !crucible.outMatched()))
        newCrucibles.forEach(crucible => map[crucible.getId()] = crucible.heatLoss)

        crucibles.sort((a, b) => a.heatLoss - b.heatLoss)
    }

    console.log(cruciblesOnTarget.at(-1))

    return best
}

console.time()
console.log(findBestPathFrom(target.x, target.y))
console.timeEnd()
