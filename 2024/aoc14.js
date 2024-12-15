import fs from 'fs'

// const raw = fs.readFileSync('2024/aoc14.example', 'utf8').slice(0, -1); const WIDTH = 11; const HEIGHT = 7;
const raw = fs.readFileSync('2024/aoc14.input', 'utf8').slice(0, -1); const WIDTH = 101; const HEIGHT = 103;


const lines = raw.split('\n')

class Robot {
    constructor(x, y, dx, dy) {
        this.x = Number(x)
        this.y = Number(y)
        this.dx = Number(dx)
        this.dy = Number(dy)
        this.initialX = this.x
        this.initialY = this.y
        this.initialDx = this.dx
        this.initialDy = this.dy
    }

    getQuadrant() {
        if (this.x === (WIDTH-1) / 2 || this.y === (HEIGHT-1) / 2) return 0;
        if (this.x < (WIDTH-1) / 2 && this.y < (HEIGHT-1) / 2) return 1;
        if (this.x > (WIDTH-1) / 2 && this.y < (HEIGHT-1) / 2) return 2;
        if (this.x < (WIDTH-1) / 2 && this.y > (HEIGHT-1) / 2) return 3;
        if (this.x > (WIDTH-1) / 2 && this.y > (HEIGHT-1) / 2) return 4;
        return -1;
    }

    walk(steps = 1) {
        for (let i = 0; i < steps; i++) {
            this.x += this.dx
            this.x %= WIDTH
            if (this.x < 0) this.x += WIDTH
            this.y += this.dy
            this.y %= HEIGHT
            if (this.y < 0) this.y += HEIGHT
        }
    }

    print() {
        console.log(`p: ${this.x},${this.y} v: ${this.dx},${this.dy}`)
    }

    reset() {
        this.x = this.initialX
        this.y = this.initialY
        this.dx = this.initialDx
        this.dy = this.initialDy
    }
}
const robots = []
lines.forEach(line => {
    const [match, x, y, dx, dy] = line.match(/p=(\d+),(\d+) v=(-?\d+),(-?\d+)/)
    robots.push(new Robot(x, y, dx, dy))
})

robots.forEach(robot => {
    robot.walk(100)
})

const quadrants = new Map()
quadrants.set(1, 0)
quadrants.set(2, 0)
quadrants.set(3, 0)
quadrants.set(4, 0)

robots.forEach(robot => {
    const quadrant = robot.getQuadrant()
    if (quadrant === 0) return
    const count = quadrants.get(quadrant)
    quadrants.set(quadrant, count+1)
})

let safetyFactor = 1
console.log(quadrants);
quadrants.forEach((count) => {
    safetyFactor *= count
})
console.log(safetyFactor);

robots.forEach(robot => {
    robot.reset()
})

const emptyMap = []
for (let i = 0; i < HEIGHT; i++) {
    emptyMap.push(' '.repeat(WIDTH).split(''))
}


for (let step = 97; step < WIDTH*HEIGHT; step+=101) {
    let map = emptyMap.map(line => [...line])

    const filePath = `2024/aoc14-maps/step${step.toString().padStart(3, '0')}`

    robots.forEach(robot => {
        robot.reset()
        robot.walk(step)
        map[robot.y][robot.x] = '#'
    })

    fs.writeFile(
        filePath,
        map.reduce((all, line) => all + '\n' + line.join(''), ''),
        (e) => {
            if (e) {
                console.error(e)
            }
        })
}
// 7672
