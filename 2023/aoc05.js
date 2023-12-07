import fs from 'fs'

// const raw = fs.readFileSync('aoc05.txt', 'utf8')
const raw = fs.readFileSync('aoc05.txt', 'utf8')

const chunks = raw.slice(0, -1).split('\n\n')

class ConversionRow {
    constructor(line) {
        const [destinationRange, sourceRange, rangeLength ] = line.split(' ').map(Number)
        this.destinationRange = destinationRange
        this.sourceRange = sourceRange
        this.rangeLength = rangeLength
    }

    converse(source) {
        if (source >= this.sourceRange && source <= this.sourceRange+this.rangeLength-1) {
            return this.destinationRange + source - this.sourceRange
        }
        return source
    }
}
class ConversionTable {
    constructor(chunk) {
        const lines = chunk.split('\n')
        this.name = lines[0].slice(0, -1)
        this.conversions = lines.slice(1).map((line) => new ConversionRow(line))
    }

    converse(source) {
        let i = 0
        let result = source
        while (result === source && i < this.conversions.length) {
            result = this.conversions[i].converse(source)
            i++
        }
        return result
    }
}

const seeds = chunks[0].split(' ').slice(1).map(Number)
const tables = chunks.slice(1).map(chunk => new ConversionTable(chunk))

const locations = seeds.map(seed => tables.reduce((source, table) => table.converse(source), seed))
// console.log(Math.min(...locations))

let lowest = Number.MAX_VALUE

const start = seeds[18]
const range = seeds[19]

console.time('smallest range')
for (let seed = start; seed < start + range; seed++) {
    const location = tables.reduce((source, table) => table.converse(source), seed)
    if (location < lowest) {
        lowest = location
        // console.log(seed, lowest)
    }

    // if ((seed - start) % 1000000 === 0) console.log(seed)
}

// console.log('lowest:', lowest)
console.log(`Found lowest out of ${range} seeds in:`)
console.timeEnd('smallest range')
// 1st range:  595208874
// 2nd range:  113469887
// 3rd range:  283658805
// 4th range:  463381925
// 5th range: 1115354457
// 6th range: 1647100058
// 7th range: 2519547765
// 8th range:  231265819
// 9th range:   79874951 => seed 3969171811
//10th range: 3532982063
