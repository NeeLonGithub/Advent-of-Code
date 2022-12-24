// const input = [{name: 'AA', flowRate: 0, tunnels: ['DD', 'II', 'BB']}, {name: 'BB', flowRate: 13, tunnels: ['CC', 'AA']}, {name: 'CC', flowRate: 2, tunnels: ['DD', 'BB']}, {name: 'DD', flowRate: 20, tunnels: ['CC', 'AA', 'EE']}, {name: 'EE', flowRate: 3, tunnels: ['FF', 'DD']}, {name: 'FF', flowRate: 0, tunnels: ['EE', 'GG']}, {name: 'GG', flowRate: 0, tunnels: ['FF', 'HH']}, {name: 'HH', flowRate: 22, tunnels: ['GG']}, {name: 'II', flowRate: 0, tunnels: ['AA', 'JJ']}, {name: 'JJ', flowRate: 21, tunnels: ['II']}]
const input = [{name: 'KR', flowRate: 17, tunnels: ['WA', 'JQ', 'JY', 'KI']}, {name: 'JN', flowRate: 0, tunnels: ['XS', 'JQ']}, {name: 'JY', flowRate: 0, tunnels: ['KR', 'AP']}, {name: 'WE', flowRate: 0, tunnels: ['GY', 'XS']}, {name: 'HW', flowRate: 0, tunnels: ['GP', 'AA']}, {name: 'QS', flowRate: 0, tunnels: ['WW', 'MF']}, {name: 'MF', flowRate: 15, tunnels: ['RJ', 'QS']}, {name: 'IM', flowRate: 0, tunnels: ['WH', 'HS']}, {name: 'RJ', flowRate: 0, tunnels: ['MF', 'PM']}, {name: 'IG', flowRate: 0, tunnels: ['WX', 'ZY']}, {name: 'YL', flowRate: 0, tunnels: ['GY', 'EB']}, {name: 'LI', flowRate: 25, tunnels: ['YS', 'SI']}, {name: 'WW', flowRate: 6, tunnels: ['PJ', 'QS']}, {name: 'QK', flowRate: 0, tunnels: ['MV', 'AU']}, {name: 'AU', flowRate: 20, tunnels: ['QK', 'BT', 'VK']}, {name: 'WH', flowRate: 0, tunnels: ['MV', 'IM']}, {name: 'YS', flowRate: 0, tunnels: ['ZL', 'LI']}, {name: 'FR', flowRate: 0, tunnels: ['XS', 'AA']}, {name: 'NX', flowRate: 0, tunnels: ['KI', 'NG']}, {name: 'OI', flowRate: 5, tunnels: ['SU', 'OX', 'LW', 'JH', 'DK']}, {name: 'YJ', flowRate: 0, tunnels: ['XK', 'XU']}, {name: 'DK', flowRate: 0, tunnels: ['OI', 'IZ']}, {name: 'SU', flowRate: 0, tunnels: ['OI', 'XU']}, {name: 'OH', flowRate: 0, tunnels: ['CX', 'WX']}, {name: 'HS', flowRate: 8, tunnels: ['UY', 'IM', 'WJ', 'XK', 'UC']}, {name: 'UY', flowRate: 0, tunnels: ['HS', 'OX']}, {name: 'AP', flowRate: 0, tunnels: ['JY', 'GY']}, {name: 'JQ', flowRate: 0, tunnels: ['KR', 'JN']}, {name: 'XK', flowRate: 0, tunnels: ['YJ', 'HS']}, {name: 'PM', flowRate: 0, tunnels: ['RJ', 'ZY']}, {name: 'WJ', flowRate: 0, tunnels: ['AA', 'HS']}, {name: 'VK', flowRate: 0, tunnels: ['AU', 'SI']}, {name: 'OX', flowRate: 0, tunnels: ['UY', 'OI']}, {name: 'ZL', flowRate: 0, tunnels: ['YS', 'MV']}, {name: 'LW', flowRate: 0, tunnels: ['TT', 'OI']}, {name: 'TT', flowRate: 0, tunnels: ['LW', 'MV']}, {name: 'PJ', flowRate: 0, tunnels: ['UC', 'WW']}, {name: 'UC', flowRate: 0, tunnels: ['PJ', 'HS']}, {name: 'XU', flowRate: 3, tunnels: ['EB', 'CW', 'SU', 'TL', 'YJ']}, {name: 'XS', flowRate: 4, tunnels: ['IZ', 'CW', 'WE', 'JN', 'FR']}, {name: 'CW', flowRate: 0, tunnels: ['XU', 'XS']}, {name: 'TF', flowRate: 0, tunnels: ['AA', 'TL']}, {name: 'EB', flowRate: 0, tunnels: ['XU', 'YL']}, {name: 'WA', flowRate: 0, tunnels: ['KR', 'BT']}, {name: 'GY', flowRate: 9, tunnels: ['GP', 'AP', 'YL', 'ZO', 'WE']}, {name: 'IZ', flowRate: 0, tunnels: ['DK', 'XS']}, {name: 'KI', flowRate: 0, tunnels: ['NX', 'KR']}, {name: 'AA', flowRate: 0, tunnels: ['HW', 'TF', 'FR', 'JH', 'WJ']}, {name: 'ZO', flowRate: 0, tunnels: ['GY', 'QM']}, {name: 'QM', flowRate: 0, tunnels: ['ZO', 'CX']}, {name: 'SI', flowRate: 0, tunnels: ['LI', 'VK']}, {name: 'BT', flowRate: 0, tunnels: ['AU', 'WA']}, {name: 'BC', flowRate: 0, tunnels: ['CX', 'ZY']}, {name: 'NG', flowRate: 21, tunnels: ['NX']}, {name: 'WX', flowRate: 16, tunnels: ['IG', 'OH']}, {name: 'GP', flowRate: 0, tunnels: ['HW', 'GY']}, {name: 'JH', flowRate: 0, tunnels: ['AA', 'OI']}, {name: 'CX', flowRate: 13, tunnels: ['OH', 'BC', 'QM']}, {name: 'TL', flowRate: 0, tunnels: ['TF', 'XU']}, {name: 'MV', flowRate: 14, tunnels: ['QK', 'ZL', 'WH', 'TT']}, {name: 'ZY', flowRate: 10, tunnels: ['PM', 'BC', 'IG']}]

