import fs from 'fs'

// const raw = fs.readFileSync('aoc16.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('aoc16.input', 'utf8').slice(0, -1)

const lines = raw.split('\n')

const lengthX = lines[0].length
const lengthY = lines.length

const getId = (x, y, direction) => {
    const element = lines[y][x]
    let orientation
    if (element === '|') orientation = 'vertical'
    else if (element === '-') orientation = 'horizontal'
    else if (element === '.' && (direction === 'to the right' || direction === 'to the left')) orientation = 'horizontal'
    else if (element === '.' && (direction === 'upwards' || direction === 'downwards')) orientation = 'vertical'
    else if (element === '/' || element === '\\') orientation = direction

    return `${x} ${y} ${orientation}`
}

const beams = []
const history = []

class Beam {
    constructor() {
        this.x = -1
        this.y = 0
        this.direction = 'to the right'
        this.stopped = false
    }

    getClone(direction) {
        const clone = new Beam()
        clone.x = this.x
        clone.y = this.y
        clone.direction = direction

        return clone
    }

    step() {
        if(this.direction === 'to the right') this.stepTo(this.x + 1, this.y)
        if(this.direction === 'to the left') this.stepTo(this.x - 1, this.y)
        if(this.direction === 'downwards') this.stepTo(this.x, this.y + 1)
        if(this.direction === 'upwards') this.stepTo(this.x, this.y - 1)
    }

    stepTo(x, y) {
        if (x < 0 || x >= lengthX || y < 0 || y >= lengthY) {
            this.stopped = true
            return
        }

        const id = getId(x, y, this.direction)

        if (history.includes(id)) {
            this.stopped = true
        }
        else {
            this.x = x
            this.y = y
            history.push(id)
        }
    }

    act() {
        let newDirection = this.direction
        if (
            (this.direction === 'to the right' && lines[this.y][this.x] === '/') ||
            (this.direction === 'to the left' && lines[this.y][this.x] === '\\')
        ) newDirection = 'upwards'
        if (
            (this.direction === 'to the right' && lines[this.y][this.x] === '\\') ||
            (this.direction === 'to the left' && lines[this.y][this.x] === '/')
        ) newDirection = 'downwards'
        if (
            (this.direction === 'upwards' && lines[this.y][this.x] === '\\') ||
            (this.direction === 'downwards' && lines[this.y][this.x] === '/')
        ) newDirection = 'to the left'
        if (
            (this.direction === 'upwards' && lines[this.y][this.x] === '/') ||
            (this.direction === 'downwards' && lines[this.y][this.x] === '\\')
        ) newDirection = 'to the right'

        if (lines[this.y][this.x] === '|' && (this.direction === 'to the right' || this.direction === 'to the left')) {
            beams.push(this.getClone('upwards'), this.getClone('downwards'))
            this.stopped = true
        }
        if (lines[this.y][this.x] === '-' && (this.direction === 'upwards' || this.direction === 'downwards')) {
            beams.push(this.getClone('to the left'), this.getClone('to the right'))
            this.stopped = true
        }

        this.direction = newDirection
    }
}

const getXY = (x,y) => `x${x} y${y}`

const getEnergized = (initialBeam) => {
    beams.length = 0
    history.length = 0

    beams.push(initialBeam)

    while (beams.length) {
        const beam = beams.shift()
        beam.step()
        beam.act()
        if (!beam.stopped) beams.push(beam)
    }

    const energized = []

    history.forEach((entry) => {
        const [x, y, _] = entry.split(' ')
        const xy = getXY(x, y)
        if (!energized.includes(xy)) energized.push(xy)
    })

    return energized.length
}

console.time()

let best = 0

for (let i = 0; i < lengthX; i++) {
    console.log(`horizontal ${i}`)
    let beam = new Beam()
    beam.x = i
    beam.y = -1
    beam.direction = 'downwards'

    let energized = getEnergized(beam)

    best = Math.max(best, energized)

    beam = new Beam()
    beam.x = i
    beam.y = lengthY
    beam.direction = 'upwards'

    energized = getEnergized(beam)

    best = Math.max(best, energized)
}

for (let i = 0; i < lengthY; i++) {
    console.log(`vertical ${i}`)
    let beam = new Beam()
    beam.x = -1
    beam.y = i
    beam.direction = 'to the right'

    let energized = getEnergized(beam)

    best = Math.max(best, energized)

    beam = new Beam()
    beam.x = lengthX
    beam.y = i
    beam.direction = 'to the left'

    energized = getEnergized(beam)

    best = Math.max(best, energized)
}

console.timeEnd()
console.log(best)
