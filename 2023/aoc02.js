import fs from 'fs'

const lines = fs.readFileSync('aoc02.txt', 'utf8').split('\n').slice(0, -1)

const parseLine = (line) => {
    const [gamePart, setsPart] = line.split(':')
    const gameNr = Number(gamePart.split(' ')[1])

    const setsParts = setsPart.split(';')
    const sets = setsParts.map(gamePart => {
        const pullParts = gamePart.split(',')
        const pulls = pullParts.map(pullPart => {
            const [_, amount, colour] = pullPart.split(' ')
            return {
                amount: Number(amount),
                colour
            }
        })
        return { pulls }
    })

    return {
        number: gameNr,
        sets
    }
}

const games = lines.map(parseLine)

let sum = 0
let powerSum = 0

games.forEach(game => {
    let possible = true
    let minRed = 0
    let minGreen = 0
    let minBlue = 0
    game.sets.forEach(set => {
        set.pulls.forEach(pull => {
            if (pull.colour === 'red' && pull.amount > 12) possible = false
            if (pull.colour === 'green' && pull.amount > 13) possible = false
            if (pull.colour === 'blue' && pull.amount > 14) possible = false
            if (pull.colour === 'red' && pull.amount > minRed) minRed = pull.amount
            if (pull.colour === 'green' && pull.amount > minGreen) minGreen = pull.amount
            if (pull.colour === 'blue' && pull.amount > minBlue) minBlue = pull.amount
        })
    })
    if (possible) sum += game.number
    powerSum += minGreen * minRed * minBlue
})

console.log(sum)
console.log(powerSum)
