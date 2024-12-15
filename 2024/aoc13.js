import fs from 'fs'

const raw = fs.readFileSync('2024/aoc13.example', 'utf8')
// const raw = fs.readFileSync('2024/aoc13.input', 'utf8')

const lines = raw.split('\n')

class ClawMachine {
    constructor(ax, ay, bx, by, px, py) {
        this.ax = ax
        this.ay = ay
        this.bx = bx
        this.by = by
        this.px = px
        this.py = py
    }
}

const claws = []

for (let i = 0; i < lines.length; i+=4) {

    const [match1, ax, ay] = lines[i].match(/Button A: X\+(\d+), Y\+(\d+)/)
    const [match2, bx, by] = lines[i+1].match(/Button B: X\+(\d+), Y\+(\d+)/)
    const [match3, px, py] = lines[i+2].match(/Prize: X=(\d+), Y=(\d+)/)
    claws.push(new ClawMachine(ax, ay, bx, by, px, py))
}

console.log(claws);
