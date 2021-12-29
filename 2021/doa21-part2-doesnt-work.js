console.time('Advent of Code - day 21')

let emptyScores = {
    1: 0n,
    2: 0n,
    3: 0n,
    4: 0n,
    5: 0n,
    6: 0n,
    7: 0n,
    8: 0n,
    9: 0n,
    10: 0n
}

let diceDistribution = [
 [3, 1n], // 1,1,1
 [4, 3n], // 1,1,2 1,2,1 2,1,1
 [5, 6n], // 1,1,3 1,3,1 3,1,1  2,2,1 2,1,2 1,2,2
 [6, 7n], // 1,2,3 1,3,2 2,1,3  2,3,1 3,1,2 3,2,1  2,2,2
 [7, 6n], // 2,2,3 2,3,2 3,2,2  3,3,1 3,1,3 1,3,3
 [8, 3n], // 3,3,2 3,2,3 2,3,3
 [9, 1n]  // 3,3,3
]

let winnings = { ...emptyScores }

function doRecursion(turn, position, score, multiplier) {
    for (let [dice, weight] of diceDistribution) {
        let newPosition = (position-1+dice)%10+1
        if (score + newPosition >= 21) {
            winnings[turn] = winnings[turn] + weight * multiplier
        } else {
            doRecursion(turn + 1, newPosition, score + newPosition, weight * multiplier)
        }
    }
}

doRecursion(1, 4, 0, 1n)
let winningsP1 = winnings
winnings = { ...emptyScores }
// doRecursion(1, 8, 0) //challenge
doRecursion(1, 6, 0, 1n) // test
let winningsP2 = winnings
// console.log(winningsP1)  // validation that it is correct:
// {
//   '1': 0n,        // out of 27 *       1 =       27:      27 left
//   '2': 0n,        // out of 27 *      27 =      729:     729 left
//   '3': 4608n,     // out of 27 *     729 =    19683:   15075 left
//   '4': 249542n,   // out of 27 *   15075 =   407025:  157483 left
//   '5': 3219454n,  // out of 27 *  157483 =  4252041: 1032587 left
//   '6': 24905476n, // out of 27 * 1032587 = 27879849: 2974373 left
//   '7': 77993473n, // out of 27 * 2974373 = 80308071: 2314598 left
//   '8': 62172638n, // out of 27 * 2314598 = 62494146:  321508 left
//   '9': 8678745n,  // out of 27 *  321508 =  8680716:    1971 left
//   '10': 53217n    // out of 27 *    1971 =    53217:       0 left
// }
// console.log(winningsP2)
// { '1': 0n,
//   '2': 0n,
//   '3': 1755n,
//   '4': 227988n,
//   '5': 5270854n,
//   '6': 39537296n,
//   '7': 126601774n,
//   '8': 97382819n,
//   '9': 13367199n,
//   '10': 90072n
// }

