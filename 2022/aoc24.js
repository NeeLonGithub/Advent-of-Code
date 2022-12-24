// const input = ['#.######', '#>>.<^<#', '#.<..<<#', '#>v.><>#', '#<^v^^>#', '######.#']
const input = ['#.####################################################################################################', '#<<^<<v.v^>v.<v>.^^>vvv<..^><>vvv>v>.v<>^>vv<<^><<^.<v^^<<<<<v^v><v>v^>vv>>.<^>.>^^^.<><><^^<v^><><.<#', '#<<^<<vv^vv<<^<><>>^<^vvv><>>>^.<v^<..<.>v>v>vvv><.v<^>v^v<<<>>>>>vv<^<<<v>^<.>>vv><<.>v<.^v.v<^<>>v>#', '#<<.v>.v<v<<^v.v>><v.<v<^.>>>.<^>^^^><<>.v><<vv.^v^.^<v>v^vv^<.>v<v><.v^.v<v<v>>><^v.v^^^<<v<^^<>v>v>#', '#<>^v>vvv><..^..v<<^v^><.<<<<>>>^v><.<<^^vv<^v.<^^<^v^>>vv<.>v><..^><.vv>v^>>v><^v<<<^v<^v<v<<^v.vv^>#', '#>^v<>>v<^^vv<<<v^v^<<v>v^vv^vv>><>^.^vv^<>^<v^^<.^v<.^<>^>vv.><<^>v<^^>v^<v.^.^<>v>^>v.<^vvvv<>>.>v>#', '#<^^>><v><<^v<v>vvv>v^>v<^^^^><>^v^.<v^>.<>>vvv^v>.<v<<<^v>>>><v^^<>^v<>>^v>^^^^vvv^^><>^^^^<v<..><^>#', '#>><<<><>^v^<<v>>.<v^^^^<vv^>>>v<v><v>>^>>^^^>v.<v^v>><><^v><vv<^.^vvvv<>.^>v><<<^>vv<^^v<v^^<><.^^v.#', '#<>>^^>v<v.>v.v>^<<>^.>>vv^vv<^>v^><.^v<<v^<.^>v^.^v.<^.^<^<..^>><>v.>^v>vvvv<<>v^<vv<>vv>v>.>v^<^^^>#', '#>vv<v>v<v>^<>v^<^vv<>v>^><><<>>v^<>v.<.>>>>v<v>v^<v<^v<>>v^<>v^>v>v<^<^v^^<v.<^vv<<<.>^v^><v>^^<.<>>#', '#>v^.>vv^vv>.><<^.v^.v<>.^>v><<>v^^<<^<.^.^vv^<^^^><<>.v<<v<v<^^>v<<^<vv^^>>vvv>vvv<^vv.^.v>.<v.><^v>#', '#<><>^v^^<.vv<v>^v<<^v>^.<v>^<.>.>^.v<<^vv.vv<v^<v<^v.>^^^<^^><^vv<<<>v<>><vv.<.<<vv<v.<<.>^>>>^>^.^>#', '#<^><v<><v>v^^<^<vv>^^>^v^>v^>^>><v.>^<.<v<>.<^>>^<<^v^v^.><>v><<^^^vvv<><^>^^v.>><>>v<<^.v<v>^<>v^<<#', '#>.><<<^<v<v>vv>v><.<v>.^^<<<<<><v>^.><^>vvv>v^<^<^v^<><>>.<v<v^v><^.vv^^>^vv>v^<v^<<<>^.v^<vv<v^v>.>#', '#>.<>^><v><.^>vv.^.>v<<v^<^<><>...<>.>^<^><<>v>^>^<.^><><v<>v>>.<^v^<.<vv^v>.v^<v>vv>v>>>^.<^<v^<<..<#', '#>^<<><<^>vvv>>>>v<<^v^>><>..^>v>>^<v>>v^^^.>.<>.^<^<v^>>v><.v>^v<v>v<^.^<^v<.v>^v>v>^>>^^v>>>>^^^^<<#', '#>><^^v>vv>v<^<><v>vv^>^^^v^<^<><.<<^^>><<>v><><<>^<^>v^v^v<><v.><v>>..v^><v>><v^<^vvv>v.^^<<><>v.<><#', '#>^^vv<<>>^^^>v<<<<v>.v^>v>v>vvv<^^<<v<.^^<<^^v<<><<>v.vv.^>^>><^><<vv>^.<>>v>^^v>^vv>.^^v>^.vvv>><<<#', '#><^^^>vv.<^>^<><vv<><^^v<v.>.vv><^<.^^.v<vv<v<<<^<vvv.^^v^>^v.>^v<<<^vv><<v..^<v<^>>.^^^>v<><^vv^<v<#', '#<>^^.>><v>v>^^.v<>.^vv^>.<^<vv<<v<v<v>.<^v>.<><v><^<^^>v>>^>.^>>^><.<><^<<v^v^<>vv<<<>>>^>^<vv^v<^^<#', '#<>v^v><<v<v<.v><vv^v>><>><^.>>^vv>^.<v^^<^><>v<v^<v>vv>^v>vv<<v^>>>^>>>><>vvvv<^>v>^^>>^>^^^..^<v^<>#', '#>v^<^^>v^v^<^>.<vv.<^>>>v.v^^<<^^<.<^.v<<^>v.>^v<.vvv^<vv<><>.v^>>vv<<<v>vvv>^<>^<vvv><v^vv<^^v>^<^<#', '#<v^^v><.>>vv^.>>>^^><.v><<>^^><vv<><>v^v<<v^<v><.vv><<>>^^^>vvvv.^<<>vv.<.v.v<><><>.<><^^>v>v>v.^^<<#', '#<>v^^<v^^>^>^<<<><<<^^>v>^><^v^>.<^^.<<.<v>><..^<v^^><^<<<.<.vvv.<<^v^<<<>v^.<^><>>.^>v<>^v><.^^>^><#', '#><<^^^vvv^^>v^v^>v<v.v^<<<v^><>v><<vvv.v<>vv<<^^^><v^vv.>^<^><^>>v>.^<^^v^<<^><<^.^>vvv>>>.<><^v^^<<#', '#<>>vv.^^^<^^>v<<>^>>v^<v.vv<vv^.<<v><v>v^>>>^^<.><^v^vvv..><><>v.^.v<vv><>v>><><>v^<<^.^^^v<^>>^<^^>#', '#<>>.^>>v<>>>^<v>.>^><>^^>^vv>vv^><.<<<<<^<>.^.v^vv><v<vv>vv^^<><^.^>>v^<><><^v<v.>^^^>^v^^<v^><^<..>#', '#><..>vv<<>vv^vv^>>.^^>^v><^^v<<..<^>.>^<vv^v>>><v^.>v^<>..<^<<<^>v^v<>v><vvv^^v^<>vv^<<<v<<vv<>>v^v>#', '#>v<^>v<>v.v<>^vv.^<>v>>^v>.^^^>^<v^^>v>^><..v>v.>vvv^.^<v><^^v.^^<^vv..v^^^.>><>vvv>^vv^v<>>v^>v^v^.#', '#>v><<^<.<^<<v.^^v^^^>>vv<^<^^.^^^v.<<.^>^>.<vv<v<^.>.^v^^v<><><^<^<^>v<><>^^<<<<>^..>v>><>^.v^.<>^^>#', '#>>^^^^^v.<<>^^v>^vv.^<.<v^.^.^^>v<^^v<>v<^.>v<<<^>v^vv^><>>^^.><<>.v<^v^<>>^<>^v>v>>^^.<v<>v>.>vv^<.#', '#<<^v>^^>^>.<^<>vvv^^v>v<<>v<.><^<<v><v<.v>v^>>>^v<vv>>>>>v^>.^^^>^.<<>vv<^v<>v>v^vv>v><.v.>.v><><.><#', '#>v.^>v^^<>>v^.>^<<>><vv><<v<^>^<>.^<>>^^>^^>.><^>vv<<<v><^<<vv>^.^<v<<>v^.<<<.<>^<^v<^^<^>v>><.^>.<<#', '#><<<<.^.vvvv^^<v^^^...<>v<<<v^^<v<.>>>><<^^<>^vv<<<v^^><.<^><<.<>vv<><>vv^>>vvv^^.><^<<v>^^^^.<v>>>>#', '#<^.>>^vv<v<<v>>^>v.>^.vv^.>^<^v^.^<..><<.vvv>>vv>.^v^.>^<vv^vv^<^>>^>^>><<<^vv.^.>^>><v>v^v><^<>vv^>#', '#..v^>..>v....v<vv^<^.^>v.<.>^<<vv^^^>v^<<>v^v^>^<<>v^^^>.<^>^<<.v.v<<<^>>><^<^<<>.^^^<<<><^^^vv<vv.<#', '####################################################################################################.#']

