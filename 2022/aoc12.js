// const input = ['Sabqponm', 'abcryxxl', 'accszExk', 'acctuvwj', 'abdefghi']
const input = ['abccccccaaccaaccccaaaaacccccaaaaccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaccccccccccccaacccccccccccccccccccccccccccccccccccccccccaaaa', 'abaaaaccaaaaaccccaaaaaccccccaaaaccccccccccccccccccccaaacccccccccccaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaccccccaaacaaccccccccccccccccccccccccccccccccccccccccaaaaa', 'abaaacccaaaaaaaacaaaaaacccccaaaaccccccccccccccccccccaaaaacccccccccaaaaaaaaaaaaaaaaacccccccccaaccccaaaaaacccccccaaaaaccccaaccccccccccccccacccccccccccccccccccaaaaa', 'abaaacccccaaaaaccccaaaaccccccaaacccccccccccccccccccaaaaaccccccccccaaaaaacacaaaaaacccccccccccaaccccaaaaacccccccccaaaaaaccaaaaaaccccccccccaaaccccacccccccccccaaaaaa', 'abaacccccaaaaaccccaacccccccccccccccaaaaacccccccccccaaaaacccccccccaaaaaaaaccaaaaaaacccccccaaaaaaaaccaaaaacccccccaaaaaaaccaaaaacccccccccccaaacccaaaccccccccccccccaa', 'abaaacccaaacaacccccccccccccccccccccaaaaaccccccccccccaaaaacccccccaaaaaaaaaccaaccaaacccccccaaaaaaaaccaacccccccccaaaaaaccaaaaaaccccccccccccaaaacaaaaccccccccccccccaa', 'abaaacccccccaaccccccccccccccccccccaaaaaaccccccccccccaaccccccaacccaaaccaaaaccccccaacccccccccaaaacccccccccccccccaacaaaccaaaaaaaccccccccccccajjjjjjjcccccccccccccccc', 'abcaacccccccccccccccccccccccccccccaaaaaaccccccccccccccccccccaaaaccccccaaaaccccccccccccccaacaaaaaccccccccccccccccccaaccccaaaaaacccccccccccjjjjjjjjjcccccaaaccccccc', 'abccccccccccccccccccccccccccccccccaaaaaaccaaccccccccccccccaaaaaacccccccaaacccccccccccaacaaaaaaaaccccccccccccccccccccccccaaccaaccccccccaiijjjjojjjjcccccaaacaccccc', 'abcccccccccccccccccccccccaaacccccccaaacacaaacccccccccccccccaaaaccccaaccccccccccccccccaaaaaaacccaccccccccccccccccccccccccaacccccccccccaiiijjooooojjkccaaaaaaaacccc', 'abccccccccccccccccccccccaaaaccccccccccaaaaaccccccccccccccccaaaaacccaaaaaccccccccccccccaaaaaacccccccccccccccccccccccccccccccccccccciiiiiiiioooooookkkcaaaaaaaacccc', 'abccccccccccccccccccccccaaaaccccccccccaaaaaaaacccccccccccccaacaaccaaaaacccccccaaacccaaaaaaaaccccccccccccccccccccccccccccccccccchiiiiiiiiooooouoookkkccaaaaaaccccc', 'abcccccccccaaccccccccccccaaaccccccccccccaaaaacccccccccccccccccccccaaaaaccccccaaaacccaaaaacaacccccccccccccaacaacccccccccccccccchhhiiiinnnooouuuuoookkkccaaaaaccccc', 'abcccccccccaaacccccccccccccccccccccccccaaaaacccccccccccccccccccccccaaaaacccccaaaaccccccaaccccccccccccccccaaaaacccccccccccccccchhhnnnnnnnnouuuuuuppkkkkaaaaaaccccc', 'abccccccaaaaaaaacccaaccccccccccccccccccaacaaccaacaaccccccccccccccccaacccccccccaaaccccccaacccccccccccccccaaaaacccccccccccccccchhhnnnnnnnnntuuxuuupppkkkkkacccccccc', 'abccccccaaaaaaaacacaaaacccccccccccccccccccaaccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaacccccccaacccccchhhnnnnttttttuxxxuuppppkkkkkcccccccc', 'abcccccccaaaaaaccaaaaaaccccccccccaaccccccccccaaaaaccccccccccccccccccccccccaaacccccccccccccccccccccccccccccaaaaccaaccaaacccaaahhhnnntttttttuxxxxuupppppllllccccccc', 'abcccccccaaaaaacccaaaacccccccccaaaaaaccccccccaaaaaacccccccccccccccccccccccaaacccccccccccccccccccccccccccccacccccaaaaaaacaaaaahhhppntttxxxxxxxxuuuuvpppplllccccccc', 'abcccccccaaaaaacccaaaacccccccccaaaaaacccccaaaaaaaaaccccccccccccccccccccaaaaaaaacccccccccccccccccccccaaaccccccaacaaaaaaccaaaaahhhpppttxxxxxxxxyuuvvvvvppplllcccccc', 'abcccccccaaccaacccaacaccaaaaccccaaaaacccccaaaaaaaaaccccccccccccccccccccaaaaaaaacccccccccccccccccccccaaacaaaaaaaccaaaaaaaaaaaaahhppptttxxxxxxyyyyyyvvvppplllcccccc', 'SbccccccccccccccccccccccaaaacccaaaaacccccccaaaaaaaaacaaaccccccccaacccccccaaaaaccccccccaaaaacccccccccaaaaaaaaaaaaaaaaaaaaaaaaacgggpppttxxxxEzzyyyyyvvvqqqlllcccccc', 'abccccccccccccccccccccccaaaacccaaaaacccccccaaaaaaaaccaaaccccccccaaacaaccaaaaaaccccccccaaaaacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaacgggpppsssxxxyyyyyyvvvvvqqlllccccccc', 'abcccaaaccccccccccccccccaaaccccccccccccccccaaaaaaaaaaaaaccccccccaaaaaaccaaaaaacccccccaaaaaacccaaaccaaaaaccaaaaaaaaaaaacccccccccgggppssswwyyyyyyvvvvqqqqlllccccccc', 'abcaaaaaccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccccccaaaaaaacccaccaaacccccccaaaaaacccaaacccaaaaaaaaaaaccccaaacccaaaaacgggppsswwwyyyyyyvvqqqqqlllcccccccc', 'abcaaaaaaccccccccccccccccccccccccccccccccccaaccaaaaaaaaaaaccccaaaaaaacccccccccccccccccaaaaacccaaacaaaacaaaaaaaaccccaaacccaaaaacggpppsswwwywwyyyvvqqqmmmlccccccccc', 'abcaaaaaacccccccaacaaccccccccccccccccccccccccccaaaaaaaaaaaccccccaaaaacccccccccccccccccaaaccaaaaaaaaaaacccccccaacccccccccaaaaaacggpppsswwwwwwwwyvvqqqmmmcccccccccc', 'abcaaaaaccccccccaaaaaccccccccccccccccccccccccccccaaaaaaaacccccccaacaaacccccccccccccccccccccaaaaaaaaaccccccccccccccccccccaaaaaagggoossswwwwrrwwwvvqqmmmccccccccccc', 'abcaaaaacccccccaaaaaccccccccccccccccccccccccccccaaaaaaacccccccccaaccccccccccccccccccccccccccaaaaaaacccccccccccaaaccccccccaaaaagggooosssssrrrrwwwvqqmmmcccaacccccc', 'abcccccccccccccaaaaaaccccccccccccccccccccaacccccccccaaaccccccccccccccccccccccccccccccccccccccaaaaaaccccccccccccaaaaccccccaaaccgggooosssssrrrrrwwrrqmmmcccaacccccc', 'abcccccccccccccccaaaacccccccccccccccccccaaaacccccccacaaacccccccccccccccccccccccccccccccccccccaaaaaaacccccccccaaaaaacccccccccccgffoooooosoonrrrrrrrrmmmccaaaaacccc', 'abcccccccccccccccaccccccccccccccccccccccaaaacccccccaaaaacccccccccccccccccccccccccccccccccccccaaacaaacccccccccaaaaacccccccccccccfffoooooooonnnrrrrrmmmddcaaaaacccc', 'abccccccccccccccccccccccccccccccccccccccaaaaccccccccaaaaacccccccccccccccccccccccccaaaccccccccaacccccccccccccccaaaaaccccccccccccffffoooooonnnnnnrnnmmmdddaaaaacccc', 'abcccccccccccccccccccccccccccccccccccccccccccccccccaaaaaacccccccccccccccccaaaaaccaaaacccccccccccccccccccccccccaacccccccccccccccfffffffffeeeennnnnnmmdddaaaacccccc', 'abcccccccaaaccccccccaccccccccccccccccccccccccccccccaaaaccccccccccccaaaccccaaaaaccaaaaccccccccccccccccccccccccccccccccccccccccccccfffffffeeeeennnnnmddddaaaaaccccc', 'abcccaaccaaacccccaaaacccccaacccccccccccccccccccccccccaaacccccccccccaaacccaaaaaacccaaaccccccccccccccccccccccccccccccccccccccccccccccffffeeeeeeeedddddddcccaacccccc', 'abcccaaaaaaacccccaaaaaaccaaacccccccccccccccccccccccccccacccccccccccaaaaccaaaaaaccccccccccccccccccccccccccaacccccccccaaaccccccccccccccaaaaaaeeeeedddddcccccccccccc', 'abcccaaaaaacccccccaaaacccaaacaaaccccaaaacccccccccaaacaaaccccccaacccaaaacaaaaaaacccccccccccccccccccccccccaaaccccccccaaaacccccccccccccccccccaaaaeeddddccccccccccccc', 'abccccaaaaaaaacccaaaaaaaaaaaaaaaccccaaaacccccccccaaaaaaacccccaaacccaaaaaaaaaacccccccccccccccccccccccaaacaaaccccccccaaaaccccccccccccccccccccaaaccccccccccccccaaaca', 'abcccaaaaaaaaacccaacaaaaaaaaaaacccccaaaaccccccccccaaaaaacaaacaaacaaaaaaaaaacccccccccccccccaaacccccccaaaaaaaaaaccccccaaaccccccccccccccccccccaacccccccccccccccaaaaa', 'abcccaaaaaaaacccccccccccaaaaaacccccccaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaacccccccaaaaaaaaacccccccccccccccccccccccccccccaaacccccccccccccccaaaa', 'abccaaaaaaacccccccccccccaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaacccccccaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccaaaaa']