// So I had the idea to solve this by counting the ways a player could end on 21 or more points and then calculate the universes from there.
// I think we can do this, because the paths of the other player do not affect the paths to 21 or more points, just how many universes there are left to win.
//
// Let's consider a much simpler problem to grasp, but with all the possible complexity in it.
//
// P1 uses a 2 sided quantum dice, throws once per turn and get the amount of points from the die (no pawns and boards involved). P1 wins when it reaches 2 points win. However, in the first turn it returns A or B, and both add 0 to the total score (so the first throw only generates new universes).
//
// So for P1, the paths that lead to a win (ignoring P2):
//
// * In turn 1 there are 0 paths
// * In turn 2 there are 2 paths: [A, 2] and [B, 2]
// * In turn 3 there are 4 paths: [A, 1, 1], [A, 1, 2], [B, 1, 1] and [B, 1, 2]
// * In turn 4 there are 0 paths because P1 always finishes in turn 2 or turn 3
//
// So the winning paths for P1 who uses a d2, are: [0, 2, 4, 0]
//
// For P2, let's do something totally different. P2 gets a three sided quantum die and other winning conditions.
// Such that the winning paths for P2 who uses a d3, are: [0, 1, 24, 0]
//
// Then this would be the process that I converted in code:
//
// turn |   the winnings from above  |  the universes without winning:  not-won-by-P1 * not-won-by-P2 = not-won    |    potential universes won        | potential universes not won
//  1-1 | P1:  0 out of 2^1:   (0/2) |   1 * 2 - 0               *   1                      =  2 universes not won | P1         (0/2) ; P2       (0/2) |    (2/2) universes left
//  1-2 | P2:  0 out of 3^1:   (0/3) |   1 * 2 - 0               *   1 * 3 - 0              =  6 universes not won | P1         (0/6) ; P2       (0/6) |    (6/6) universes left
//  2-1 | P1:  2 out of 2^2:   (2/4) |  (1 * 2 - 0)*2 - 2        *   1 * 3 - 0              =  6 universes not won | P1  + 6   (6/12) ; P2      (0/12) |   (6/12) universes left
//  2-2 | P2:  1 out of 3^2:   (1/9) |  (1 * 2 - 0)*2 - 2        *  (1 * 3 - 0) - 1         = 16 universes not won | P1       (18/36) ; P2 + 2  (2/36) |  (16/36) universes left
//  3-1 | P1:  4 out of 2^3:   (4/8) | ((1 * 2 - 0)*2 - 2)*2 - 4 *  (1 * 3 - 0) - 1         =  0 universes not won | P1  +32  (68/72) ; P2      (4/72) |   (0/72) universes left
//  3-2 | P2: 24 out of 3^3: (24/27) | ((1 * 2 - 0)*2 - 2)*2 - 4 * ((1 * 3 - 0) - 1) - 24   =  0 universes not won | P1     (204/216) ; P2    (12/216) |  (0/216) universes left
//                                                                                                             total P1 = 38      total P2 = 2
//The code that makes this happen! THIS WORKS
// Note, in JavaScript, the literal `1n` is the number 1 as a BigInt type
//
// let potentialUniversesCreatedByP1 = 1n
// let potentialUniversesCreatedByP2 = 1n
// let potentialUniversesNotWonByP1 = 1n
// let potentialUniversesNotWonByP2 = 1n
// let universesWonByP1 = 0n
// let universesWonByP2 = 0n
// let universesWithoutWinner = 1n
//
// winningsP1 = {1: 0n, 2: 2n, 3: 4n, 4: 0n}
// winningsP2 = {1: 0n, 2: 1n, 3: 24n, 4: 0n}
//
// for (let i = 1; i <= 4; i++) {
//     potentialUniversesCreatedByP1 *= 2n
//     potentialUniversesNotWonByP1 = potentialUniversesNotWonByP1 * 2n - winningsP1[i]
//     let potentialWinsP1 = universesWithoutWinner * 2n
//     universesWithoutWinner = potentialUniversesNotWonByP1 * potentialUniversesNotWonByP2
//
//     console.log('totalPotentialUniverses:', potentialUniversesCreatedByP1 * potentialUniversesCreatedByP2);
//     console.log('potentialUniversesNotWonByP1:', potentialUniversesNotWonByP1);
//     console.log('universesWithoutWinner:', universesWithoutWinner);
//     console.log('P1 wins', potentialWinsP1 - universesWithoutWinner);
//
//     universesWonByP1 += potentialWinsP1 - universesWithoutWinner
//
//     potentialUniversesCreatedByP2 *= 3n
//     potentialUniversesNotWonByP2 = potentialUniversesNotWonByP2 * 3n - winningsP2[i]
//     let potentialWinsP2 = universesWithoutWinner * 3n
//     universesWithoutWinner = potentialUniversesNotWonByP1 * potentialUniversesNotWonByP2
//
//     console.log('totalPotentialUniverses:', potentialUniversesCreatedByP1 * potentialUniversesCreatedByP2);
//     console.log('potentialUniversesNotWonByP2:', potentialUniversesNotWonByP2);
//     console.log('universesWithoutWinner:', universesWithoutWinner);
//     console.log('P2 wins', potentialWinsP2 - universesWithoutWinner);
//
//     universesWonByP2 += potentialWinsP2 - universesWithoutWinner
// }
//
// console.log(universesWonByP1)
// console.log(universesWonByP2)


// Applying it to the real scenario where both players split the universes 27 ways per turn

let potentialUniversesCreatedByP1 = 1n
let potentialUniversesCreatedByP2 = 1n
let potentialUniversesNotWonByP1 = 1n
let potentialUniversesNotWonByP2 = 1n
let universesWonByP1 = 0n
let universesWonByP2 = 0n
let universesWithoutWinner = 1n

for (let i = 1; i <= 10; i++) {
    potentialUniversesCreatedByP1 *= 27n
    potentialUniversesNotWonByP1 = potentialUniversesNotWonByP1 * 27n - winningsP1[i]
    let potentialWinsP1 = universesWithoutWinner * 27n
    universesWithoutWinner = potentialUniversesNotWonByP1 * potentialUniversesNotWonByP2

    console.log('totalPotentialUniverses:', potentialUniversesCreatedByP1 * potentialUniversesCreatedByP2);
    console.log('potentialUniversesNotWonByP1:', potentialUniversesNotWonByP1);
    console.log('universesWithoutWinner:', universesWithoutWinner);
    console.log('P1 wins', potentialWinsP1 - universesWithoutWinner);

    universesWonByP1 += potentialWinsP1 - universesWithoutWinner

    potentialUniversesCreatedByP2 *= 27n
    potentialUniversesNotWonByP2 = potentialUniversesNotWonByP2 * 27n - winningsP2[i]
    let potentialWinsP2 = universesWithoutWinner * 27n
    universesWithoutWinner = potentialUniversesNotWonByP1 * potentialUniversesNotWonByP2

    console.log('totalPotentialUniverses:', potentialUniversesCreatedByP1 * potentialUniversesCreatedByP2);
    console.log('potentialUniversesNotWonByP2:', potentialUniversesNotWonByP2);
    console.log('universesWithoutWinner:', universesWithoutWinner);
    console.log('P2 wins', potentialWinsP2 - universesWithoutWinner);

    universesWonByP2 += potentialWinsP2 - universesWithoutWinner
}

console.log(universesWonByP1)
console.log(universesWonByP2)

console.log(`P1 won ${universesWonByP1} times: ${universesWonByP1 == 444356092776315}. Should be 444356092776315`)
console.log(`P2 won ${universesWonByP2} times: ${universesWonByP2 == 341960390180808}. Should be 341960390180808`)

console.timeEnd('Advent of Code - day 21')
