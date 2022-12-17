const input = [{name: 'AA', flowRate: 0, tunnels: ['DD', 'II', 'BB']}, {name: 'BB', flowRate: 13, tunnels: ['CC', 'AA']}, {name: 'CC', flowRate: 2, tunnels: ['DD', 'BB']}, {name: 'DD', flowRate: 20, tunnels: ['CC', 'AA', 'EE']}, {name: 'EE', flowRate: 3, tunnels: ['FF', 'DD']}, {name: 'FF', flowRate: 0, tunnels: ['EE', 'GG']}, {name: 'GG', flowRate: 0, tunnels: ['FF', 'HH']}, {name: 'HH', flowRate: 22, tunnels: ['GG']}, {name: 'II', flowRate: 0, tunnels: ['AA', 'JJ']}, {name: 'JJ', flowRate: 21, tunnels: ['II']}]
// const input = [{name: 'KR', flowRate: 17, tunnels: ['WA', 'JQ', 'JY', 'KI']}, {name: 'JN', flowRate: 0, tunnels: ['XS', 'JQ']}, {name: 'JY', flowRate: 0, tunnels: ['KR', 'AP']}, {name: 'WE', flowRate: 0, tunnels: ['GY', 'XS']}, {name: 'HW', flowRate: 0, tunnels: ['GP', 'AA']}, {name: 'QS', flowRate: 0, tunnels: ['WW', 'MF']}, {name: 'MF', flowRate: 15, tunnels: ['RJ', 'QS']}, {name: 'IM', flowRate: 0, tunnels: ['WH', 'HS']}, {name: 'RJ', flowRate: 0, tunnels: ['MF', 'PM']}, {name: 'IG', flowRate: 0, tunnels: ['WX', 'ZY']}, {name: 'YL', flowRate: 0, tunnels: ['GY', 'EB']}, {name: 'LI', flowRate: 25, tunnels: ['YS', 'SI']}, {name: 'WW', flowRate: 6, tunnels: ['PJ', 'QS']}, {name: 'QK', flowRate: 0, tunnels: ['MV', 'AU']}, {name: 'AU', flowRate: 20, tunnels: ['QK', 'BT', 'VK']}, {name: 'WH', flowRate: 0, tunnels: ['MV', 'IM']}, {name: 'YS', flowRate: 0, tunnels: ['ZL', 'LI']}, {name: 'FR', flowRate: 0, tunnels: ['XS', 'AA']}, {name: 'NX', flowRate: 0, tunnels: ['KI', 'NG']}, {name: 'OI', flowRate: 5, tunnels: ['SU', 'OX', 'LW', 'JH', 'DK']}, {name: 'YJ', flowRate: 0, tunnels: ['XK', 'XU']}, {name: 'DK', flowRate: 0, tunnels: ['OI', 'IZ']}, {name: 'SU', flowRate: 0, tunnels: ['OI', 'XU']}, {name: 'OH', flowRate: 0, tunnels: ['CX', 'WX']}, {name: 'HS', flowRate: 8, tunnels: ['UY', 'IM', 'WJ', 'XK', 'UC']}, {name: 'UY', flowRate: 0, tunnels: ['HS', 'OX']}, {name: 'AP', flowRate: 0, tunnels: ['JY', 'GY']}, {name: 'JQ', flowRate: 0, tunnels: ['KR', 'JN']}, {name: 'XK', flowRate: 0, tunnels: ['YJ', 'HS']}, {name: 'PM', flowRate: 0, tunnels: ['RJ', 'ZY']}, {name: 'WJ', flowRate: 0, tunnels: ['AA', 'HS']}, {name: 'VK', flowRate: 0, tunnels: ['AU', 'SI']}, {name: 'OX', flowRate: 0, tunnels: ['UY', 'OI']}, {name: 'ZL', flowRate: 0, tunnels: ['YS', 'MV']}, {name: 'LW', flowRate: 0, tunnels: ['TT', 'OI']}, {name: 'TT', flowRate: 0, tunnels: ['LW', 'MV']}, {name: 'PJ', flowRate: 0, tunnels: ['UC', 'WW']}, {name: 'UC', flowRate: 0, tunnels: ['PJ', 'HS']}, {name: 'XU', flowRate: 3, tunnels: ['EB', 'CW', 'SU', 'TL', 'YJ']}, {name: 'XS', flowRate: 4, tunnels: ['IZ', 'CW', 'WE', 'JN', 'FR']}, {name: 'CW', flowRate: 0, tunnels: ['XU', 'XS']}, {name: 'TF', flowRate: 0, tunnels: ['AA', 'TL']}, {name: 'EB', flowRate: 0, tunnels: ['XU', 'YL']}, {name: 'WA', flowRate: 0, tunnels: ['KR', 'BT']}, {name: 'GY', flowRate: 9, tunnels: ['GP', 'AP', 'YL', 'ZO', 'WE']}, {name: 'IZ', flowRate: 0, tunnels: ['DK', 'XS']}, {name: 'KI', flowRate: 0, tunnels: ['NX', 'KR']}, {name: 'AA', flowRate: 0, tunnels: ['HW', 'TF', 'FR', 'JH', 'WJ']}, {name: 'ZO', flowRate: 0, tunnels: ['GY', 'QM']}, {name: 'QM', flowRate: 0, tunnels: ['ZO', 'CX']}, {name: 'SI', flowRate: 0, tunnels: ['LI', 'VK']}, {name: 'BT', flowRate: 0, tunnels: ['AU', 'WA']}, {name: 'BC', flowRate: 0, tunnels: ['CX', 'ZY']}, {name: 'NG', flowRate: 21, tunnels: ['NX']}, {name: 'WX', flowRate: 16, tunnels: ['IG', 'OH']}, {name: 'GP', flowRate: 0, tunnels: ['HW', 'GY']}, {name: 'JH', flowRate: 0, tunnels: ['AA', 'OI']}, {name: 'CX', flowRate: 13, tunnels: ['OH', 'BC', 'QM']}, {name: 'TL', flowRate: 0, tunnels: ['TF', 'XU']}, {name: 'MV', flowRate: 14, tunnels: ['QK', 'ZL', 'WH', 'TT']}, {name: 'ZY', flowRate: 10, tunnels: ['PM', 'BC', 'IG']}]

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

    cleanDistancesFor(valves) {
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

valves.forEach((valve) => valve.cleanDistancesFor(valves))

const getValve = (name) => valves.find((v) => v.name === name)

const known = new Map()

for (let i = 0; i <= 30; i++) {
    valves.forEach((valve) => {
        const options = []
        valves.forEach((otherValve) => {
            const walkTime = valve.distanceToValve[otherValve.name] + 1
            if (walkTime < i) {
                const remainingTime = i - walkTime
                let score = 0
                const route = []
                if(known.has(valve.name+remainingTime)) {
                    const previousState = known.get(valve.name+remainingTime)
                    score += previousState.score
                    previousState.route.forEach((name) => {
                        route.push(name)
                        score += getValve(name).flowRate * walkTime
                    })
// Voor 5 ben ik van A naar D aan het lopen en daarna van A naar B
// Maar dan moet ik van D naar B lopen
                }
                if(!route.includes(otherValve.name) && otherValve.flowRate > 0) {
                    route.push(otherValve.name)
                    score += otherValve.flowRate
                }
                options.push({score, route})
            }
        })
        if(valve.name === 'AA') {
            console.log(i)
            console.log(options)
        }
        const best = options.reduce((best, option) => {
            if (best.score > option.score) return best
            if (option.score > best.score) return option
            const bestFlow = getValve(best.route[best.route.length-1])?.flowRate || -1
            const optionFlow = getValve(option.route[option.route.length-1])?.flowRate || -1
            if (bestFlow > optionFlow) return best
            return option
        }, {score: 0, route: []})
        known.set(valve.name+i, best)
    })
}

console.log(known);