let positions = []
const maxX = input[0].length - 1
const maxY = input.length - 1

class Position {
    constructor(x, y) {
        this.x = x
        this.y = y

        let inputChar = input[y].charAt(x)

        this.isStart = inputChar === 'S'
        this.isEnd = inputChar === 'E'

        if (inputChar === 'S') inputChar = 'a'
        if (inputChar === 'E') inputChar = 'z'
        this.heigth = inputChar.charCodeAt(0) - 'a'.charCodeAt(0)
        this.neighbours = []

        this.shortestRoute = []
        this.shortestRouteLength = Infinity
    }

    addNeighbours() {
        if (this.x > 0) this.neighbours.push(positions.find((position) => position.x === this.x - 1 && position.y === this.y))
        if (this.x < maxX) this.neighbours.push(positions.find((position) => position.x === this.x + 1 && position.y === this.y))
        if (this.y > 0) this.neighbours.push(positions.find((position) => position.y === this.y - 1 && position.x === this.x))
        if (this.y < maxY) this.neighbours.push(positions.find((position) => position.y === this.y + 1 && position.x === this.x))

        this.neighbours = this.neighbours.sort((a, b) => a.heigth - b. heigth)
    }

    findShortestRouteToEnd() {
        this.neighbours.forEach(neighbour => {
            const canAccessMe = neighbour.heigth >= this.heigth - 1

            if (canAccessMe) {
                if (neighbour.shortestRouteLength > this.shortestRouteLength) {
                    neighbour.shortestRoute = [...this.shortestRoute]
                    neighbour.shortestRoute.push(this)
                    neighbour.shortestRouteLength = this.shortestRouteLength + 1

                    if (!unSearchedPositions.includes(neighbour)) unSearchedPositions.push(neighbour)
                }
            }
        })
    }
}


