let targetX1 = 117
let targetX2 = 164
let targetY1 = -140
let targetY2 = -89

// test: 112
// targetX1 = 20
// targetX2 = 30
// targetY1 = -10
// targetY2 = -5

function getMinVelocityX() {
    let x = null
    let goalX = targetX1

    while (x === null) {
        let speed = 0
        let attemptX = goalX++

        while(attemptX > 0) attemptX -= speed++

        x = attemptX === 0 ? speed : null
    }

    return x - 1
}

function isOnTarget(x, y) {
    return x >= targetX1 && x <= targetX2 && y >= targetY1 && y <= targetY2
}

function isPassedTarget(x, y) {
    return x > targetX2 || y < targetY1
}


let count = 0

for (let x = getMinVelocityX(); x <= targetX2; x++) {
    for (let y = targetY1; y <= Math.abs(targetY1) - 1; y++) {
        let velocityX = x
        let velocityY = y

        let positionX = 0
        let positionY = 0

        while(true) {
            if (isOnTarget(positionX, positionY)) {
                count++
                break
            }
            if (isPassedTarget(positionX, positionY)) break

            positionX = velocityX === 0 ? positionX : positionX + velocityX--
            positionY += velocityY--
        }
    }
}

console.log(count);
