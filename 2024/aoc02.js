import fs from 'fs'

// const raw = fs.readFileSync('2024/aoc02.example', 'utf8').slice(0, -1)
const raw = fs.readFileSync('2024/aoc02.input', 'utf8').slice(0, -1)

const lines = raw.split('\n')

const reports = []

lines.forEach((line) => {
    const report = []
    line.split(' ').forEach((level) => {
        report.push(Number(level))
    })
    reports.push(report)
})

const getLevelDirection = (level1, level2) => {
    if (level1 === level2) return 'equal'
    if (level2 - level1 < 0) return  'decreasing'
    return 'increasing'
}
const getSafeLevelDifference = (level1, level2) => {
    if (Math.abs(level1 - level2) > 3) return false
    if (Math.abs(level1 - level2) < 1) return false
    return true
}

const isSafe = (level1, level2, direction) => {
    if (getLevelDirection(level1, level2) !== direction) return false
    if (!getSafeLevelDifference(level1, level2)) return false
    return true
}

const checkReport = (report) => {
    let initialDirection = getLevelDirection(report[0], report[1])
    for (let i = 1; i < report.length; i++) {
        if (!isSafe(report[i-1], report[i], initialDirection)) return false
    }
    return true
}

let safeReports = 0
let safeDampenedReports = 0

reports.forEach((report) => {
    if (checkReport(report)) {
        safeReports++
        return
    }

    for (let i = 0; i < report.length; i++) {
        const dampendedReport = [...report]
        dampendedReport.splice(i, 1)
        if (checkReport(dampendedReport)) {
            safeDampenedReports++
            return
        }
    }
})

console.log(safeReports)
console.log(safeReports + safeDampenedReports)
