// const input = [['addx', 15], ['addx', -11], ['addx', 6], ['addx', -3], ['addx', 5], ['addx', -1], ['addx', -8], ['addx', 13], ['addx', 4], ['noop', undefined], ['addx', -1], ['addx', 5], ['addx', -1], ['addx', 5], ['addx', -1], ['addx', 5], ['addx', -1], ['addx', 5], ['addx', -1], ['addx', -35], ['addx', 1], ['addx', 24], ['addx', -19], ['addx', 1], ['addx', 16], ['addx', -11], ['noop', undefined], ['noop', undefined], ['addx', 21], ['addx', -15], ['noop', undefined], ['noop', undefined], ['addx', -3], ['addx', 9], ['addx', 1], ['addx', -3], ['addx', 8], ['addx', 1], ['addx', 5], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', -36], ['noop', undefined], ['addx', 1], ['addx', 7], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', 2], ['addx', 6], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', 1], ['noop', undefined], ['noop', undefined], ['addx', 7], ['addx', 1], ['noop', undefined], ['addx', -13], ['addx', 13], ['addx', 7], ['noop', undefined], ['addx', 1], ['addx', -33], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', 2], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', 8], ['noop', undefined], ['addx', -1], ['addx', 2], ['addx', 1], ['noop', undefined], ['addx', 17], ['addx', -9], ['addx', 1], ['addx', 1], ['addx', -3], ['addx', 11], ['noop', undefined], ['noop', undefined], ['addx', 1], ['noop', undefined], ['addx', 1], ['noop', undefined], ['noop', undefined], ['addx', -13], ['addx', -19], ['addx', 1], ['addx', 3], ['addx', 26], ['addx', -30], ['addx', 12], ['addx', -1], ['addx', 3], ['addx', 1], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', -9], ['addx', 18], ['addx', 1], ['addx', 2], ['noop', undefined], ['noop', undefined], ['addx', 9], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', -1], ['addx', 2], ['addx', -37], ['addx', 1], ['addx', 3], ['noop', undefined], ['addx', 15], ['addx', -21], ['addx', 22], ['addx', -6], ['addx', 1], ['noop', undefined], ['addx', 2], ['addx', 1], ['noop', undefined], ['addx', -10], ['noop', undefined], ['noop', undefined], ['addx', 20], ['addx', 1], ['addx', 2], ['addx', 2], ['addx', -6], ['addx', -11], ['noop', undefined], ['noop', undefined], ['noop', undefined]]
const input = [['noop', undefined], ['addx', 7], ['addx', -1], ['addx', -1], ['addx', 5], ['noop', undefined], ['noop', undefined], ['addx', 1], ['addx', 3], ['addx', 2], ['noop', undefined], ['addx', 2], ['addx', 5], ['addx', 2], ['addx', 10], ['addx', -9], ['addx', 4], ['noop', undefined], ['noop', undefined], ['noop', undefined], ['addx', 3], ['addx', 5], ['addx', -40], ['addx', 26], ['addx', -23], ['addx', 2], ['addx', 5], ['addx', 26], ['addx', -35], ['addx', 12], ['addx', 2], ['addx', 17], ['addx', -10], ['addx', 3], ['noop', undefined], ['addx', 2], ['addx', 3], ['noop', undefined], ['addx', 2], ['addx', 3], ['noop', undefined], ['addx', 2], ['addx', 2], ['addx', -39], ['noop', undefined], ['addx', 15], ['addx', -12], ['addx', 2], ['addx', 10], ['noop', undefined], ['addx', -1], ['addx', -2], ['noop', undefined], ['addx', 5], ['noop', undefined], ['addx', 5], ['noop', undefined], ['noop', undefined], ['addx', 1], ['addx', 4], ['addx', -25], ['addx', 26], ['addx', 2], ['addx', 5], ['addx', 2], ['noop', undefined], ['addx', -3], ['addx', -32], ['addx', 1], ['addx', 4], ['addx', -2], ['addx', 3], ['noop', undefined], ['noop', undefined], ['addx', 3], ['noop', undefined], ['addx', 6], ['addx', -17], ['addx', 27], ['addx', -7], ['addx', 5], ['addx', 2], ['addx', 3], ['addx', -2], ['addx', 4], ['noop', undefined], ['noop', undefined], ['addx', 5], ['addx', 2], ['addx', -39], ['noop', undefined], ['noop', undefined], ['addx', 2], ['addx', 5], ['addx', 3], ['addx', -2], ['addx', 2], ['addx', 11], ['addx', -4], ['addx', -5], ['noop', undefined], ['addx', 10], ['addx', -18], ['addx', 19], ['addx', 2], ['addx', 5], ['addx', 2], ['addx', 2], ['addx', 3], ['addx', -2], ['addx', 2], ['addx', -37], ['noop', undefined], ['addx', 5], ['addx', 4], ['addx', -1], ['noop', undefined], ['addx', 4], ['noop', undefined], ['noop', undefined], ['addx', 1], ['addx', 4], ['noop', undefined], ['addx', 1], ['addx', 2], ['noop', undefined], ['addx', 3], ['addx', 5], ['noop', undefined], ['addx', -3], ['addx', 5], ['addx', 5], ['addx', 2], ['addx', 3], ['noop', undefined], ['addx', -32], ['noop', undefined]]

class Cpu {
    constructor(commands) {
        this.commands = commands
        this.commandsNext = 0
        this.value = 1
        this.nextValue = 1
        this.cycle = 0
        this.busy = 0
    }

    startTick() {
        if (this.busy > 0) {
            return
        }
        
        const [command, amount] = this.commands[this.commandsNext++]
        if (command === 'noop' || undefined) {
            this.busy = 1
        }
        else if (command === 'addx') {
            this.nextValue = this.value + amount
            this.busy = 2
        }
    }

    endTick() {
        this.busy--

        if (this.busy === 0) {
            this.value = this.nextValue
        }

        this.cycle++
    }

    getSignal() {
        return this.cycle * this.value
    }

    hasSpriteOn(position) {
        return Math.abs(position - this.value) <= 1
    }
}

class Crt {
    constructor(cpu) {
        this.cpu = cpu
        this.position = 0
        this.drawing = [
            '........................................',
            '........................................',
            '........................................',
            '........................................',
            '........................................',
            '........................................'
        ]
    }

    tick() {
        const x = this.position % 40
        if (this.cpu.hasSpriteOn(x)) {
            const oldLine = this.drawing[Math.floor(this.position / 40)]
            const newLine = oldLine.substring(0, x) + '#' + oldLine.substring(x + 1)
            this.drawing[Math.floor(this.position / 40)] = newLine
        }
        this.position++
    }
}

const cpu = new Cpu(input)
const crt = new Crt(cpu)

const signalChecks = [20, 60, 100, 140, 180, 220]
let score = 0

for (let i = 0; i < 220; i++) {
    // console.log(`i: ${i}`);
    // console.log(`crt position: ${crt.position}`);
    // console.log(`cpu value: ${cpu.value}`);
    // console.log(`cpu tick`);
    cpu.startTick()
    // console.log(`crt position: ${crt.position}`);
    // console.log(`cpu value: ${cpu.value}`);
    // console.log(`crt tick`);
    crt.tick()
    // console.log(`crt position: ${crt.position}`);
    // console.log(`cpu value: ${cpu.value}`);
    cpu.endTick()
    if (signalChecks.includes(cpu.cycle)) score += cpu.getSignal()
}

console.log(score);
console.log(crt.drawing);
