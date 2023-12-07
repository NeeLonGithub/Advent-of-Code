import fs from 'fs'

// const raw = fs.readFileSync('aoc07.test', 'utf8')
// const raw = fs.readFileSync('aoc07.example', 'utf8')
const raw = fs.readFileSync('aoc07.txt', 'utf8')

class Hand {
    constructor(line) {
        const [cardsPart, bidPart] = line.split(' ')
        this.bid = Number(bidPart)
        this.cards = cardsPart.split('')
        // this.strength = this.getStrength1(this.cards) // part 1
        this.strength = this.getStrength2(this.cards) // part 2
        this.cardStrengths = this.cards.map(this.getCardStrength)
    }

    getStrength1(cards) {
        const map = {}
        cards.forEach(card => {
            if (typeof map[card] === 'undefined') map[card] = 1
            else map[card]++
        })
        const values = Object.values(map)
        if (values.includes(5)) return 7
        if (values.includes(4)) return 6
        if (values.includes(3) && values.includes(2)) return 5
        if (values.includes(3)) return 4
        if (values.filter(value => value === 2).length === 2) return 3
        if (values.includes(2)) return 2
        return 1
    }

    getStrength2(cards) {
        const map = {}
        cards.forEach(card => {
            if (typeof map[card] === 'undefined') map[card] = 1
            else map[card]++
        })

        const jokers = map['J'] || 0
        map['J'] = 0

        const values = Object.values(map)
        if (values.includes(5 - jokers) || jokers === 5) return 7
        if (values.includes(4 - jokers)) return 6
        if (values.filter(value => value === 2).length === 2 && jokers === 1) return 5
        if (values.includes(3) && values.includes(2)) return 5
        if (values.includes(3 - jokers)) return 4
        if (values.includes(2) && jokers === 1) return 3
        if (values.filter(value => value === 2).length === 2) return 3
        if (values.includes(2 - jokers)) return 2
        return 1
    }

    getCardStrength(card) {
        if (card === 'A') return 14
        if (card === 'K') return 13
        if (card === 'Q') return 12
        // if (card === 'J') return 11 // part 1
        if (card === 'J') return 1 // part 2
        if (card === 'T') return 10
        return Number(card)
    }
}

const compareHands  = (handA, handB) => {
    if (handA.strength !== handB.strength) return handB.strength - handA.strength
    for (let i = 0; i < 5; i++) {
        if (handA.cardStrengths[i] !== handB.cardStrengths[i]) return handB.cardStrengths[i] - handA.cardStrengths[i]
    }
    return 0
}

const hands = raw.split('\n').slice(0, -1).map(line => new Hand(line))
hands.sort(compareHands).reverse()

console.log(hands.reduce((sum, hand, index) => sum + hand.bid * (index+1), 0))

