// const input = [
//     {items: [79, 98], operation: (old) => old * 19n, test: 23n, succes: 2, fail: 3},
//     {items: [54, 65, 75, 74],operation: (old) => old + 6n,test: 19n,succes: 2,fail: 0},
//     {items: [79, 60, 97], operation: (old) => old * old, test: 13n, succes: 1, fail: 3},
//     {items: [74],operation: (old) => old + 3n,test: 17n,succes: 0,fail: 1}
// ]
const input = [
    {items: [89, 73, 66, 57, 64, 80], operation: (old) => old * 3n, test: 13n, succes: 6, fail: 2},
    {items: [83, 78, 81, 55, 81, 59, 69], operation: (old) => old + 1n, test: 3n, succes: 7, fail: 4},
    {items: [76, 91, 58, 85], operation: (old) => old * 13n, test: 7n, succes: 1, fail: 4},
    {items: [71, 72, 74, 76, 68], operation: (old) => old * old, test: 2n, succes: 6, fail: 0},
    {items: [98, 85, 84], operation: (old) => old + 7n, test: 19n, succes: 5, fail: 7},
    {items: [78], operation: (old) => old + 8n, test: 5n, succes: 3, fail: 0},
    {items: [86, 70, 60, 88, 88, 78, 74, 83], operation: (old) => old + 4n, test: 11n, succes: 1, fail: 2},
    {items: [81, 58], operation: (old) => old + 5n, test: 17n, succes: 3, fail: 5}
]

let maxWorryLevel;

class Monkey {
    constructor({items, operation, test, succes, fail}) {
        this.items = items.map(item => BigInt(item));
        this.operation = operation;
        this.testDivideBy = test;
        this.onSuccesThrowTo = succes;
        this.onFailThrowTo = fail;

        this.count = 0n;
    }

    inspect() {
        const itemsToGive = [];

        while (this.items.length) {
            const item = this.items.shift()
            let worryLevel = this.operation(item) % maxWorryLevel
            // worryLevel = Math.floor(worryLevel / 3)
            let newMonkey = worryLevel % this.testDivideBy === 0n ? this.onSuccesThrowTo : this.onFailThrowTo

            this.count = this.count + 1n

            itemsToGive.push([newMonkey, worryLevel])
        }

        return itemsToGive
    }
}

const monkeys = input.map(stuff => new Monkey(stuff))

maxWorryLevel = monkeys.reduce((product, monkey) => product * monkey.testDivideBy, 1n)

let score = 0n
let round = 0n

while (round < 10000n) {
    round = round + 1n
    monkeys.forEach((monkey) => {
        const itemsToGive = monkey.inspect()
        itemsToGive.forEach(([monkey, item]) => {
            monkeys[monkey].items.push(item)
        })
    })
    const increment = monkeys.reduce((sum, monkey) => sum + monkey.count, 0n) - score
    score = score + increment
}

// for (let i = 1; i <= 20; i++) {
//     monkeys.forEach((monkey) => {
//         const itemsToGive = monkey.inspect()
//         itemsToGive.forEach(([monkey, item]) => {
//             monkeys[monkey].items.push(item)
//         })
//     })
//     if (![].includes(i)) {
//         console.log('round', i);
//         monkeys.forEach(monkey => console.log(monkey.count))
//     }
// }

let result = monkeys.map((monkey) => monkey.count).sort()
console.log(maxWorryLevel);
console.log(result[3] * result[4]);

// 32348900163 wrong
// 2197975866 too low
// 18056898767 too low
