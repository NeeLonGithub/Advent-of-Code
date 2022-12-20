const prompt = require('prompt-sync')({sigint: true});

// const input = [ {id: 1, costs: [ [4, 0, 0], [2, 0, 0], [3, 14, 0], [2, 0, 7] ]}, {id: 2, costs: [ [2, 0, 0], [3, 0, 0], [3, 8, 0], [3, 0, 12] ]} ]
const input = [ {id: 1, costs: [ [4, 0, 0], [4, 0, 0], [3, 19, 0], [4, 0, 15] ]}, {id: 2, costs: [ [4, 0, 0], [3, 0, 0], [2, 20, 0], [2, 0, 9] ]}, {id: 3, costs: [ [4, 0, 0], [3, 0, 0], [4, 19, 0], [4, 0, 12] ]}, {id: 4, costs: [ [3, 0, 0], [3, 0, 0], [3, 17, 0], [2, 0, 13] ]}, {id: 5, costs: [ [2, 0, 0], [4, 0, 0], [4, 16, 0], [3, 0, 13] ]}, {id: 6, costs: [ [4, 0, 0], [4, 0, 0], [4, 16, 0], [2, 0, 15] ]}, {id: 7, costs: [ [3, 0, 0], [4, 0, 0], [4, 6, 0], [3, 0, 16] ]}, {id: 8, costs: [ [2, 0, 0], [3, 0, 0], [3, 11, 0], [3, 0, 14] ]}, {id: 9, costs: [ [3, 0, 0], [3, 0, 0], [2, 11, 0], [2, 0, 19] ]}, {id: 10, costs: [ [3, 0, 0], [3, 0, 0], [2, 19, 0], [2, 0, 12] ]}, {id: 11, costs: [ [4, 0, 0], [4, 0, 0], [4, 7, 0], [2, 0, 16] ]}, {id: 12, costs: [ [2, 0, 0], [2, 0, 0], [2, 7, 0], [2, 0, 14] ]}, {id: 13, costs: [ [2, 0, 0], [4, 0, 0], [4, 11, 0], [3, 0, 8] ]}, {id: 14, costs: [ [4, 0, 0], [4, 0, 0], [3, 14, 0], [4, 0, 8] ]}, {id: 15, costs: [ [3, 0, 0], [4, 0, 0], [3, 16, 0], [3, 0, 14] ]}, {id: 16, costs: [ [4, 0, 0], [3, 0, 0], [3, 18, 0], [4, 0, 8] ]}, {id: 17, costs: [ [4, 0, 0], [3, 0, 0], [3, 11, 0], [4, 0, 7] ]}, {id: 18, costs: [ [4, 0, 0], [4, 0, 0], [2, 8, 0], [3, 0, 9] ]}, {id: 19, costs: [ [2, 0, 0], [4, 0, 0], [4, 13, 0], [3, 0, 11] ]}, {id: 20, costs: [ [4, 0, 0], [4, 0, 0], [2, 17, 0], [3, 0, 11] ]}, {id: 21, costs: [ [3, 0, 0], [3, 0, 0], [2, 20, 0], [3, 0, 18] ]}, {id: 22, costs: [ [3, 0, 0], [4, 0, 0], [3, 20, 0], [3, 0, 14] ]}, {id: 23, costs: [ [4, 0, 0], [3, 0, 0], [2, 7, 0], [3, 0, 8] ]}, {id: 24, costs: [ [4, 0, 0], [3, 0, 0], [3, 20, 0], [2, 0, 19] ]}, {id: 25, costs: [ [2, 0, 0], [4, 0, 0], [2, 20, 0], [3, 0, 15] ]}, {id: 26, costs: [ [3, 0, 0], [3, 0, 0], [3, 19, 0], [3, 0, 17] ]}, {id: 27, costs: [ [4, 0, 0], [4, 0, 0], [2, 9, 0], [3, 0, 19] ]}, {id: 28, costs: [ [3, 0, 0], [3, 0, 0], [2, 19, 0], [2, 0, 20] ]}, {id: 29, costs: [ [4, 0, 0], [4, 0, 0], [2, 10, 0], [3, 0, 14] ]}, {id: 30, costs: [ [4, 0, 0], [4, 0, 0], [4, 12, 0], [4, 0, 19] ]} ]

class Blueprint {
    constructor(input) {
        this.id = input.id
        this.costs = input.costs
    }
}

class Factory {
    constructor(blueprint) {
        this.blueprint = blueprint
        this.maxCosts = this.getMaxCosts(blueprint)
        this.robots = [1, 0, 0, 0]
        this.newRobots = [...this.robots]
        this.resources = [0, 0, 0, 0]
        this.actions = []
    }

    getMaxCosts(blueprint) {
        const maxCosts = []
        const costs = blueprint.costs
        maxCosts[0] = Math.max(costs[0][0], costs[1][0], costs[2][0], costs[3][0])
        maxCosts[1] = Math.max(costs[0][1], costs[1][1], costs[2][1], costs[3][1])
        maxCosts[2] = Math.max(costs[0][2], costs[1][2], costs[2][2], costs[3][2])
        return maxCosts
    }