input.forEach((row, y) => {
    [...row].forEach((char, x) => {
        positions.push(new Position(x, y))
    })
})

positions.forEach(pos => pos.addNeighbours())

const start = positions.find(pos => pos.isStart)
const end = positions.find(pos => pos.isEnd)

end.shortestRouteLength = 0

const unSearchedPositions = [end]

while (unSearchedPositions.length) {
    const position = unSearchedPositions.shift()
    position.findShortestRouteToEnd()
}

console.log(start.shortestRouteLength)

const allStarts = positions.filter(pos => pos.heigth === 0)
const shortestStartLength = Math.min(...allStarts.map(pos => pos.shortestRouteLength))
console.log(shortestStartLength)
const shortestStart = allStarts.find((start) => start.shortestRouteLength === shortestStartLength)


// Create heatmap
const getHeightColor = (position) => {
    switch (position.heigth) {
        case 0: return [0, 0, 0, 255]
        case 1: return [30, 30, 30, 255]
        case 2: return [40, 40, 40, 255]
        case 3: return [50, 50, 50, 255]
        case 4: return [60, 60, 60, 255]
        case 5: return [70, 70, 70, 255]
        case 6: return [80, 80, 80, 255]
        case 7: return [90, 90, 90, 255]
        case 8: return [100, 100, 100, 255]
        case 9: return [110, 110, 110, 255]
        case 10: return [120, 120, 120, 255]
        case 11: return [129, 129, 129, 255]
        case 12: return [138, 138, 138, 255]
        case 13: return [147, 147, 147, 255]
        case 14: return [156, 156, 156, 255]
        case 15: return [165, 165, 165, 255]
        case 16: return [174, 174, 174, 255]
        case 17: return [183, 183, 183, 255]
        case 18: return [192, 192, 192, 255]
        case 19: return [201, 201, 201, 255]
        case 20: return [210, 210, 210, 255]
        case 21: return [219, 219, 219, 255]
        case 22: return [228, 228, 228, 255]
        case 23: return [237, 237, 237, 255]
        case 24: return [246, 246, 246, 255]
        case 25: return [255, 255, 255, 255]
        default: return [0, 0, 0, 0]
    }
}

