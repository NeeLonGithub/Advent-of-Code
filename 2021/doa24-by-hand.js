console.time('Advent of Code - day 24')

let MONAD = [   // W  X  Y  Z
    'inp w',    // A  0  0  0   0 < A < 10
    'mul x 0',  // A  0  0  0
    'add x z',  // A  0  0  0
    'mod x 26', // A  0  0  0
    'div z 1',  // A  0  0  0
    'add x 10', // A 10  0  0   // A < 10
    'eql x w',  // A  0  0  0
    'eql x 0',  // A  1  0  0
    'mul y 0',  // A  1  0  0
    'add y 25', // A  1 25  0
    'mul y x',  // A  1 25  0
    'add y 1',  // A  1 26  0
    'mul z y',  // A  1 26  0
    'mul y 0',  // A  1  0  0
    'add y w',  // A  1  y  0  y = A
    'add y 2',  // A  1  y  0  y = A + 2
    'mul y x',  // A  1  y  0
    'add z y',  // A  1  y  z  z = A + 2
    'inp w',    // B  1  y  z   // 0 < B < 10
    'mul x 0',  // B  0  y  z
    'add x z',  // B  x  y  z  x = A + 2
    'mod x 26', // B  x  y  z   // 2 < x < 12
    'div z 1',  // B  x  y  z
    'add x 15', // B  x  y  z  x = A + 17
    'eql x w',  // B  0  y  z
    'eql x 0',  // B  1  y  z
    'mul y 0',  // B  1  0  z
    'add y 25', // B  1 25  z
    'mul y x',  // B  1 25  z
    'add y 1',  // B  1 26  z
    'mul z y',  // B  1 26  z  z = 26 * (A + 2)
    'mul y 0',  // B  1  0  z
    'add y w',  // B  1  B  z
    'add y 16', // B  1  y  z  y = B + 16
    'mul y x',  // B  1  y  z
    'add z y',  // B  1  y  z  z = 26 * (A + 2) + B + 16
    'inp w',    // C  1  y  z   // 0 < C < 10
    'mul x 0',  // C  0  y  z
    'add x z',  // C  x  y  z  x = 26 * (A + 2) + B + 16
    'mod x 26', // C  x  y  z  x = B + 16    // 16 < B+16 < 26
    'div z 1',  // C  x  y  z
    'add x 14', // C  x  y  z  x = B + 30
    'eql x w',  // C  0  y  z   // 0 < C < 10   30 < x < 40
    'eql x 0',  // C  1  y  z
    'mul y 0',  // C  1  0  z
    'add y 25', // C  1 25  z
    'mul y x',  // C  1 25  z
    'add y 1',  // C  1 26  z
    'mul z y',  // C  1 26  z  z = 26^2 * (A + 2) + 26 * B + 26 * 16
    'mul y 0',  // C  1  0  z
    'add y w',  // C  1  C  z
    'add y 9',  // C  1  y  z  y = C + 9
    'mul y x',  // C  1  y  z
    'add z y',  // C  1  y  z  z = 26^2 * (A + 2) + 26 * B + 26 * 16 + C + 9
    'inp w',    // D  1  y  z   // 0 < D < 10
    'mul x 0',  // D  0  y  z
    'add x z',  // D  x  y  z  x = 26^2 * (A + 2) + 26 * B + 26 * 16 + C + 9
    'mod x 26', // D  x  y  z  x = C + 9
    'div z 1',  // D  x  y  z
    'add x 15', // D  x  y  z  x = C + 24
    'eql x w',  // D  0  y  z    // 24 < x < 34
    'eql x 0',  // D  1  y  z
    'mul y 0',  // D  1  0  z
    'add y 25', // D  1 25  z
    'mul y x',  // D  1 25  z
    'add y 1',  // D  1 26  z
    'mul z y',  // D  1 26  z  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9)
    'mul y 0',  // D  1  0  z
    'add y w',  // D  1  D  z
    'add y 0',  // D  1  D  z
    'mul y x',  // D  1  D  z
    'add z y',  // D  1  D  z  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) + D
    'inp w',    // E  1  D  z
    'mul x 0',  // E  0  D  z
    'add x z',  // E  z  D  z
    'mod x 26', // E  D  D  z
    'div z 26', // E  D  D  z  z = 26^2 * (A + 2) + 26 * (B + 16) + (C + 9)
    'add x -8', // E  x  D  z  x = D - 8
    'eql x w',  // E  x  D  z  x // D === 9 & E === 1 ? x = 1 : x = 0
    'eql x 0',  // E  x  D  z  x // D === 9 & E === 1 ? x = 0 : x = 1
    'mul y 0',  // E  x  0  z
    'add y 25', // E  x  25 z
    'mul y x',  // E  x  y  z  y // D === 9 & E === 1 ? y = 0 : y = 25
    'add y 1',  // E  x  y  z  y // D === 9 & E === 1 ? y = 1 : y = 26
    'mul z y',  // E  x  y  z  z // D === 9 & E === 1 ?  z = 26^2 * (A + 2) + 26 * (B + 16) + (C + 9) : z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9)
    'mul y 0',  // E  x  0  z
    'add y w',  // E  x  E  z
    'add y 1',  // E  x  y  z  y = E + 1
    'mul y x',  // E  x  y  z  y // D === 9 & E === 1 ? y = 0 : y = E + 1
    'add z y',  // E  x  y  z  z // D === 9 & E === 1 ?  z = 26^2 * (A + 2) + 26 * (B + 16) + (C + 9) : z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) + (E + 1)
    'inp w',    // F  x  y  z
    'mul x 0',  // F  0  y  z
    'add x z',  // F  z  y  z
    'mod x 26', // F  x  y  z  x // D === 9 & E === 1 ?  x = C + 9 : x = E + 1
    'div z 1',  // F  x  y  z
    'add x 10', // F  x  y  z  x // D === 9 & E === 1 ?  x = C + 19 : x = E + 11
    'eql x w',  // F  0  y  z
    'eql x 0',  // F  1  y  z
    'mul y 0',  // F  1  0  z
    'add y 25', // F  1 25  z
    'mul y x',  // F  1 25  z
    'add y 1',  // F  1 26  z
    'mul z y',  // F  1 26  z  z // D === 9 & E === 1 ?  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) : z = 26^4 * (A + 2) + 26^3 * (B + 16) + 26^2 * (C + 9) + 26 * (E + 1)
    'mul y 0',  // F  1  0  z
    'add y w',  // F  1  F  z
    'add y 12', // F  1  y  z  y = F + 12
    'mul y x',  // F  1  y  z
    'add z y',  // F  1  y  z  z // D === 9 & E === 1 ?
                                 // z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) + (F + 12):
                                 // z = 26^4 * (A + 2) + 26^3 * (B + 16) + 26^2 * (C + 9) + 26 * (E + 1) + (F + 12)
    'inp w',    // G  1  y  z
    'mul x 0',  // G  0  y  z
    'add x z',  // G  z  y  z
    'mod x 26', // G  x  y  z  x = F + 12
    'div z 26', // G  x  y  z  z // D === 9 & E === 1 ?
    //                              z = 26^2 * (A + 2) + 26 * (B + 16) + (C + 9) :
    //                              z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) + (E + 1)
    'add x -16',// G  x  y  z  x = F - 4
    'eql x w',  // G  x  y  z  x // F === G + 5 ? x = 1 : x = 0
    'eql x 0',  // G  x  y  z  x // F === G + 5 ? x = 0 : x = 1
    'mul y 0',  // G  x  0  z
    'add y 25', // G  x 25  z
    'mul y x',  // G  x  y  z  y // F === G + 5 ? y = 0 : y = 25
    'add y 1',  // G  x  y  z  y // F === G + 5 ? y = 1 : y = 26
    'mul z y',  // G  x  y  z  z // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  z = 26^2 * (A + 2) + 26 * (B + 16) + (C + 9) :
    //                                  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) + (E + 1)
    //                                :
    //                                  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) :
    //                                  z = 26^4 * (A + 2) + 26^3 * (B + 16) + 26^2 * (C + 9) + 26 * (E + 1)
    'mul y 0',  // G  x  0  z
    'add y w',  // G  x  G  z
    'add y 6',  // G  x  y  z  y = G + 6
    'mul y x',  // G  x  y  z  y // F === G + 5 ? y = 0 : y = G + 6
    'add z y',  // G  x  y  z  z // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  z = 26^2 * (A + 2) + 26 * (B + 16) + (C + 9) :
    //                                  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) + (E + 1)
    //                                :
    //                                  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26 * (C + 9) + (G + 6) :
    //                                  z = 26^4 * (A + 2) + 26^3 * (B + 16) + 26^2 * (C + 9) + 26 * (E + 1) + (G + 6)
    'inp w',    // H  x  y  z
    'mul x 0',  // H  0  y  z
    'add x z',  // H  z  y  z
    'mod x 26', // H  x  y  z  x // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  x = (C + 9) :
    //                                  x = (E + 1)
    //                                :
    //                                  x = (G + 6) :
    //                                  x = (G + 6)
    'div z 26',  // H  x  y  z  z // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  z = 26^1 * (A + 2) + (B + 16) :
    //                                  z = 26^2 * (A + 2) + 26^1 * (B + 16) + (C + 9)
    //                                :
    //                                  z = 26^2 * (A + 2) + 26^1 * (B + 16) + (C + 9):
    //                                  z = 26^3 * (A + 2) + 26^2 * (B + 16) + 26^1 * (C + 9) + (E + 1)
    'add x -4',  // H  x  y  z  x // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  x = (C + 5) :
    //                                  x = (E - 3)
    //                                :
    //                                  x = (G + 2)
    'eql x w',  // H  x  y  z  x // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  H === C + 5 ?
    //                                    x = 1 :
    //                                    x = 0
    //                                  :
    //                                    x = 0
    //                                :
    //                                  H === G + 2 ?
    //                                    x = 1 :
    //                                    x = 0
    'eql x 0',  // H  x  y  z  x // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  H === C + 5 ?
    //                                    x = 0 :
    //                                    x = 1
    //                                  :
    //                                    x = 1
    //                                :
    //                                  H === G + 2 ?
    //                                    x = 0 :
    //                                    x = 1
    'mul y 0',  // H  x  0  z
    'add y 25', // H  x 25  z
    'mul y x',  // H  x *y  z
    'add y 1',  // H  x  y  z  y // F === G + 5 ?
    //                                D === 9 & E === 1 ?
    //                                  H === C + 5 ?
    //                                    y = 1 :
    //                                    y = 26
    //                                  :
    //                                    y = 26
    //                                :
    //                                  H === G + 2 ?
    //                                    y = 1 :
    //                                    y = 26
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 6',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 11',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 3',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -3',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 5',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 12',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 9',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -7',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 3',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -15',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 2',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -7',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 3',
    'mul y x',
    'add z y'
]


console.timeEnd('Advent of Code - day 24')