let start = [input[0].indexOf('.'), 0]
let goal = [input[input.length - 1].indexOf('.'), input.length - 1]

let innerBoardWidth = input[0].length - 2
let innerBoardHeigth = input.length - 2

let cycleLength = innerBoardWidth * innerBoardHeigth

class Blizzard {
    constructor(x, y, direction) {
        this.x = x
        this.y = y
        this.direction = direction
    }

    move() {
        switch (this.direction) {
            case '^': {
                this.y = this.y - 1 || innerBoardHeigth
                break
            }
            case '<': {
                this.x = this.x - 1 || innerBoardWidth
                break
            }
            case 'v': {
                this.y = this.y + 1
                if (this.y > innerBoardHeigth) this.y = 1
                break
            }
            case '>': {
                this.x = this.x + 1
                if (this.x > innerBoardWidth) this.x = 1
                break
            }
        }
    }

    printOnBoard(board) {
        if(board[this.y][this.x] === '#') console.log(`can't print ${this.direction} on ${this.x}, ${this.y}`)
        else if(board[this.y][this.x] === '.') board[this.y][this.x] = this.direction
        else if(isNaN(Number(board[this.y][this.x]))) board[this.y][this.x] = '2'
        else if(!isNaN(Number(board[this.y][this.x]))) board[this.y][this.x] = (Number(board[this.y][this.x])+1).toString()
    }
}

