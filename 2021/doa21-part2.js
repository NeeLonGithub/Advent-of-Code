console.time('Advent of Code - day 21')

let diceDistribution = [
    [3, 1], // 1,1,1
    [4, 3], // 1,1,2 1,2,1 2,1,1
    [5, 6], // 1,1,3 1,3,1 3,1,1  2,2,1 2,1,2 1,2,2
    [6, 7], // 1,2,3 1,3,2 2,1,3  2,3,1 3,1,2 3,2,1  2,2,2
    [7, 6], // 2,2,3 2,3,2 3,2,2  3,3,1 3,1,3 1,3,3
    [8, 3], // 3,3,2 3,2,3 2,3,3
    [9, 1]  // 3,3,3
]

const knownWins = new Map()

getStringRepresentationOfState = (player1, player2) => {
    return `${player1.score}-${player1.position}-${player2.score}-${player2.position}`
}

const doRecursiveThing = (player1, player2) => {
    if (player1.score >= 21) return [1, 0];
    if (player2.score >= 21) return [0, 1];

    const stringRepresentation = getStringRepresentationOfState(player1, player2)

    if (knownWins.has(stringRepresentation)) return knownWins.get(stringRepresentation)

    let wins = [0, 0]

    for (const [dice, weight] of diceDistribution) {

        const newPosition = (player1.position + dice) % 10;

        const newPlayer1AsPlayer2 = {
            score: player1.score + newPosition + 1,
            position: newPosition
        }

        const [foundP2Wins, foundP1Wins] = doRecursiveThing({score: player2.score, position: player2.position }, newPlayer1AsPlayer2);

        wins[0] += foundP1Wins * weight;
        wins[1] += foundP2Wins * weight;
    }

    knownWins.set(stringRepresentation, wins);

    return wins;
};

console.log('test:', Math.max(...doRecursiveThing({ position: 3, score: 0}, { position: 7, score: 0})));
console.log('real deal', Math.max(...doRecursiveThing({ position: 3, score: 0}, { position: 5, score: 0})));

console.timeEnd('Advent of Code - day 21')
