console.time('Advent of Code - day 24')

let MONAD = [
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z  1', 'add x  10', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  2', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z  1', 'add x  15', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y 16', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z  1', 'add x  14', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  9', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z  1', 'add x  15', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  0', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z 26', 'add x  -8', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  1', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z  1', 'add x  10', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y 12', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z 26', 'add x -16', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  6', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z 26', 'add x  -4', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  6', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z  1', 'add x  11', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  3', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z 26', 'add x  -3', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  5', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z  1', 'add x  12', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  9', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z 26', 'add x  -7', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  3', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z 26', 'add x -15', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  2', 'mul y x', 'add z y',
    'inp w', 'mul x 0', 'add x z', 'mod x 26', 'div z 26', 'add x  -7', 'eql x w', 'eql x 0', 'mul y 0', 'add y 25', 'mul y x', 'add y 1', 'mul z y', 'mul y 0', 'add y w', 'add y  3', 'mul y x', 'add z y'
];//                                                   1       10..15    7 times                                                                                       /\    0 .. 16
  //                                                  26      -16..-3    7 times as well                                                                              /||\
  //                                                          This only needed for the eql in the next step                                                            ||
  //                                                                                                                                                                   ||_ this is where w is actually is used
  //                                                                                                                                                                   \__ 0..16 is added, then it is added to z
`
1.  Put last element of z (not multiplied by 26 yet) in x
2.  Update last added in x with -16..15 value
3.  If new to add is negative, remove last added (the on in x) from z
4a. Most cases: If that's different from w, x = 1 and z is multiplied by 26
4b. Few cases: If that's the same as w, x = 0 and z is NOT multiplied by 26
5a. Most cases: Update w again and add to z
6 z is eventually always of the form 26^n * a1 + 26^n-1 * a2 + 26^0 * an for n increasing to 14

Different paths are created by the last element of z.
That's always positive and ranges from 1 to 25 (1..9 + 0..16)
If it's checked with a positive addition (7 times), it will never equal the next input number, meaning z will be multiplied by 26 and the next number is added to z with an addition
If it's checked with a negative addition (7 times), it is removed from z!
If it equals the next input number with check (up to 7 times), nothing happens, otherwise the next input with addition will be added to z

If something is added to z, it will always be positive.
So for z to end up 0, in the last step, the previous element of z must always equal the next w !!!
Only then, will all 7 addition be negated by being removed AND nothing added in it's place.

If all goes well, the elements added to z:
1.  A + 2 from 14.: must equal N + 7
2.  B +16 from 13.: must equal M + 15
3.  C + 9 from 8.: must equal H + 4
4.  D + 0 from 5.: must equal E + 8
5.  E + 1 not added
6.  F +12 from 7.: must equal G + 16
7.  G + 6 not added
8.  H + 6 not added
9.  I + 3 from 10.: must equal J + 3
10. J + 5 not added
11. K + 9 from 12.: must equal L + 7
12. L + 3 not added
13. M + 2 not added
14. N + 3 not added

So in a valid model number:
A + 2 == N + 7  A = 6..9  N = 1..4    4 options
B +16 == M +15  B = 1..8  M = 2..9    8 options
C + 9 == H + 4  C = 1..4  H = 6..9    4 options
D + 0 == E + 8  D = 9     E = 1       1 option
F +12 == G +16  F = 5..9  G = 1..5    5 options
I + 3 == J + 3  I = 1..9  J = 1..9    9 options
K + 9 == L + 7  K = 1..7  L = 3..9    7 options
                               total 38 options
                               
highest model number is highest for each in the ranges, so:
ABCDEFGHIJKLMN
98491959997994
smallest
ABCDEFGHIJKLMN
61191516111321
`

console.timeEnd('Advent of Code - day 24') // 0.164ms 😂