const blizzards = []

input.forEach((line, y) => {
    line.split('').forEach((char, x) => {
        if (['^', '<', 'v', '>'].includes(char)) blizzards.push(new Blizzard(x, y, char))
    })
})

const getEmptyBoard = () => {
    const board = []
    input.forEach(line => {
        const newLine = line.split('').map(char => ['^', '<', 'v', '>'].includes(char) ? '.' : char)
        board.push(newLine)
    })
    return board
}


const boards = new Map()

for (let i = 0; i < cycleLength; i++) {
    const board = getEmptyBoard()
    blizzards.forEach(blizzard => blizzard.printOnBoard(board))
    boards.set(i, board)
    blizzards.forEach(blizzard => blizzard.move())
}

const printBoard = (board) => {
    let print = ''
    board.forEach(line => {
        line.forEach(char => print += char)
        print += '\n'
    })
    console.log(print)
}

// boards.forEach((board, i) => {console.log(i); printBoard(board)})

const players = new Map()

const getPlayer = (x, y, turn) => {
    const key = `x:${x} y:${y} turn:${turn%cycleLength}`
    if (!players.has(key)) {
        players.set(key, new Player(x, y, turn))
        return players.get(key)
    } else {
        return undefined
    }

}
class Player {
    constructor(x, y, turn) {
        this.x = x
        this.y = y
        this.turn = turn
        this.foundEnd = x === goal[0] && y === goal[1]
        // this.foundEnd = x === start[0] && y === start[1]
    }

    getOptions() {
        const board = boards.get((this.turn + 1) % cycleLength)
        const options = []
        const moves = [[this.x, this.y], [this.x+1, this.y], [this.x, this.y+1], [this.x-1, this.y], [this.x, this.y-1]]
        moves.forEach(([x, y]) => {
            // console.log(`${x}, ${y}`);
            // printBoard(board)
            const player = getPlayer(x, y, this.turn+1)
            if (player !== undefined && y >= 0 &&  y < input.length && board[y][x] === '.') {
                options.push(player)
            }
        })
        return options
    }
}



// let player = new Player(start[0], start[1], 0)
// player = new Player(goal[0], goal[1], 18)
// player = new Player(start[0], start[1], 41)

let player = new Player(start[0], start[1], 0)
player = new Player(goal[0], goal[1], 221)
player = new Player(start[0], start[1], 479)
let searches = [player]

while (!player.foundEnd) {
    player = searches.shift()
    searches.push(...player.getOptions())
}

console.log(player.turn);
