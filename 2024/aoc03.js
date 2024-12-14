import fs from 'fs'

// const raw = fs.readFileSync('2024/aoc03.example', 'utf8').slice(0, -1)
// const raw = fs.readFileSync('2024/aoc03.example2', 'utf8').slice(0, -1)
const raw = fs.readFileSync('2024/aoc03.input', 'utf8').slice(0, -1)

const mulFinder = /mul\((\d\d?\d?),(\d\d?\d?)\)/g
const enable = /do\(\)/g
const disable = /don\'t\(\)/g

const conditonalMulFinder = /(?:mul\((\d\d?\d?),(\d\d?\d?)\))|(?:do\(\))|(?:don\'t\(\))/g

const array = [...raw.matchAll(conditonalMulFinder)]

let sum = 0
let conditonalSum = 0
let enabled = true

array.forEach(([match, first, second]) => {

    if (enable.test(match)) {
        enabled = true
    } else if (disable.test(match)) {
        enabled = false
    } else if (enabled) {
        sum += first * second
        conditonalSum += first * second
    } else {
        sum += first * second
    }
})

console.log(sum);
console.log(conditonalSum);
