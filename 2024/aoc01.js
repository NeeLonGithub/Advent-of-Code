import fs from 'fs'

// const raw = fs.readFileSync('2024/aoc01.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('2024/aoc01.input', 'utf8').slice(0, -1)

const lines = raw.split('\n')

const leftList = []
const rightList = []

lines.forEach(line => {
    const [first, second] = line.split('   ')
    leftList.push(Number(first))
    rightList.push(Number(second))
})


leftList.sort((a,b) => a-b)
rightList.sort((a,b) => a-b)


let totalDistance = 0

for (let i = 0; i < lines.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i])
}

console.log(totalDistance);


let totalSimalarity = 0

for (let i = 0; i < lines.length; i++) {
    const target = leftList[i]
    const firstIndex = rightList.findIndex(value => value === target)
    if (firstIndex === -1) continue
    const lastIndex = rightList.findLastIndex(value => value === target)

    totalSimalarity += target * (lastIndex - firstIndex + 1)
}

console.log(totalSimalarity);
