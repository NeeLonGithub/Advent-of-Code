
import fs from 'fs'

const raw = fs.readFileSync('aoc12.example', 'utf8')
// const raw = fs.readFileSync('aoc12.input', 'utf8')

const lines = raw.split('\n').slice(0, -1)
const lines2 = raw.split('\n')
    .slice(0, -1)
    .map(line => line.split(' '))
    .map(([springs, numbersPart]) => `${Array(5).fill(springs).join('?')} ${Array(5).fill(numbersPart).join(',')}`)

const processLine = (line) => {
    const [springs, numbersPart] = line.split(' ')

    const numbers = numbersPart.split(',').map(Number)
}
