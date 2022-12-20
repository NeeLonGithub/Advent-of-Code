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
        this.robotValues = this.getRobotValues(blueprint)
        this.maxCosts = this.getMaxCosts(blueprint)
        this.robots = [1, 0, 0, 0]
        this.newRobots = [...this.robots]
        this.resources = [0, 0, 0, 0]
        this.timeRemaining = 32 //24
        this.stopTryingOre = false
        this.stopTryingClay = false
        this.stopTryingObsidian = false
        this.actions = [`== Minute ${32 - this.timeRemaining + 1} ==`]
    }

    copy() {
        const factory = new Factory(this.blueprint)
        factory.robots = [...this.robots]
        factory.newRobots = [...this.robots]
        factory.resources = [...this.resources]
        factory.timeRemaining = this.timeRemaining
        factory.stopTryingOre = this.stopTryingOre
        factory.stopTryingClay = this.stopTryingClay
        factory.stopTryingObsidian = this.stopTryingObsidian
        factory.actions = [...this.actions]
        return factory
    }

    getRobotValues(blueprint) {
        const robotValues = []
        const costs = blueprint.costs
        robotValues[0] = costs[0][0]
        robotValues[1] = costs[1][0]
        robotValues[2] = costs[2][0] + costs[2][1] * robotValues[1]
        robotValues[3] = costs[3][0] + costs[3][2] * robotValues[2]
        return robotValues
    }

    getMaxCosts(blueprint) {
        const maxCosts = []
        const costs = blueprint.costs
        maxCosts[0] = Math.max(costs[0][0], costs[1][0], costs[2][0], costs[3][0])
        maxCosts[1] = Math.max(costs[0][1], costs[1][1], costs[2][1], costs[3][1])
        maxCosts[2] = Math.max(costs[0][2], costs[1][2], costs[2][2], costs[3][2])
        return maxCosts
    }

    getScore() {
        const resourcesValue = this.resources[0] +
            this.resources[1] * this.robotValues[1] +
            this.resources[2] * this.robotValues[2] +
            this.resources[3] * this.robotValues[3]
        const robotsValue = this.newRobots[0] * this.robotValues[0] +
            this.newRobots[1] * this.robotValues[1] +
            this.newRobots[2] * this.robotValues[2] +
            this.newRobots[3] * this.robotValues[3]
        return resourcesValue + robotsValue
    }
    collectResources() {
        const oldResources = [...this.resources]
        if (this.timeRemaining > 0) {
            this.resources[0] += this.robots[0]
            this.resources[1] += this.robots[1]
            this.resources[2] += this.robots[2]
            this.resources[3] += this.robots[3]
            this.timeRemaining--
        }
        this.actions.push(`Collected resources from ${oldResources} to ${this.resources}`)
        this.actions.push(`robots build from ${this.robots} to ${this.newRobots}`)
        this.robots = [...this.newRobots]
        return this.resources[3];
    }

    resetHolders() {
        this.stopTryingOre = false
        this.stopTryingClay = false
        this.stopTryingObsidian = false
    }

    buildRobots() {
        if (this.timeRemaining <= 0) return []
        const newFactories = []
        this.actions.push(`\n== Minute ${32 - this.timeRemaining + 1} ==`)

        const oreRoute = this.copy()
        const clayRoute = this.copy()
        const obsidianRoute = this.copy()
        const geodeRoute = this.copy()

        if(geodeRoute.buildGeodeRobot()) {
            geodeRoute.actions.push(`Spend ${this.blueprint.costs[3]} to start building a geode-collecting robot`)
            newFactories.push(geodeRoute)
        }
        if(this.robots[2] < this.maxCosts[2] && obsidianRoute.buildObsidianRobot()) {
            obsidianRoute.actions.push(`Spend ${this.blueprint.costs[2]} to start building a obsidian-collecting robot`)
            newFactories.push(obsidianRoute)
        }
        if(this.robots[1] < this.maxCosts[1] && clayRoute.buildClayRobot()) {
            clayRoute.actions.push(`Spend ${this.blueprint.costs[1]} to start building a clay-collecting robot`)
            newFactories.push(clayRoute)
        }
        if(this.robots[0] < this.maxCosts[0] &&oreRoute.buildOreRobot()) {
            oreRoute.actions.push(`Spend ${this.blueprint.costs[0]} to start building a ore-collecting robot`)
            newFactories.push(oreRoute)
        }

        if (this.canBuildGeodeRobot() //||
            // this.hasTooMuchOre() //||
            // this.robots[1] === 0 && this.canBuildClayRobot() ||
            // this.robots[2] === 0 && this.canBuildObsidianRobot()
        ) {
        } else {
            const waitRoute = this.copy()
            if (waitRoute.canBuildOreRobot()) waitRoute.stopTryingOre = true
            if (waitRoute.canBuildClayRobot()) waitRoute.stopTryingClay = true
            if (waitRoute.canBuildObsidianRobot()) waitRoute.stopTryingObsidian = true
            newFactories.push(waitRoute)
        }

        return newFactories
    }

    canBuildOreRobot() {
        return this.resources[0] >= this.blueprint.costs[0][0]
    }
    canBuildClayRobot() {
        return this.resources[0] >= this.blueprint.costs[1][0]
    }
    canBuildObsidianRobot() {
        return this.resources[0] >= this.blueprint.costs[2][0] && this.resources[1] >= this.blueprint.costs[2][1]
    }
    canBuildGeodeRobot() {
        return this.resources[0] >= this.blueprint.costs[3][0] && this.resources[2] >= this.blueprint.costs[3][2]
    }

    buildOreRobot() {
        if (!this.stopTryingOre && this.canBuildOreRobot()) {
            this.resources[0] -= this.blueprint.costs[0][0]
            this.newRobots[0]++
            this.resetHolders()
            return true
        }
        return false
    }
    buildClayRobot() {
        if (!this.stopTryingClay && this.canBuildClayRobot()) {
            this.resources[0] -= this.blueprint.costs[1][0]
            this.newRobots[1]++
            this.resetHolders()
            return true
        }
        return false
    }
    buildObsidianRobot() {
        if (!this.stopTryingObsidian && this.canBuildObsidianRobot()) {
            this.resources[0] -= this.blueprint.costs[2][0]
            this.resources[1] -= this.blueprint.costs[2][1]
            this.newRobots[2]++
            this.resetHolders()
            return true
        }
        return false
    }
    buildGeodeRobot() {
        if (this.canBuildGeodeRobot()) {
            this.resources[0] -= this.blueprint.costs[3][0]
            this.resources[2] -= this.blueprint.costs[3][2]
            this.newRobots[3]++
            this.resetHolders()
            return true
        }
        return false
    }
}