class Valve {
    constructor({name, flowRate, tunnels}) {
        this.name = name
        this.flowRate = flowRate
        this.tunnelNames = tunnels
        this.tunnels = []
        this.distanceToValve = {}
        this.distanceToValve[name] = 0
    }

    addTunnel(valve) {
        this.tunnels.push(valve)
        this.distanceToValve[valve.name] = 1
    }

    fillDistances() {
        let updated = false
        this.tunnels.forEach((valve) => {
            Object.entries(valve.distanceToValve).forEach(([tunnelName, tunnelDistance]) => {
                const distance = this.distanceToValve[tunnelName] === undefined ? tunnelDistance + 1 : Math.min(tunnelDistance + 1, this.distanceToValve[tunnelName])
                if (this.distanceToValve[tunnelName] === undefined || distance < this.distanceToValve[tunnelName]) updated = true
                this.distanceToValve[tunnelName] = distance
                allValves.find((v) => v.name === tunnelName).distanceToValve[this.name] = distance
            })
        })
        return updated
    }

    removeDistancesOtherThan(valves) {
        const allTunnels = Object.keys(this.distanceToValve)
        allTunnels.forEach((tunnelName) => {
            if(!valves.some((valve) => valve.name === tunnelName)) {
                delete this.distanceToValve[tunnelName]
            }
        })
    }
}

const allValves = input.map((input) => new Valve(input))

allValves.forEach((valve) => {
    valve.tunnelNames.forEach((tunnelName) => {
        const foundValve = allValves.find((valve) => valve.name === tunnelName)
        valve.addTunnel(foundValve)
    })
})

let updated = true
while (updated) {
    updated = false
    allValves.forEach((valve) => {
        if(valve.fillDistances()) {
            updated = true
        }
    })
}

const start = allValves.find((valve) => valve.name === 'AA')
// const valves = [...allValves.filter((valve) => valve.flowRate > 0)]
const valves = [start, ...allValves.filter((valve) => valve.flowRate > 0)]

valves.forEach((valve) => valve.removeDistancesOtherThan(valves))

const visitedStates = []

class Solver {
    constructor({remainingTime, score, currentValve, openedValves}) {
        this.remainingTime = remainingTime
        this.score = score
        this.currentValve = currentValve
        this.openedValves = [...openedValves]
        this.potentialScore = this.getRemainingPoints() + this.score
        this.actions = []
    }

