let minX = 117
let maxX = 164
let minY = -140
let maxY = -89

// test: 45
// minX = 20
// maxX = 30
// minY = -10
// maxY = -5

function getVelocityX(goalX) {
    let x = null

    while (x === null) {
        let speed = 0
        let attemptX = goalX--

        while(attemptX > 0) attemptX -= speed++

        x = attemptX === 0 ? speed : null
    }

    return x
}

function getVelocityY(minSteps) {
    let y = Math.abs(minY + 1)
    if(y >= minSteps) return y
    return 'meh'
}


let attemptX = getVelocityX(maxX)
let attemptY = getVelocityY(attemptX + 1)

console.log(attemptY);

let score = 0

for (let i = 1; i <= attemptY; i++) {
    score+= i
}
console.log(score);
