import fs from 'fs'

// const raw = fs.readFileSync('aoc09.example', 'utf8')
const raw = fs.readFileSync('aoc09.txt', 'utf8')

const singleHistories = raw.split('\n').slice(0, -1).map(line => line.split(' ').map(Number))

const getPrediction = (history) => {
    if (history.every(value => value === 0)) return 0
    const differences = []
    for (let i = 1; i < history.length ; i++) {
        differences.push(history[i] - history[i-1])
    }
    const predictionOfDifferences = getPrediction(differences)
    return history[history.length-1] + predictionOfDifferences
}

const getMoreHistory = (history) => {
    if (history.every(value => value === 0)) return 0
    const differences = []
    for (let i = 1; i < history.length ; i++) {
        differences.push(history[i] - history[i-1])
    }
    const moreHistoryOfDifferences = getMoreHistory(differences)
    return history[0] - moreHistoryOfDifferences
}

const predictions = singleHistories.map(getPrediction)
console.log(predictions.reduce((sum, prediction) => sum + prediction, 0))

const moreHistories = singleHistories.map(getMoreHistory)
console.log(moreHistories.reduce((sum, prediction) => sum + prediction, 0))
