import fs from 'fs'

// const raw = fs.readFileSync('2024/aoc15.example', 'utf8').slice(0, -1)
// const raw = fs.readFileSync('2024/aoc15.example2', 'utf8').slice(0, -1)
const raw = fs.readFileSync('2024/aoc15.input', 'utf8').slice(0, -1)

const [map, moves] = raw.split('\n\n')


const warehouse = new Map()
class WarehouseItem {
    constructor(row, column) {
        this.row = row
        this.column = column
    }

    getGps() {
        return this.row * 100 + this.column
    }

    getMapItem(direction) {
        switch (direction) {
            case '<': return warehouse.get(this.getGps() - 1)
            case '>': return warehouse.get(this.getGps() + 1)
            case '^': return warehouse.get(this.getGps() - 100)
            case 'v': return warehouse.get(this.getGps() + 100)
        }
    }
}

class Wall extends WarehouseItem {
    canMove(direction, depth) {
        return false
    }

    move(direction, depth) {
        console.log(`can't move Wall at row: ${this.row}, column: ${this.column}, depth: ${depth}`)
        return false
    }
}
class Moveable extends WarehouseItem {
    canMove(direction, depth) {
        const obstacle = this.getMapItem(direction)
        if (!obstacle) return true
        return !!obstacle.canMove(direction, depth+1)
    }

    move(direction, depth) {
        const obstacle = this.getMapItem(direction)
        if (obstacle && !obstacle.move(direction, depth+1)) {
            console.log(`can't move Movable at row: ${this.row}, column: ${this.column}, direction: ${direction}, depth: ${depth}`)
            return false
        }
        warehouse.delete(this.getGps())

        if (direction === '<') this.column--
        if (direction === '>') this.column++
        if (direction === '^') this.row--
        if (direction === 'v') this.row++

        warehouse.set(this.getGps(), this)

        return true
    }
}

class Box extends Moveable {}

class Fish extends Moveable {

    steps = []
    setSteps(steps) {
        this.steps = steps
    }

    step() {
        const direction = this.steps.shift()
        this.move(direction, 0)
    }
}

let fish
let boxes = []

map.split('\n').forEach((line, rowIndex) => {
    line.split('').forEach((position, columnIndex) => {
        let item;
        if (position === '.') return
        if (position === '#') item = new Wall(rowIndex, columnIndex)
        if (position === 'O') {
            item = new Box(rowIndex, columnIndex)
            boxes.push(item)
        }
        if (position === '@') {
            item = new Fish(rowIndex, columnIndex)
            fish = item
        }
        if (item) {
            warehouse.set(item.getGps(), item)
        }
    })
})

fish.setSteps(moves.split('\n').join().split(''))

console.log(warehouse);

while (fish.steps.length) {
    fish.step()
}

console.log(warehouse);

let sumOfBoxesGps = 0;

boxes.forEach((box) => sumOfBoxesGps += box.getGps())

console.log(sumOfBoxesGps);