let bestFactory
const calculateBlueprint = (blueprint) => {
    let factories = [new Factory(blueprint)]

    let maxGeodes = 0
    let iterations = 0
    while (factories.length > 0) {
        factories.sort((a, b) => {
            if (b.timeRemaining === a.timeRemaining) return b.getScore() - a.getScore()
            return b.timeRemaining - a.timeRemaining
        })
        // console.log(`geodes: ${maxGeodes}, routes to check: ${factories.length}, current time left: ${factories[0].timeRemaining}`);
        // if (iterations++ > 1000 && factories.length > 5000) factories.splice(factories.length / 2)
        if (factories.every(factory => factory.timeRemaining === 32 - iterations)) {
            if (iterations++ >= 16 && factories.length > 1000) factories.splice(factories.length / 4)
        }

        const factory = factories.shift()

        const geodes = factory.collectResources()
        if (geodes >= maxGeodes) {
            bestFactory = factory
            maxGeodes = geodes
        }
        const newFactories = factory.buildRobots()
        factories.push(...newFactories)
    }

    console.log(`Blueprint ${blueprint.id}: ${maxGeodes} geodes`)

    // return bestFactory.blueprint.id * maxGeodes
    return maxGeodes
}

let score = 1
input.slice(0,3).forEach((inputLine, index) => {
    score *= calculateBlueprint(new Blueprint(inputLine))
})

console.log(score);
// 1058 is too low
