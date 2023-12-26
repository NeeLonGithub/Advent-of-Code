import fs from 'fs'

const raw = fs.readFileSync('aoc18.example', 'utf8').slice(0, -1)
// const raw = fs.readFileSync('aoc18.input', 'utf8').slice(0, -1)

const lines = raw.split('\n')

const getHash = (x, y) => `${x} ${y}`
class Instruction {
    constructor(line) {
        const [direction, lengthPart, colourPart] = line.split(' ')
        this.direction = direction
        this.length = Number(lengthPart)
        this.colour = colourPart.slice(2, -1)
    }
}

class Instruction2 {
    constructor(line) {
        const [direction, lengthPart, colourPart] = line.split(' ')
        this.length = parseInt(colourPart.slice(2, 7), 16)
        if (colourPart.slice(7, 8) === '0') this.direction = 'R'
        if (colourPart.slice(7, 8) === '1') this.direction = 'D'
        if (colourPart.slice(7, 8) === '2') this.direction = 'L'
        if (colourPart.slice(7, 8) === '3') this.direction = 'U'
    }
}

class Corner {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.hash = getHash(x, y)
    }
}

class Digger {
    constructor(instructions) {
        this.x = 0
        this.y = 0
        this.instructions = instructions
        this.corners = []
        this.hashMap = {}
    }

    dig() {
        while (this.instructions.length > 0) {
            const instruction = this.instructions.shift()

            if (instruction.direction === 'R') this.x += instruction.length
            if (instruction.direction === 'L') this.x -= instruction.length
            if (instruction.direction === 'D') this.y += instruction.length
            if (instruction.direction === 'U') this.y -= instruction.length

            const corner = new Corner(this.x, this.y)

            this.corners.push(corner)
            this.hashMap[corner.hash] = corner
        }
    }
}

const instructions = lines.map(line => new Instruction(line))
// const instructions = lines.map(line => new Instruction2(line))

const digger = new Digger(instructions)

console.time('digging')
digger.dig()
console.timeEnd('digging')

console.time('counting')

const minX = Math.min(...digger.corners.map(corner => corner.x))
const minY = Math.min(...digger.corners.map(corner => corner.y))
const maxX = Math.max(...digger.corners.map(corner => corner.x))
const maxY = Math.max(...digger.corners.map(corner => corner.y))

let A = new Corner(minX, minY)
let B = new Corner(maxX, minY)
let C = new Corner(maxX, maxY)
let D = new Corner(minX, maxY)

const findCornersForTarget = (target, corners) => {
    let xCorner
    let yCorner
    corners.forEach(corner => {
        if (corner.x === target.x) {
            if (typeof xCorner === 'undefined') xCorner = corner
            else if (Math.abs(target.y - xCorner.y) > Math.abs(target.y - corner.y)) xCorner = corner
        }
        if (corner.y === target.y) {
            if (typeof yCorner === 'undefined') yCorner = corner
            else if (Math.abs(target.x - yCorner.x) > Math.abs(target.x - corner.x)) yCorner = corner
        }
    })
    return [xCorner, yCorner]
}



// Start with a rectangle that encloses all corners. Then add or subtract smaller rectangles from new created rectangles.
//
// For this:        We create this:
//
// ...#######..   //   A--1#####2-B
// ...#.....#..   //   |..#.....#.|
// ...###...#..   //   |..g#f...#.|
// .....#...#..   //   |....#...#.|
// ######...#..   //   d####e...#.|
// #........#..   //   #........#.|
// ###....###..   //   c#b....4#3.|
// ..#....#....   //   |.#....#...|
// ..###..#####   //   |.a#9..5###6
// ....#......#   //   |...#......#
// ....########   //   D---8######C
//
// Start with surface ABCD, find for each corner A, B, C and D, the nodes that are at the edges:
// - d-A-1
// - 2-B-6
// - 7-C-7 (C is 7)
// - 8-D-c
//
// Then for each of those, find the fourth node to create a rectangle.
// Subtract that rectangle surface, and repeat with a new square, but use two nodes closer to each other.
//
// For example: in 8-D-c, find X to complete rectangle 8DcX, then drop D and replace 8 and c with a node closer to eachother,
//              so 9 and b.
//              Repeat with 9-X-b to find Y to complete rectangle 9XbY, drop X and bring 9 and b to each other, but both
//              move to a, so Y == a so we're done.
//
// Problem?
// 8DcX should be removed from ABCD, but then 9XbY should be added. Which is the same as removing 9XbY from 8DcX first.
//
// Solution
// Not flipping repeatedly (see corner 2-B-6), but look if the second rectangle is inside the first.
// If so subtract from first, otherwise add to first.
// Use recursion:
// ABCD - (8DcX ? )                               -->  ABCD - (8DcX - (9XbY - 0))  =  ABCD - 8DcX + 9XbY - 0
//         8DcX - (9XbY ? )                 --> 8DcX - (9XbY - 0)
//                 9XbY - aaaa   -->      9XbY - 0
//
// ABCD - (2B6X ? )                               -->  ABCD - (2B6X - (3X5Y - 0))  =  ABCD - 2B6X + 3X5Y - 0
//         2B6X - (3X5Y ? )                 --> 2B6X - (3X5Y - 0)
//                 3X5Y - 4444   -->      3X5Y - 0
//
// Don't actually start with ABCD, but calculate the four corners separately and subtract all four from ABCD
//
// If it works on part 1, it works on part 2
//
//
// It only takes 2 points to get a rectangle: {x1, y1} and {x2, y2} result in [{x1, y1}, {x1, y2}, {x2, y1}, {x2, y2}]
// Looking at bottom left, we need to chain 8 to c, so we start with the 8:c rectangle, then the 9:b rectangle then the a:a 'rectangle'.
//
// No need to look for additional corners!
//
// Can I work the logic through the whole figure and ignore ABCD? start with 1:g then go 2:f, 3:e, 4:d etc.?
// The distance in the chain can't be one, otherwise the rectangle is a line. So 1:g should not be the starting point.
//
// If it converses into distance 4, 2, 0, maybe it should start that way too, so start with 1:1, then go 2:g, 3:f, 4:e, 5:d, 6:c, 7:b, 8:a, 9:9
// That would result in 1:1 + 2:g + 3:f - 4:e + 5:d - 6:c + 7:b - 8:a + 9:9
//
//      1.....2      //      2++++++       //      2++++++
//      .......      //      +++++++       //      +++++++
//      g.f....      //      ++22222       //      ++22222
//        .....      //        +++++       //        +++++
//   d....e....      //   ++++++++++       //   ++++++++++
//   ..........      //   ++++++++++       //   ++++++++++
//   c.b....4.3      //   ..++++++++       //   ..++++++++
//     ......        //     ++++++         //     ++++++
//     a.9..5...6    //     ..++++....     //     ..++++....
//       ........    //       .+++++++     //       .+++++++
//       8......7    //       .+++++++     //       .+++++++
//
// That works somewhat with this example, all mistakes are doing the edges for each rectangle. So there are 2 problems:
// 1. How to determine + or - ?
// 2. How to deal with edges?
//
// Surface of 2x2 = 4?
//
// 012      01.
// 345  vs  23.
// 678      ...
//
// 1:1 + 2:g + 3:f - 4:e + 5:d - 6:c + 7:b - 8:a + 9:9 should(n't?) be:
//   0 + 2x6 + 4x4 - 2x2 + 4x7
