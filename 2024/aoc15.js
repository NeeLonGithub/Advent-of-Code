import fs from 'fs'

// const raw = fs.readFileSync('2024/aoc15.example', 'utf8').slice(0, -1)
// const raw = fs.readFileSync('2024/aoc15.example2', 'utf8').slice(0, -1)
// const raw = fs.readFileSync('2024/aoc15.example3', 'utf8').slice(0, -1)
const raw = fs.readFileSync('2024/aoc15.input', 'utf8').slice(0, -1)

const [map, moves] = raw.split('\n\n')


const warehouse = new Map()

const printWarehouse = () => {
    const width = map.split('\n')[0].length * 2
    const height = map.split('\n').length
    const print = []

    for (let i = 0; i < height; i++) {
        const row = []
        for (let j = 0; j < width; j++) {
            row.push(' ')
        }
        print.push(row)
    }

    warehouse.forEach((value) => {
        if (value.constructor.name === 'Wall') print[value.row][value.column] = '#'
        if (value.constructor.name === 'Fish') print[value.row][value.column] = '@'
        if (value.constructor.name === 'Box') {
            print[value.row][value.column] = '['
            print[value.row][value.column+1] = ']'
        }
    })
    print.forEach(line => {
        console.log(line.join(''))
    })
}

class WarehouseItem {
    constructor(row, column, size) {
        this.row = row
        this.column = column
        this.size = size
    }

    getGps() {
        return this.row * 100 + this.column
    }

    getPositions() {
        if (this.size === 2) {
            return [
                this.row * 100 + this.column,
                this.row * 100 + this.column + 1
            ]
        } else {
            return [this.row * 100 + this.column]
        }
    }

    getMapItems(direction) {
        switch (direction) {
            case '<': return [warehouse.get(this.getPositions().at(0) - 1)]
            case '>': return [warehouse.get(this.getPositions().at(-1) + 1)]
            case '^': return this.getPositions().map((position) => warehouse.get(position - 100))
            case 'v': return this.getPositions().map((position) => warehouse.get(position + 100))
        }
    }
}

class Wall extends WarehouseItem {
    canMove(direction, depth) {
        return false
    }

    move(direction, depth) {
        console.log(`can't move Wall at row: ${this.row}, column: ${this.column}, direction: ${direction}, depth: ${depth}`)
        return false
    }
}
class Moveable extends WarehouseItem {
    canMove(direction, depth) {
        let canMove = true
        this.getMapItems(direction).forEach((item) => {
            if (item && !item.canMove(direction, depth+1)) canMove = false
        })
        return canMove
    }

    move(direction, depth) {
        let willMove = true
        let mapItems = this.getMapItems(direction)

        if (mapItems.at(0) === mapItems.at(-1)) mapItems = [ mapItems[0]]

        mapItems.forEach((item) => {
            if (item && !item.move(direction, depth+1)) {
                console.log(`can't move ${this.constructor.name} at row: ${this.row}, column: ${this.column}, direction: ${direction}, depth: ${depth}`)
                if (this.constructor.name === 'Fish') {
                    printWarehouse()
                    console.log(warehouse)
                }
                willMove = false
            }
        })

        if(willMove) {
            this.getPositions().forEach(position => warehouse.delete(position))

            if (direction === '<') this.column--
            if (direction === '>') this.column++
            if (direction === '^') this.row--
            if (direction === 'v') this.row++

            this.getPositions().forEach(position => warehouse.set(position, this))
        }

        return willMove
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
        if(this.canMove(direction, 0)) {
            this.move(direction, 0)
        }
    }
}

let fish
let boxes = []

map.split('\n').forEach((line, rowIndex) => {
    line.split('').forEach((position, columnIndex) => {
        let items;
        if (position === '.') return
        if (position === '#') {
            items = [
                new Wall(rowIndex, columnIndex * 2, 1),
                new Wall(rowIndex, columnIndex * 2 + 1, 1)
            ]
        }
        if (position === 'O') {
            items = [new Box(rowIndex, columnIndex * 2, 2)]
            boxes.push(items[0])
        }
        if (position === '@') {
            items = [new Fish(rowIndex, columnIndex * 2, 1)]
            fish = items[0]
        }
        items.forEach((item) => {
            if (item) {
                item.getPositions().forEach((position) => {
                    warehouse.set(position, item)
                })
            }
        })
    })
})

fish.setSteps(moves.split('\n').join('').split(''))

while (fish.steps.length) {
    fish.step()
}
printWarehouse()

let sumOfBoxesGps = 0;

boxes.forEach((box) => sumOfBoxesGps += box.getGps())

console.log(sumOfBoxesGps);