    getState() {
        return {
            result: this.openedValves.sort().join('-') + this.currentValve.name + this.score,
            time: this.remainingTime
        }
    }

    setRemainingPoints() {
        this.potentialScore = this.getRemainingPoints() + this.score
    }

    getRemainingPoints() {
        const potentialValves = [...valves]
            .sort((a, b) => b.flowRate - a.flowRate)
            .filter((valve) => !this.openedValves.includes(valve.name))
        let potentialTime = this.remainingTime
        let potentialPoints = 0
        while(potentialTime > 0 && potentialValves.length) {
            potentialPoints += potentialValves.shift().flowRate * potentialTime
            potentialTime -= 2
        }
        return potentialPoints
    }

    copy() {
        const newSolver = new Solver(this)
        newSolver.actions = [...this.actions]
        return newSolver
    }

    openValve() {
        this.actions.push(`Opened valve ${this.currentValve.name} with ${this.remainingTime} time remaining`)
        this.openedValves.push(this.currentValve.name)
        this.score += this.currentValve.flowRate * this.remainingTime
        this.remainingTime--
        this.setRemainingPoints()
    }

    moveToValve(valve) {
        this.actions.push(`Walked ${this.currentValve.distanceToValve[valve.name]} steps to ${valve.name}`)
        this.remainingTime -= this.currentValve.distanceToValve[valve.name]
        this.currentValve = valve
        this.setRemainingPoints()
    }

    hasOpened(valveName) {
        return this.openedValves.includes(valveName)
    }

    getNewSolvers() {
        const newSolvers = []
        if(!this.hasOpened(this.currentValve.name)) {
            const solver = this.copy()
            solver.openValve()
            newSolvers.push(solver)
        }
        Object.keys(this.currentValve.distanceToValve)
            .filter((valveName) => !this.hasOpened(valveName))
            .forEach((valveName) => {
                const valve = valves.find(valve => valve.name === valveName)
                const solver = this.copy()
                solver.moveToValve(valve)
                newSolvers.push(solver)
        })
        return newSolvers
    }

    compare(solver) {
        // if (this.score === solver.score) return solver.remainingTime - this.remainingTime
        // return solver.score - this.score
        if (this.remainingTime === solver.remainingTime) return solver.score - this.score
        return solver.remainingTime - this.remainingTime
    }

    doBetterSolversExist() {
        const state = this.getState()
        if (visitedStates.some((visited) => visited.result === state.result && visited.time >= state.time)) return true
        return solvers.filter((solver) => solver.remainingTime >= this.remainingTime).some((solver) => solver.score > this.potentialScore)
    }
}

// just have A open already so it can be ignored
const solvers = []
const getBestSolverForRemainingTime = (remainingTime) => {
    const startSolver = new Solver({remainingTime, openedValves: [], currentValve: start, score: 0})
    startSolver.openedValves.push('AA')
    solvers.push(startSolver)

    let bestSolver = undefined

    let count = 1
    console.time('aoc16')
    console.time(count.toString())

    while (solvers.length > 0) {
        const index = solvers.findIndex((solver) => solver.remainingTime > 0)
        const [solver] = solvers.splice(index, 1)

        solver.getNewSolvers().forEach(newSolver => {
            if (!newSolver.doBetterSolversExist()) {
                solvers.unshift(newSolver)
                visitedStates.push(newSolver.getState())
            }
        })

        if (solvers.length === 0) continue
        solvers.sort((a, b) => a.compare(b))
        if (solvers[0].score > (bestSolver?.score || 0)) {
            bestSolver = solvers[0]
            console.log(`bestScore: ${bestSolver.score}, remaining solvers: ${solvers.length}, average solver time: ${solvers.reduce((sum, s) => sum + s.remainingTime, 0) / solvers.length}`);
            console.timeEnd(count.toString())
            count++
            console.time(count.toString())
        }
        while (solvers[0].remainingTime === 0) solvers.shift()
        // console.log(visitedStates)
    }
    console.timeEnd(count.toString())

    return bestSolver
}
console.timeEnd('aoc16')
const bestSolver = getBestSolverForRemainingTime(25)
bestSolver.actions.forEach(action => console.log(action))

console.log(bestSolver.openedValves)
console.log(bestSolver.score)
