console.time()

// const input = [ {x: 2, y: 18, b: {x: -2, y: 15}}, {x: 9, y: 16, b: {x: 10, y: 16}}, {x: 13, y: 2, b: {x: 15, y: 3}}, {x: 12, y: 14, b: {x: 10, y: 16}}, {x: 10, y: 20, b: {x: 10, y: 16}}, {x: 14, y: 17, b: {x: 10, y: 16}}, {x: 8, y: 7, b: {x: 2, y: 10}}, {x: 2, y: 0, b: {x: 2, y: 10}}, {x: 0, y: 11, b: {x: 2, y: 10}}, {x: 20, y: 14, b: {x: 25, y: 17}}, {x: 17, y: 20, b: {x: 21, y: 22}}, {x: 16, y: 7, b: {x: 15, y: 3}}, {x: 14, y: 3, b: {x: 15, y: 3}}, {x: 20, y: 1, b: {x: 15, y: 3}}]
const input = [ {x: 407069, y: 1770807, b: {x: 105942, y: 2000000}}, {x: 2968955, y: 2961853, b: {x: 2700669, y: 3091664}}, {x: 3069788, y: 2289672, b: {x: 3072064, y: 2287523}}, {x: 2206, y: 1896380, b: {x: 105942, y: 2000000}}, {x: 3010408, y: 2580417, b: {x: 2966207, y: 2275132}}, {x: 2511130, y: 2230361, b: {x: 2966207, y: 2275132}}, {x: 65435, y: 2285654, b: {x: 105942, y: 2000000}}, {x: 2811709, y: 3379959, b: {x: 2801189, y: 3200444}}, {x: 168413, y: 3989039, b: {x: -631655, y: 3592291}}, {x: 165506, y: 2154294, b: {x: 105942, y: 2000000}}, {x: 2720578, y: 3116882, b: {x: 2700669, y: 3091664}}, {x: 786521, y: 1485720, b: {x: 105942, y: 2000000}}, {x: 82364, y: 2011850, b: {x: 105942, y: 2000000}}, {x: 2764729, y: 3156203, b: {x: 2801189, y: 3200444}}, {x: 1795379, y: 1766882, b: {x: 1616322, y: 907350}}, {x: 2708986, y: 3105910, b: {x: 2700669, y: 3091664}}, {x: 579597, y: 439, b: {x: 1616322, y: 907350}}, {x: 2671201, y: 2736834, b: {x: 2700669, y: 3091664}}, {x: 3901, y: 2089464, b: {x: 105942, y: 2000000}}, {x: 144449, y: 813212, b: {x: 105942, y: 2000000}}, {x: 3619265, y: 3169784, b: {x: 2801189, y: 3200444}}, {x: 2239333, y: 3878605, b: {x: 2801189, y: 3200444}}, {x: 2220630, y: 2493371, b: {x: 2966207, y: 2275132}}, {x: 1148022, y: 403837, b: {x: 1616322, y: 907350}}, {x: 996105, y: 3077490, b: {x: 2700669, y: 3091664}}, {x: 3763069, y: 3875159, b: {x: 2801189, y: 3200444}}, {x: 3994575, y: 2268273, b: {x: 3072064, y: 2287523}}, {x: 3025257, y: 2244500, b: {x: 2966207, y: 2275132}}, {x: 2721366, y: 1657084, b: {x: 2966207, y: 2275132}}, {x: 3783491, y: 1332930, b: {x: 3072064, y: 2287523}}, {x: 52706, y: 2020407, b: {x: 105942, y: 2000000}}, {x: 2543090, y: 47584, b: {x: 3450858, y: -772833}}, {x: 3499766, y: 2477193, b: {x: 3072064, y: 2287523}}]
// const targetY = 10
const targetY = 2000000
// const range = 20
const range = 4000000

class Beacon {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Sensor {
    constructor(x, y, {bx, by}) {
        this.x = x
        this.y = y
        this.beacon = new Beacon(bx, by)
        this.knownDistance = this.getDistance(this.beacon)
    }

    getEdgesWithinRange() {
        const coords = [
            {x: this.x, y: this.y + this.knownDistance + 1},
            {x: this.x, y: this.y - this.knownDistance - 1},
            {x: this.x + this.knownDistance + 1, y: this.y},
            {x: this.x - this.knownDistance - 1, y: this.y},
        ].filter(({x, y}) => x >= 0 && x<= range && y >= 0 && y <= range)

        for (let i = 1; i <= this.knownDistance; i++) {
            const moreCoords = []
            moreCoords.push({x: this.x + i, y: this.y + this.knownDistance + 1 - i})
            moreCoords.push({x: this.x - i, y: this.y + this.knownDistance - 1 - i})
            moreCoords.push({x: this.x + this.knownDistance + 1 - i, y: this.y + i})
            moreCoords.push({x: this.x - this.knownDistance - 1 + i, y: this.y + i})
            coords.push(...moreCoords.filter(({x, y}) => x >= 0 && x<= range && y >= 0 && y <= range))
        }
        return coords;
    }

    getDistance({x, y}) {
        return Math.abs(this.x - x) + Math.abs(this.y - y)
    }

    canSee(x, y) {
        return this.knownDistance >= this.getDistance({x, y})
    }

    isOccupied(x, y) {
        return (this.x === x && this.y === y) || (this.beacon.x === x && this.beacon.y === y)
    }

    toString() {
        return `Sensor at x=${this.x}, y=${this.y}: closest beacon is at x=${this.beacon.x}, y=${this.beacon.y}`
    }
}

const sensors = input.map(({x, y, b}) => new Sensor(x, y, {bx: b.x, by: b.y}))

// const minX = sensors.reduce((minX, sensor) => Math.min(minX, sensor.x - sensor.knownDistance), Infinity)
// const maxX = sensors.reduce((maxX, sensor) => Math.max(maxX, sensor.x + sensor.knownDistance), -Infinity)
// const minY = sensors.reduce((minY, sensor) => Math.min(minY, sensor.y - sensor.knownDistance), Infinity)
// const maxY = sensors.reduce((maxY, sensor) => Math.max(maxY, sensor.y + sensor.knownDistance), -Infinity)
//
// let count = 0
//
// for (let x = minX; x <= maxX; x++) {
//     let isSeen = false
//     sensors.forEach((sensor) => {
//         if (sensor.canSee(x, targetY) && !sensors.some((sensor) => sensor.isOccupied(x, targetY))) {
//             isSeen = true
//         }
//     })
//     if (isSeen) count++
// }
// console.log(count)

// const edges = sensors.reduce((edges, sensor) => [...edges, ...sensor.getEdgesWithinRange()], [])
// const result = edges.filter(({x, y}) => sensors.every((sensor) => !sensor.canSee(x, y)))[0]

const result =  { x: 3172756, y: 2767556 }

console.log(result.x * 4000000 + result.y)



console.timeEnd()

// 4096105
