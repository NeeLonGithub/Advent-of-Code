import fs from 'fs'

// const raw = fs.readFileSync('aoc15.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('aoc15.input', 'utf8').slice(0, -1)

const instructions = raw.split(',')

const getHolidayAsciiStringHelperNumber = (holidayAsciiString) => {
    let value = 0

    for (let i = 0; i < holidayAsciiString.length; i++) {
        value += holidayAsciiString.charCodeAt(i)
        value *= 17
        value %= 256
    }

    return value
}

const holidayAsciiStringHelperManualArrangementProcedureStep = (instruction, map) => {
    if (instruction.includes('=')) {

        const lens = new Lens(instruction)
        const hash = getHolidayAsciiStringHelperNumber(lens.label)

        if (typeof map[hash] === 'undefined') map[hash] = []

        const position = map[hash].findIndex((boxedLens) => boxedLens.label === lens.label)

        if (position === -1) map[hash].push(lens)
        else map[hash][position] = lens

    } else {
        const label = instruction.slice(0,-1)
        const hash = getHolidayAsciiStringHelperNumber(label)

        if (typeof map[hash] === 'undefined') map[hash] = []

        const position = map[hash].findIndex((boxedLens) => boxedLens.label === label)
        if (position !== -1) {
            map[hash].splice(position, 1)
        }
    }
}

class Lens {
    constructor(instruction) {
        const [label, focusLength] = instruction.split('=')
        this.label = label
        this.focusLength = focusLength
    }
}
const getFocusingPower = (boxNumber, box) => {
    let boxFocusingPower = 0
    box.forEach((lens, index) => {
        const focusingPower = (Number(boxNumber) + 1) * (index + 1) * lens.focusLength
        boxFocusingPower += focusingPower
    })
    return boxFocusingPower
}

const holidayAsciiStringHelperManualArrangementProcedure = (instructions) => {
    const map = {}

    instructions.forEach(instruction => {
        holidayAsciiStringHelperManualArrangementProcedureStep(instruction, map)
    })

    let totalFocusPower = 0
    Object.entries(map).forEach(([boxNumber, box]) => {
        const focusPower = getFocusingPower(boxNumber, box)
        totalFocusPower += focusPower
    })
    return totalFocusPower
}

// console.log(instructions.map(getHolidayAsciiStringHelperNumber).reduce((a,b)=> a+b, 0))
console.log(holidayAsciiStringHelperManualArrangementProcedure(instructions))
