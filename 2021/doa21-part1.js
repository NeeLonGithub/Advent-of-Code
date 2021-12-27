console.time('Advent of Code - day 21')
let positions = [3, 5] // 4 and 6 actually
// positions = [3, 7] // 4 and 8 in test
let scores = [0, 0]

let turn = 0
let die = 6
let count = 0

while (scores[0] < 1000 && scores[1] < 1000) {
    positions[turn] = (positions[turn] + die) % 10
    scores[turn] += positions[turn] + 1

    turn = (turn + 1) % 2
    die = (die + 9) % 10
    count++
}

scores.forEach((score) => {
    if (score < 1000) {
        console.log(score * count * 3)
    }
})

console.timeEnd('Advent of Code - day 21')
