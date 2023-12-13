import fs from 'fs'

// const raw = fs.readFileSync('aoc13.example', 'utf8')
const raw = fs.readFileSync('aoc13.input', 'utf8')

const patterns = raw.slice(0,-1).split('\n\n').map(pattern => pattern.split('\n'))

const checkMirrorOnLine = (pattern, line) => {
    const size = pattern.length

    let match = true
    let smudges = 0

    let offset = 0
    while (match && offset < line && offset + line < size) {
        match = pattern[line - 1 - offset] === pattern[line + offset]

        if (!match) {
            const line1 = pattern[line - 1 - offset].split('')
            const line2 = pattern[line + offset].split('')

            let misses = 0
            line1.forEach((line1Rock, index) => {
                if (line1Rock !== line2[index]) misses++
            })

            if (misses === 1) {
                smudges++
                match = true
            }
        }
        offset++
    }

    return [match, smudges]
}

const findHorizontalMirror = (pattern, amountOfSmudges) => {
    for (let i = 1; i < pattern.length; i++) {
        const [mirror, smudges] = checkMirrorOnLine(pattern, i)
        if (mirror && smudges === amountOfSmudges) return i
    }
    return 0
}

const turnPattern = (pattern) => {

    const width = pattern[0].length
    const length = pattern.length

    const turnedPattern = Array(width)

    for (let i = 0; i < width; i++) {
        const newRow = Array(length).fill('')
        for (let j = 0; j < length; j++) {
            newRow[j] = pattern[j][i]
        }
        turnedPattern[i] = newRow.join('')
    }

    return turnedPattern
}

for (let smudges = 0; smudges <= 1; smudges++) {

    const mirrors = patterns.slice(0).map(pattern => {
        let mirror = findHorizontalMirror(pattern, smudges) * 100
        if (mirror === 0) mirror = findHorizontalMirror(turnPattern(pattern), smudges)
        return mirror
    })

    console.log(mirrors.reduce((sum, mirror) => sum+mirror, 0))
}