    collectResources() {
        const oldResources = [...this.resources]

        this.resources[0] += this.robots[0]
        this.resources[1] += this.robots[1]
        this.resources[2] += this.robots[2]
        this.resources[3] += this.robots[3]

        this.actions.push(`Collected resources from ${oldResources} to ${this.resources}`)
        this.actions.push(`robots build from ${this.robots} to ${this.newRobots}`)
        this.robots = [...this.newRobots]
    }

    buildRobot(robot) {
        switch (robot) {
            case 0: break
            case 1: {
                this.buildOreRobot()
                this.actions.push(`Spend ${this.blueprint.costs[0]} to start building a ore-collecting robot`)
                break
            }
            case 2: {
                this.buildClayRobot()
                this.actions.push(`Spend ${this.blueprint.costs[1]} to start building a clay-collecting robot`)
                break
            }
            case 3: {
                this.buildObsidianRobot()
                this.actions.push(`Spend ${this.blueprint.costs[2]} to start building a obsidian-collecting robot`)
                break
            }
            case 4: {
                this.buildGeodeRobot()
                this.actions.push(`Spend ${this.blueprint.costs[3]} to start building a geode-collecting robot`)
                break
            }
        }
    }

    canBuildOreRobot() {
        return this.robots[0] < this.maxCosts[0] && this.resources[0] >= this.blueprint.costs[0][0]
    }
    canBuildClayRobot() {
        return this.robots[1] < this.maxCosts[1] && this.resources[0] >= this.blueprint.costs[1][0]
    }
    canBuildObsidianRobot() {
        return this.robots[2] < this.maxCosts[2] && this.resources[0] >= this.blueprint.costs[2][0] && this.resources[1] >= this.blueprint.costs[2][1]
    }
    canBuildGeodeRobot() {
        return this.resources[0] >= this.blueprint.costs[3][0] && this.resources[2] >= this.blueprint.costs[3][2]
    }

    buildOreRobot() {
        if (this.canBuildOreRobot()) {
            this.resources[0] -= this.blueprint.costs[0][0]
            this.newRobots[0]++
            return true
        }
        return false
    }
    buildClayRobot() {
        if (this.canBuildClayRobot()) {
            this.resources[0] -= this.blueprint.costs[1][0]
            this.newRobots[1]++
            return true
        }
        return false
    }
    buildObsidianRobot() {
        if (this.canBuildObsidianRobot()) {
            this.resources[0] -= this.blueprint.costs[2][0]
            this.resources[1] -= this.blueprint.costs[2][1]
            this.newRobots[2]++
            return true
        }
        return false
    }
    buildGeodeRobot() {
        if (this.canBuildGeodeRobot()) {
            this.resources[0] -= this.blueprint.costs[3][0]
            this.resources[2] -= this.blueprint.costs[3][2]
            this.newRobots[3]++
            return true
        }
        return false
    }
}

const gameBlueprint = (blueprint) => {
    const factory = new Factory(blueprint)
    console.log(`Robot costs:\nOre: ${blueprint.costs[0][0]} ore\nClay: ${blueprint.costs[1][0]} ore\nObsidian: ${blueprint.costs[2][0]} ore, ${blueprint.costs[2][1]} clay\nGeode cracker: ${blueprint.costs[3][0]} ore, ${blueprint.costs[3][2]} obsidian`)
    for (let i = 1; i <= 24; i++) {
        factory.collectResources()
        console.log(`M ${i}, resources: ${factory.resources}, robots: ${factory.robots}`)
        const oreOption =  factory.canBuildOreRobot() ? '[1] ore      ' : '          '
        const clayOption = factory.canBuildClayRobot() ? '[2] clay     ' : '          '
        const obsidianOption = factory.canBuildObsidianRobot() ? '[3] obsidian ' : '          '
        const geodeOption = factory.canBuildGeodeRobot() ? '[4] geode    ' : '          '
        if (factory.canBuildOreRobot() || factory.canBuildClayRobot() || factory.canBuildObsidianRobot() || factory.canBuildGeodeRobot()) {
            let input = prompt(`${oreOption}${clayOption}${obsidianOption}${geodeOption}\n`)
            if(!input) input = 0
            factory.buildRobot(+input)
        }
    }

    console.log(`id: ${blueprint.id}  geodes: ${factory.resources[3]}`)
    return blueprint.id * factory.resources[3]
}

let score = 0
input.forEach((inputLine, index) => {
    const blueprint = new Blueprint(inputLine)
    let gameScore
    let done = '0'
    while (done !== '1') {
        gameScore = gameBlueprint(blueprint)

        done = prompt(`Score ${gameScore}: [1] done     [0] retry\n`)
    }
    score += gameScore
})

console.log(score);
// 1058 is too low
