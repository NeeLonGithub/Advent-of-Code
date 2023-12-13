import fs from 'fs'

// const raw = fs.readFileSync('aoc12.example', 'utf8')
const raw = fs.readFileSync('aoc12.input', 'utf8')

const lines = raw.split('\n').slice(0, -1)

const getOptionalConfigurations = (springs, springCount) => {

  const options = []
  const unresolvedOptions = [springs]

  while (unresolvedOptions.length > 0) {
    const unresolved = unresolvedOptions.shift()
    const unknownIndex = unresolved.indexOf('?')
    if (unknownIndex === -1) options.push(unresolved)
    else {
      const amountUnknown = unresolved.split('').filter((spring) => spring === '?').length
      const amountBroken = unresolved.split('').filter((spring) => spring === '#').length

      const option1 = unresolved.replace('?', '.')
      const option2 = unresolved.replace('?', '#')

      if (amountBroken === springCount) {
        unresolvedOptions.push(option1)
      }

      if (amountBroken + amountUnknown === springCount) {
        unresolvedOptions.push(option2)
      }

      if (amountBroken < springCount && springCount < amountBroken + amountUnknown) {
        unresolvedOptions.push(option1, option2)
      }
    }
  }

  return options

}

const getNumericSplit = (springs) => {
  const numbers = []
  let count = 0

  for (let i = 0; i < springs.length; i++) {
    if (springs[i] === '.') {
      if (count > 0) numbers.push(count)
      count = 0
    } else {
      count++
    }
  }
  if (count > 0) numbers.push(count)

  return numbers
}

const isArrangementValid = (springs, numbers) => {
  const numericSplit = getNumericSplit(springs)
  if (numericSplit.length !== numbers.length) return false
  return numericSplit.every((splitNumber, index) => splitNumber === numbers[index])
}

const getValidOptions = (line) => {
  const [springs, numbersPart] = line.split(' ')

  const numbers = numbersPart.split(',').map(Number)
  const springCount = numbers.reduce((sum, num) => sum + num, 0)

  const options = getOptionalConfigurations(springs, springCount)

  return options.filter((option) => isArrangementValid(option, numbers)).length
}
console.time('all')
console.log(lines.map(getValidOptions).reduce((sum, count) => sum + count, 0))
console.timeEnd('all')
