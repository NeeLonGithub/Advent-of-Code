import fs from 'fs'

// const raw = fs.readFileSync('aoc17.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('aoc17.input', 'utf8').slice(0, -1)

const city = raw.split('\n')

const lengthX = city[0].length
const lengthY = city.length

const getCrucibles = (x, y) => {
    const crucibles = []
    for (let i = x; i < lengthX; i++) {
        crucibles.push({
                x: i,
                y: y,
                heatLoss: 0,
                lastThreeSteps: []
            }
        )
    }
    for (let i = y; i < lengthY; i++) {
        crucibles.push({
                x: x,
                y: i,
                heatLoss: 0,
                lastThreeSteps: []
            }
        )
    }
}

const start = {
    x: 130,
    y: 130,
    heatLoss: 0,
    lastThreeSteps: []
}

const map = {}


const step = (crucible, direction) => {
    if (direction === 'R') stepRight(crucible)
    if (direction === 'D') stepDown(crucible)
    if (direction === 'U') stepUp(crucible)
    if (direction === 'L') stepLeft(crucible)
    crucible.heatLoss += Number(city[crucible.y][crucible.x])
    crucible.lastThreeSteps.push(direction)
    if (crucible.lastThreeSteps.length === 4) crucible.lastThreeSteps.shift()
}
const stepRight = (crucible) => {
    crucible.x += 1
}

const stepDown = (crucible) => {
    crucible.y += 1
}

const stepUp = (crucible) => {
    crucible.y -= 1
}
const stepLeft = (crucible) => {
    crucible.x -= 1
}

const stepsToTarget = (crucible) => {
    return lengthX - 1 - crucible.x + lengthY - 1 - crucible.y
}

while (start.x < lengthX - 1) {
    console.log(start)
    if (start.x === lengthX - 1) break
    if (start.x % 8 === 3) step(start, 'D')
    if (start.x % 8 === 7) step(start, 'U')
    step(start, 'R')
}

while (start.y < lengthY - 1) {
    console.log(start)
    if (start.y === lengthY - 1) break
    if (start.y % 8 === 3) step(start, 'L')
    if (start.y % 8 === 7) step(start, 'R')
    step(start, 'D')
}

while (start.x < lengthX - 1) {
    console.log(start)
    step(start, 'R')
}

while (start.y < lengthY - 1) {
    console.log(start)
    step(start, 'D')
}

console.log(start)


// 1131
