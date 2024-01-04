import fs from 'fs'

// const raw = fs.readFileSync('aoc12.example', 'utf8')
const raw = fs.readFileSync('aoc12.input', 'utf8')

const lines = raw.split('\n')
    .slice(0, -1)
    .map(line => line.split(' '))
    .map(([springs, numbersPart]) => `${Array(5).fill(springs).join('?')} ${Array(5).fill(numbersPart).join(',')}`)

const processLine = (line) => {
    const [springsPart, numbersPart] = line.split(' ')

    const numbers = numbersPart.split(',').map(Number)

    const springs = springsPart.split('.').filter(group => group !== '')

    return findOptions(springs, numbers)
}

const getHash = (springs, numbers) => {
  return `${springs.join('.')} ${numbers.join(',')}`
}

const map = {}
const fitNumbersInGroup = (springsGroup, numbers) => {
    if (typeof map[getHash([springsGroup], numbers)] !== 'undefined') return map[getHash([springsGroup], numbers)]
    if (numbers.length === 0) {
        const noNumberResult = Number(!springsGroup.includes('#'))
        map[getHash([springsGroup], numbers)] = noNumberResult
        return noNumberResult
    }
    if (numbers.reduce((sum, number) => sum + number, numbers.length - 1) > springsGroup.length) {
        map[getHash([springsGroup], numbers)] = 0
        return 0
    }
    if (numbers.length === 1 && numbers.at(0) === springsGroup.length) {
        map[getHash([springsGroup], numbers)] = 1
        return 1
    }

    // numbers is not an empty array
    // the springs group is a string of # and ? and is larger than the sum of numbers
    // the movability is restricted by the #:
    //   ??##?? 3 -> 2
    //   ?????? 3 -> 4
    // Tricky problems might be something like ??#?#???? 1,3 -> 2
    // Recursive breakdown:
    // #?#?#???? 1,3 +  ?#?#???? 1,3
    // #?#?#???? 1,3 =
    //   #?#????   3 = 1
    //
    //  ?#?#???? 1,3 =  ##?#???? 1,3 +   #?#???? 1,3
    //  ##?#???? 1,3 = 0
    //   #?#???? 1,3 =
    //     #????   3 = 1
    //
    // ??#?#???? 1,3 = #?#?#???? 1,3 +  ?#?#???? 1,3 = #?#?#???? 1,3 +  ##?#???? 1,3 +   #?#???? 1,3 =
    // ??#?#???? 1,3 =                                   #?#????   3 +       0       +     #????   3 =
    // ??#?#???? 1,3 =                                      1        +       0       +       1       =
    // end recursion if it starts with #

    if (springsGroup[0] === '#') {
        const firstNumberFits = springsGroup[numbers[0]] === '?'
        if (!firstNumberFits) {
            map[getHash([springsGroup], numbers)] = 0
            return 0
        }
        const remainderResult = fitNumbersInGroup(springsGroup.slice(numbers[0] + 1), numbers.slice(1))
        map[getHash([springsGroup], numbers)] = remainderResult
        return remainderResult
    }

    const splitPathResult = fitNumbersInGroup(springsGroup.replace('?', '#'), numbers) + fitNumbersInGroup(springsGroup.slice(1), numbers)
    map[getHash([springsGroup], numbers)] = splitPathResult
    return splitPathResult
}

const findOptions = (springs, numbers) => {
    if (typeof map[getHash(springs, numbers)] !== 'undefined') return map[getHash(springs, numbers)]

    if (springs.length === 0) {
        const emptySpringsResult = Number(numbers.length === 0)
        map[getHash(springs, numbers)] = emptySpringsResult
        return emptySpringsResult
    }
    if (springs.length === 1) {
        const singlePartResult = fitNumbersInGroup(springs[0], numbers)
        map[getHash(springs, numbers)] = singlePartResult
        return singlePartResult
    }
    let result = 0

    for (let i = 0; i <= numbers.length; i++) {
        const firstSplit = findOptions(springs.slice(0, 1), numbers.slice(0,i))
        if (firstSplit === 0) continue
        const secondSplit = findOptions(springs.slice(1), numbers.slice(i))
        if (secondSplit === 0) continue
        result += firstSplit * secondSplit
    }

    map[getHash(springs, numbers)] = result
    return result
}

console.time('all')
let sum = 0
lines.forEach((line, index) => {
    sum += processLine(line)
})
console.log(sum)
console.timeEnd('all')