// import * as PImage from 'pureimage'
// import * as fs from 'fs'
const PImage = require('pureimage')
const fs = require('fs')

const pixelSize = 5

const image = PImage.make((maxX+1) * pixelSize, (maxY+1) * pixelSize, {})

// fill in map
positions.forEach(position => {
    for (let x = 0; x < pixelSize; x++) {
        for (let y = 0; y < pixelSize; y++) {
            image.setPixelRGBA_i((position.x * pixelSize) + x, (position.y * pixelSize) + y, ...getHeightColor(position))
        }
    }
})

// draw walked path for start
start.shortestRoute.forEach(position => {
    for (let x = 1; x < pixelSize - 1; x++) {
        for (let y = 1; y < pixelSize - 1; y++) {
            image.setPixelRGBA_i((position.x * pixelSize) + 2, (position.y * pixelSize) + 1, ...[0, 183, 183, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 2, (position.y * pixelSize) + 3, ...[0, 183, 183, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 2, (position.y * pixelSize) + 2, ...[0, 183, 183, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 1, (position.y * pixelSize) + 2, ...[0, 183, 183, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 3, (position.y * pixelSize) + 2, ...[0, 183, 183, 255])
        }
    }
})

// draw walked path for shortest route
shortestStart.shortestRoute.forEach(position => {
    for (let x = 1; x < pixelSize - 1; x++) {
        for (let y = 1; y < pixelSize - 1; y++) {
            image.setPixelRGBA_i((position.x * pixelSize) + 1, (position.y * pixelSize) + 1, ...[183, 183, 0, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 3, (position.y * pixelSize) + 3, ...[183, 183, 0, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 2, (position.y * pixelSize) + 2, ...[183, 183, 0, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 1, (position.y * pixelSize) + 3, ...[183, 183, 0, 255])
            image.setPixelRGBA_i((position.x * pixelSize) + 3, (position.y * pixelSize) + 1, ...[183, 183, 0, 255])
        }
    }
})

const filename = 'aoc12.png'
PImage.encodePNGToStream(image, fs.createWriteStream(filename)).then(() => {
    console.log(`wrote out the png file to ${filename}`);
}).catch((e)=>{
    console.log("there was an error writing", e);
});

