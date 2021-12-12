let input = [5,1,2,1,5,3,1,1,1,1,1,2,5,4,1,1,1,1,2,1,2,1,1,1,1,1,2,1,5,1,1,1,3,1,1,1,3,1,1,3,1,1,4,3,1,1,4,1,1,1,1,2,1,1,1,5,1,1,5,1,1,1,4,4,2,5,1,1,5,1,1,2,2,1,2,1,1,5,3,1,2,1,1,3,1,4,3,3,1,1,3,1,5,1,1,3,1,1,4,4,1,1,1,5,1,1,1,4,4,1,3,1,4,1,1,4,5,1,1,1,4,3,1,4,1,1,4,4,3,5,1,2,2,1,2,2,1,1,1,2,1,1,1,4,1,1,3,1,1,2,1,4,1,1,1,1,1,1,1,1,2,2,1,1,5,5,1,1,1,5,1,1,1,1,5,1,3,2,1,1,5,2,3,1,2,2,2,5,1,1,3,1,1,1,5,1,4,1,1,1,3,2,1,3,3,1,3,1,1,1,1,1,1,1,2,3,1,5,1,4,1,3,5,1,1,1,2,2,1,1,1,1,5,4,1,1,3,1,2,4,2,1,1,3,5,1,1,1,3,1,1,1,5,1,1,1,1,1,3,1,1,1,4,1,1,1,1,2,2,1,1,1,1,5,3,1,2,3,4,1,1,5,1,2,4,2,1,1,1,2,1,1,1,1,1,1,1,4,1,5];
// let input = [3,4,3,1,2];

// function getFishAfter80Days(start) {
//     let fish = [start];
//     for (let day = 0; day < 80; day++) {
//         let i = 0;
//         let fishLength = fish.length;
//         while (i < fishLength) {
//             if (fish[i] === 0) {
//                 fish[i] = 7;
//                 fish.push(8);
//             }
//             fish[i]--;
//             i++;
//         }
//     }
//     return fish.length;
// }

let memoisationLife0 = new Map();
let memoisationLife1 = new Map();
let memoisationLife2 = new Map();
let memoisationLife3 = new Map();
let memoisationLife4 = new Map();
let memoisationLife5 = new Map();
let memoisationLife6 = new Map();
let memoisationLife7 = new Map();
let memoisationLife8 = new Map();

function getMemoForLifeN(start) {
    switch (start) {
        case 0: return memoisationLife0;
        case 1: return memoisationLife1;
        case 2: return memoisationLife2;
        case 3: return memoisationLife3;
        case 4: return memoisationLife4;
        case 5: return memoisationLife5;
        case 6: return memoisationLife6;
        case 7: return memoisationLife7;
        case 8: return memoisationLife8;
    }
}

function getFishAfterNDays(start, days) {
    let memoisation = getMemoForLifeN(start);
    if (memoisation.has(days)) return memoisation.get(days);
    if (start >= days) {
        let result = 1;
        memoisation.set(days, result);
        return result;
    }
    if (start > 0) {
        let result = getFishAfterNDays(start - 1, days - 1);
        memoisation.set(days, result);
        return result;
    }
    return (getFishAfterNDays(8, days - 1) + getFishAfterNDays(6, days - 1))
}

let map = new Map();

for (let i = 0; i < 8; i++) {
    map.set(i, getFishAfterNDays(i, 256))
}

let count = 0;

input.forEach((num) => count += map.get(num));

console.log(count)
