// const usingTest = true
const usingTest = false

const testInput = ['        ...#', '        .#..', '        #...', '        ....', '...#.......#', '........#...', '..#....#....', '..........#.', '        ...#....', '        .....#..', '        .#......', '        ......#.']
const realInput = ['                                                  ...#...#....#........#...................................##..#...##...............#..#..............', '                                                  ..#...#..........................#.#.......................#........#......#...#...............#....', '                                                  #.#...............................#....#..........##.........................##.#.#.............#...', '                                                  ......#...#....#...#.......###.................###.................#.............#......##..........', '                                                  ....#......................#........#..............#..#...#...#......#..............#........#.##...', '                                                  ...................#.....#.......#...............#.....#......#..........#................##....#...', '                                                  .#..............#.........##...............#..#.....#.................#........#.#........#........#', '                                                  #....#..............#...#..#.................#..........#...........................#...........#...', '                                                  .....#.#.#.................#..##.......#......#..............#....#..........#....................#.', '                                                  .........#......#.#............#...#.........#.#..................................###.....#.......#.', '                                                  .....#.....#..#..........#..#.#.#.................#..........#..............#......#...#............', '                                                  ....#.......#.#..........#..........#...................#.#.......#........#.........#..............', '                                                  .........##.......#......#..##.#........#............#...#....#.............................#.......', '                                                  #.....#.....#.......#.......#...........###......................#..................................', '                                                  ........#...#........................#..........#....#...#..#...#......#.....................#......', '                                                  ..................#....#..##........#........#....#..#..........#..#....#...#...##......#...........', '                                                  .###..#......##.......#.............#......#.....................#..#........................#......', '                                                  ......#....#.#..#..#........#..................................#....#.......#.............#..#...#..', '                                                  ..............#..#...................#.##........#...#...................#.......#........#.....#...', '                                                  ......#.......................#......#...#.#.#...........#.......#..............#.....#.......#...#.', '                                                  ...###...........#...#...........#....#...#.........#......#.....##.................#......#.......#', '                                                  .....#....#......#........#..............#.........#...........................##....#.#.........#..', '                                                  ........................................................#...........#...................#.....#....#', '                                                  .....................................#......#..#....#...................#...........................', '                                                  ............#..............##...............#....#.......#..#...........................##..........', '                                                  ..........#..#....#.............................................#.................#...........#.....', '                                                  .#...............#............#............#.....#...#........................#.#..................#', '                                                  ......................#.#...##....#....................#.......................#....................', '                                                  ................#........#........................................................#............#....', '                                                  ..........................#..#........##.....#.##..........................................#........', '                                                  ...........#....................#......#.....#.....#..#..........................#......#...##..#...', '                                                  ....#.........#.............#................#............................#.#........#.......#..#...', '                                                  .#.......#.......................#.#.................................#.........................#....', '                                                  ......#..#..............#.........................................#...........#.#..#...........#....', '                                                  .#.#.#...#...........#..#...#......#...............#.........#.#..#..........#......#..#........#...', '                                                  ....#.........#............#...#................#.#.#..............................#........#..#..#.', '                                                  .....#.#...#...#..........................#..#.#............#............#.......#..................', '                                                  .................#............#........#..............#................................#...........#', '                                                  ..........................................#...........#..#.........................#................', '                                                  .......#...##..........#..........#......................#.......#........#.#...........#...#.......', '                                                  ...#.....#..........#.........#..#...#................#........#.........................#....#.....', '                                                  .#.....#....................#.............#................#........#..............#.##............#', '                                                  ...........#....................#....#........#.#.##..........#.......#.......#........#..#.........', '                                                  ...........#................#.........#.....#............................###................#.......', '                                                  ..................#.#.................#...........#.............#....................#..#...........', '                                                  .#.......#............................................#...............#........##...................', '                                                  .....#.........#..#.##.....##.........................#..#.................................##.......', '                                                  ......#.................#...#..#........#...................#.#...................#..............#..', '                                                  .....#.........#.......#.......#...............#.......#..........#......#..#.........#......#......', '                                                  .#........#.............#........#.........##..##..........#.........................#..............', '                                                  ...##..#........................#.............#...', '                                                  .#.#..............................................', '                                                  #.#........#..........#...#...##............#..#..', '                                                  ...........#..........#.#.............#......#....', '                                                  ........................#....#.##.............#..#', '                                                  .#...........#.........##.#.....#.....#....#......', '                                                  ..............................#...................', '                                                  .....##.#.....#........#............#...#.........', '                                                  .#.......................................#..#.....', '                                                  .......................#.....#....................', '                                                  ...#......#..#..#................#..............#.', '                                                  ........#..................##.....#.........#....#', '                                                  .....##.#......#.......#.#...........#..#...#.....', '                                                  ...............#...........#....#.....##....#.#...', '                                                  #.#............#....##........##.........#........', '                                                  .......#...........#...#..#............##...#...#.', '                                                  ...#..............#.............#...........#..#..', '                                                  ..........................#........#..............', '                                                  .#......#.........#.......#.#........##...........', '                                                  .......#..........................................', '                                                  ..#........#.....#.............#...............#..', '                                                  ..........................................#.......', '                                                  ..............#......#......................#..#..', '                                                  .##...#..#...................#....#.#...##...#...#', '                                                  ...................................#.#.#..........', '                                                  #............#..#.##.....##................##....#', '                                                  .......#........#...#........#..#..............##.', '                                                  .#...........#..................###.........#...#.', '                                                  ...........#..#............#....#.............#...', '                                                  ............#.....................#...............', '                                                  ..#..........##..#..#...........#.................', '                                                  ......#....#........#.....#....#...............#..', '                                                  .................#........#..#..........#.........', '                                                  ........................#..................#.#..#.', '                                                  ............#..........##..##....##...#....#...#..', '                                                  ..#.#...#.........##...#.##......##..#.#..........', '                                                  .........#...#.....................#..............', '                                                  ......#........#.#.............................#..', '                                                  .#.#..........................#.......#..........#', '                                                  .#.............#...............#.......#..........', '                                                  .........#.#...............##........#.......#...#', '                                                  #..........#..........##..........................', '                                                  ................................#..#.#............', '                                                  ###.#.........#................#.#.....#........#.', '                                                  ......#........................#....#..........#.#', '                                                  ....................................#.............', '                                                  ......................#...............#.#..##.....', '                                                  ........#......#.....#....#......#.#.......#..##..', '                                                  ...#..........#.............#........#............', '                                                  ...#........#...............#.......#....#........', '.......##.........##.............#....#..........#...#......#.#..............................#.###..', '.#................#....#.........#...........#.#..................................##................', '............#....#.....#..##.....#........#..#............#...............#....#....................', '.........#.....................................#.......#..#.#...................#.#...........#.....', '.......##....#.......................#.##............#......#...#.....................#.............', '..#.....#................#............................................#........##.............#.....', '...........#...#......#......#....................#.............#.................#......#.........#', '....#...#.....#............#................#.#..#.........#.....##.........................#.......', '#.........##..........#................##..................................#.......#...#.#..........', '............#.#.........................###.......................#............#......##...........#', '...........................................#............#....#....#.#.........#..........#........#.', '.............##..............................#.#.#.#..#......#......................................', '.................#.....................#.#...#....#........#..........#..#...........#..##.#........', '............#....#...........#.#...##.#.#....................#....#................#.#..............', '.......................#..#..#..#.................#.........................#.#......##..........#..', '....#..........#..........................#..............#..........................................', '............................................#.#............#.............#.............#..........#.', '.#......##.......................#.........#..#.....#..#.................#.#........................', '................#........#......................#..................#...#....##....#............#....', '.#..........#..........................................#................#...#.....#............#.#..', '.....#...........#...........#........#..##...#........#......#........#............#...............', '..#........#..#...##.....#..............#........#..##...........##......#........#..#..#..........#', '.#......#....#...#........#.....................#........#.....#............#.....#................#', '..#......##....................#...............#............................#.....#............#....', '.............#.....#........#..........#.##........................###....#.#................#..#...', '#....#.#........#.#..............................................................##..........##.....', '...#.........#........#.......#.#............................#.....#..#..........#..................', '....###...........#.............................#..........#..................#........#......#.....', '...##.............#.##...#.....#....#..#...#................#.....#......#......##.#.........##.....', '....#.....#......#..#..........#............#..................#.....................#........#..#..', '.....#.................#.....#..##.............#.........#.........#..#........#....#...............', '.#...#...#........#.............................#....##.......#......##...#..#...##........#.#......', '.......##....#................#..##.#...........##.........##.......................#.#.#...........', '...............................#..#.#.....................................#.............#...........', '.......#.#..#....#..#........#...............#....#........#........................##..#...........', '..........#...................#.......#.............................................#..........##...', '................#...............#.............##.......#...................#............#....#......', '.#..#........#..............#.............................#...................##...........#........', '..........#.................#...............#....#...#.............#.................##.........##..', '..................................#......##.............................................#..#........', '..#.............#.................#................#..#.......#.........#.....##...#...............#', '.#.#..#....#..#......#.......................#...#...#...........#.....................#..#.........', '........#.....#..#........#.###...#...#....#........#...#....#.......#..#.......#..........#.#.....#', '..................#...................#..............#.........................#...#...#............', '...#...#......#....#.............#....#.#....#...................#...#...##..................#......', '...................................#.......#..#...#......#....................#.........#...........', '..............#...............#............#........#..........................#.#......##.......#..', '................................#..##...#............##.......#.........#...........................', '................#.....#....##..................####....#..................#...#.......##.......#....', '.#......#...#.....#...............#....#............##.......................#...........#..........', '.....#..........#...#..............##...........#.', '....#....#...........#......#.........##...#...#.#', '............#...#...#................#..##........', '...#......#...............#.......................', '......##..............#..................#.....#..', '......#....#.#................#...................', '..#.....#.....#....##...................#..#......', '.................................##.............#.', '....#...#..#...#.....#...##.......#.#.......#.....', '.#....#.......................#.............#...#.', '.........##.....#...........#.....................', '..#............................#.......#.........#', '............#..................#.#.#..............', '.....................#............##....#.........', '.#....#.....#.............#........#.....#........', '...#...#.....................#...#...............#', '...#..##..............#.#.....#...........#.......', '................#..#.........#......#.#......#....', '...............#..#...#....#...#.....#...#..#.....', '..##.####...#.#.........#....................#....', '..#..............#.....#...............#.....#....', '.....#.....#...................#.......#......#...', '........#.....#..#...#....#..........#............', '...#.................#....#......##..##.#...#....#', '..................#.........#......#....#.........', '.......#.#..#.............#......................#', '.....#........#..........#.....#......##.......#..', '.#........##....##...........................#....', '.#...........#.............##..#................#.', '..................#.........................#.....', '....#...#.......................#.................', '...#........#.....#............#..........#..#....', '................#........#...................#....', '...........#......#...#...........................', '.......#.........#.....................#...#......', '..............................................#...', '......................#..#...................#....', '...........#.......#.#..#.....#.......#....##....#', '#.......#.......#.........#.....#................#', '#.#.....#..##..............................#......', '..#..#.........#....#........................##...', '......................#.#.##.......#..........#...', '.....................#..#..............#.....#....', '.............#...........##.......................', '.#.....#....#......................#..............', '..#..#............##..............................', '.....#...................##..#......#...#...#.....', '...........................#....#.................', '..................................................', '....................#...#..#.#....................']

const testInstructions = '10R5L5R10L4R5L5'
const realInstructions = '30R46R45R37L29R16L16L16L7R35R10R40L18R32R20L37R15R40L23L38R33L12R45L22L6R37R22L36R16R49R41L3L37R23L25R50L33L31L7L13R1R34R21R39R28L33R17L38R3L45R38R41L18R22L47L32R33L32R5R37R28R19R16R14L17R27R23R35R14L1L4L48L14R27R30R33L24L17R21L21R16R10R18L30R45R19L42R46R45R3L47R49R44L11R6R11R25R15R34R42L41R46L34L46L3L14R2R3L33L39R20L38L25R43R44L28L41L7L47R10R9L8R39L41L14R31L40L47L42L35L22R32R5L25R29L26L31R29L13L4R10R26L35R6L4L22R27L19R12R20R48L43L13R18L12R38L18R48L50L44L9L35R29R31R18R19R29R17R30L43L35R39L14R11L47L23R22L8R33L21L3R11L2L14R34L26L31L49L44R36L14L22L23R34L48L16R23R28L39R31R19L43L39L32L1R38L37L3R42L20L3L14R8R6L7L19L22R32R50L2R38R33R41R39R44R49R4R47L13R31R5L14L49R15L7R27L20L18R37L21R40L27L45L40R7R17L27R35R38R31R34R43L8R8L39L36L17R48R4R27L23L8R48L38R45R40L5R38R30R8R44R15R29R44R43R13L48R23L40L27R13L22R37L47R43L40L26L5R8L49R46R7R20L21R15R27L22L10L23L20L23R49R46R11R49R49R14R33L10R8R40R20R15L18L46R44L48L17L21L11L47L46R40L21L19R15R37R31L7R46L23R48L13R11R14L48R22R9L44L26R12R16L2R34R27L33L38L2R35R34R33R33R38R40R42L23L5R22L6R15R29L36R4R8L38L9L49R31L15L20R22L35R48R12R16L34R46R16R2L29L33L18R23L12L31R32R3L36L15R37L7L17L14L34L23L7R23L26R1L29R17L5R1L32L25L15L28L35R33L13R14L31L6R6R22R13L1R33L28R21R37R49R20R13R50R17R37R33L4L1L41R48L31L29L4L35R17R35L40R29L32L29L36L39L37R38R16R5R3L34R44R1L24R40R29R42L8L11R3R44R20L28R5R14R24L26R11L44L32L26R36R15L3R8L19R46L17L16R38L44L22L34R41L3R10L42L45L3L35R28L34L3R9L19R40R16L42L39R43R38L42R4L4L1L13R26R24R1L12L17L29R27R47L42R14L7L2L8L46L2L46R10L34R38L25R27L23L11R41R18L22R28R23L20R32R12R43R46L3L25R21R30R9R3L8L29L22L12L21L49R20L25L38R42R26L6L13L35R35L45R22L34R29L32R10R5L12R11R2L31L41L33R19L45L6R48R17L1R16L14R20R29R28R10L19R26R9L26R48L5L1L35R36R10R37R10R13R20R7L36R14L29R15L22R42R11R4L4L31L28R16R45R49R23L30R43L38R14R16L21L32L41R42L12R49R4L3L2R45L21L30L45L5R9L10R17L1L3R50R31L18L43R12R22L44L39L18L7R37R7L44L22L14R9L37R29L18L11R15L45R16R41R40L29R12R20R3L34R50L5R26L17R47L49L22L17R26L3R15R4R16R17L35R37L9R33R3L27R32L31L15L39R34R23R40L29R1L6R5L5L14R1L31L4L30L34L17R29L8R5L36L28R1L41R33L31R40L36R30R23R16L41L21R30L23L31L2R29R46R34R17R13L39L34R23L28R29L11L49L27R19L8R14L10L36R40L39R17L40L6R38R46L41L36R22L10L2R8L39L44L20L39L50R41R47R19R34R17L34L7R6R49L42L20R32R17R29R47L44R12R12L22L34L1R7R27R28R18L26R8L4L38L8R26L8L32L4R31L32L5L39L23L14L20R6L27L24R25R16L19R11R6R6L39R47L34R28R10R40R18L41L36L40R39R16L37L25L17R4L42R11L9R42R5R14R24R50L39L35L39L34R16R27R40L8L37L8L15L40R38L22L29L49L50R1L30L8R30R32R47L14L32L33R13R5L22R45R1L47L1R46L42L8L30R15L50L43L36R10R32R9R10R47R21R37L25L27R44R45R24L14L44L29L4R35L23R22L16L38L40L35R16R7R43L1L43R11R23L32L17R17R47R14R24L48R21L19R33R41R21R44R49R1L12L44R15R2R25L2R8R31L50R18R23L39R47L23R27R46L12R24L12L42R18R34R41R33L39R43L33R2R36R43L16L6R11L32R22L48L17L21L17R36R37L25L49L43L31L11L24R5L16R32R5R37L26R3L9R16R46L49R21R21L29L32R43L34R43L45R35L11L40R23L42L27L38R34L15L22R35L10R30L31L28L32L38R41R23L22R2R3L24R9R1R43R5L49R2R49R2R16R39L14R33R47L9R32R29L2L12R22L17R23L42R5L34L32L43L50R39L37L25L49L20L9L5L35R41L32R17L9L33L28R20R31L44R9L27R50R36L23R28R24R19L28R17L32L31R39L24L40R46L30L21R25L21R8R41L46R11R37R39R3R10L2L13R23R6L44R9R16L14L26R1L10R45L44L2L40R14L7L9L5L47L21R4L40R35L4R42R24R22R22L15L14L16L35L4R32R24R22L2L38R34R8R24L35L49L26L10R46R9R30R11R12R14R34L43R38L35L11R28R38R7L37R38R35R49L10R3L38L29R15R36R45R38L12L18L13L47L9L27R26L34R10L3R11R49R20L17L46R21L2L42R32L37R29R1L50L28L16R19R33L35L28L27R44R2L30R16R12L24R22L17L7L17R31R9R16L1R3L24L46L40R14R34L20R45L14R7R28R20L30L10R50L20R3R2L45L12L9R10R23R16R9L44L16L23R48R44R41R46L28L11R47L16L11R13R6R9L3R6L30L24R9R33R10R10R17L27R43R5R26L10L25L4R21L16R41L49L36L38R3R37R28R14L28R49R17R18R19L47L47L33R27L24R2L16L28L33L15R3L14L21L23R14L26L13L13R22L5R27R8R50L37L4L50R2R42L22L4L42R47L32L42L13R33R43L14R39L39R29R33R25R30L18R4R43R11L30R2L1R10R45L35R15L18R27L46L1L31R23L47L22R47R12R50R28L46L26L42L24L23R25L1L2R22R45L46R38L50L32R48R10L28R22R36R34L7R18L26R10R3R26R43R41R10R43R23L47R6R20R19L46L5R28R49R38L24L39L21L19R26R30R36L15L21L7R34L43R47R12L20L48L26R38L37L48R42L38L3R15R13L22R18R45R14L18L28R26R12L18L31R6R17L18R27R32R13L29L11R37R30R28L8L49L27R9L13L31L8R27L24L12R11L48R27R15L49L16L45L9L19R3R9R2R47L42R19R44L25L16L41L3R23L34R11R31L11R50L1R9R30R28R29L15R28L48L27L39L15R10L7L48R4L41R22R44R45L26L21L20R31R27L23L25L5R32L38R18L37L16L40R35L13L35L4L33L33L48L37L1L20L40R33R3R35L46R2L4L21L19L42R2R16L41R35L40R24R50L8R32L9R4L12L10R19R11R16L42R9R47L21R1L27L47R21R30R42L1R25L20R50L40L39L4L2R17R46R19R4R50R21R39R32R12L25L14R8L1L25L45L27L28L11R39R30L44L36L39L20R21R12L22L20R1R26R22L36L8R45R50L28L46L3R21L23R5L27R42R1L1R48R36R48L33L35L5L35R31L1R12R3R32R39L34R46R32L2L5L41L40L23L40R23L38L6R45R42L3L15R9L38R49R37R30L21R48L11R38L2L40L11L36L50L9R7R30R40L23R38R44L26R9L29L26L13R1R20R4L33R26L17L15L11L15L28L6R9R5R10R40R10R34R50R49R41L29R31R6L48L29L24R19R14R33L33L49R34L50R8L20R26L48R32R26L8L15R44R7R17R38L19R12R21R17L28L46L34R35L34R15R2R34L30L7R26R21L48L42R8R1L38L5L3L25R38L6L18R32L10R15L34R11L26L46L16L15L25L1L42L13R11L14R24R29L33R9R35L2L23L31L36L8R40L39R26R22L1L29L43L4L38R22L44L5L14L28R40L8R48R48L12L32R50R21R7R6L2L34L26L18L41L43R46L4L19R7R28R10R11L39R34R14R19R25L39R12R21L10L7L33L8L24L27R45L14R36R44L10R50R45L23L30L34L36L8L9L33R4R16L29L21L29L31R9L24L33L8L2R3L39R26L50L46R32R9R4L45R30L34R4L42L23R23R34L6R32R12R1L35R43R38R1L50R30L15L14L31R31L21R45L23L1L29L11L35R5R49L38L19R37L35R48L19L38L49R43L25R20L7R44R20R37L8R20R50L18R30R23R45R8L44R44R42R26R17R3L38L43L35L41R21L11L44R43L40R36R14R27L21L15L50L35L45L33L50L43L35L24R9L42L50L2R3L39L25L8L21R48L25R5L1R25L30R6L29R30L27R36R41L23L3L34R24L10L5L17R49L3L24R15L17R3R9L2R18L14R15L34R19L12R12R18R37R33L18R1L30L10L26L40L5L47L28L34R12R11L21L24L18R25L42L34L9R31L35R19L44R27R11L31R20L36L2L47L11R19L5L2R18R18R35L9R32L26R48R10L35R23R45'

const input = usingTest ? testInput : realInput
const instructions = usingTest ? testInstructions : realInstructions

let direction = 0

const getWrappedStep = (x, y, direction) => {
    let newX = x
    let newY = y
    let newDirection = direction
    switch (direction) {
        case 0: { // right
            newX++
            if(newX === 150 && newY >= 0 && newY < 50) {
                newY = 149 - newY  // 0 -> 149 1 -> 148 ... 49 -> 100
                newX = 99
                newDirection = 2   // left
            }
            if(newX === 100 && newY >= 100 && newY < 150) {
                newY = 149 - newY  // 0 <- 149 1 <- 148 ... 49 <- 100
                newX = 149
                newDirection = 2   // left
            }
            if(newX === 100 && newY >= 50 && newY < 100) {
                newX = 50 + newY   // y50 -> x100 y51 -> x101 ... y99 -> x149
                newY = 49
                newDirection = 3   // up
            }
            if(newX === 50 && newY >= 150 && newY < 200) {
                newX = newY - 100  // y150 -> x50 y151 -> x51 ... y199 -> x99
                newY = 149
                newDirection = 3   // up
            }
            break
        }
        case 1: { // down
            newY++
            if(newX >= 100 && newX < 150 && newY === 50) {
                newY = newX - 50   // y50 <- x100 y51 <- x101 ... y99 <- x149
                newX = 99
                newDirection = 2   // left
            }
            if(newX >= 50 && newX < 100 && newY === 150) {
                newY = newX + 100  // y150 <- x50 y151 <- x51 ... y199 <- x99
                newX = 49
                newDirection = 2   // left
            }
            if(newX >= 0 && newX < 50 && newY === 200) {
                newX = newX + 100  // y150 <- x50 y151 <- x51 ... y199 <- x99
                newY = 0
                newDirection = 1   // down
            }
            break
        }
        case 2: { // left
            newX--
            if(newX === -1 && newY >= 100 && newY < 150) {
                newY = 149 - newY  // 100 -> 49 101 -> 48 ... 149 -> 0
                newX = 50
                newDirection = 0   // right
            }
            if(newX === 49 && newY >= 0 && newY < 50) {
                newY = 149 - newY  // 100 <- 49 101 <- 48 ... 149 <- 0
                newX = 0
                newDirection = 0   // right
            }
            if(newX === -1 && newY >= 150 && newY < 200) {
                newX = newY - 100  // x50 <- y150 x51 <- y151 ... x99 <- 199
                newY = 0
                newDirection = 1   // down
            }
            if(newX === 49 && newY >= 50 && newY < 100) {
                newX = newY - 50       // x0 <- y50 x1 <- y51 ... x49 <- y99
                newY = 100
                newDirection = 1   // down
            }
            break
        }
        case 3: { // up
            newY--
            if(newX >= 0 && newX < 50 && newY === 99) {
                newY = newX + 50   // x0 -> y50 x1 -> y51 ... x49 -> y99
                newX = 50
                newDirection = 0   // right
            }
            if(newX >= 50 && newX < 100 && newY === -1) {
                newY = newX + 100  // x50 -> y150 x51 -> y151 ... x99 -> 199
                newX = 0
                newDirection = 0   // right
            }
            if(newX >= 100 && newX < 150 && newY === -1) {
                newX = newX - 100  // y150 -> x50 y151 -> x51 ... y199 -> x99
                newY = 199
                newDirection = 3   // up
            }
            break
        }
        default: {
            console.assert(false, `\n\n\nx: ${newX}, y: ${newY}, direction: ${newDirection}\n\n\n`)
        }
    }
    return {x: newX, y: newY, direction: newDirection}
}

const getCharAt = (x, y) => {
    const char = input[y].charAt(x)
    return char === '' || char === ' ' ? undefined : char
}

const walk = (paces) => {
    console.log(`Walking ${paces} paces from ${x}, ${y} in direction ${direction}`)
    for (let i = 0; i < paces; i++) {

        let char = undefined

        const {x: newX, y: newY, direction: newDirection} = getWrappedStep(x, y, direction)
        char = getCharAt(newX, newY)

        console.assert(char !== undefined, `x: ${newX}, y: ${newY}`)
        char.length

        if (char !== '#') {
            x = newX
            y = newY
            direction = newDirection
        } else {
            break
        }
    }
    console.log(`Stopped at ${x}, ${y} facing ${direction}`)
}

const paddedCommands = instructions.replaceAll(new RegExp('[L|R]', 'g'), c => ` ${c} `)
const commands = ['R', ...paddedCommands.split(' ').map(command => ['L', 'R'].includes(command) ? command : Number(command))]

let [x, y] = usingTest ? [8, 0] : [50, 0]
direction = -1 // adjust for initial 'R'

for (let i = 0; i < commands.length; i+=2) {
    if (commands[i] === 'R') {
        direction = (direction + 1) % 4
    } else {
        direction = (direction + 3) % 4
    }

    walk(commands[i+1])
}

console.log(`${y + 1} * 1000 + ${x + 1} * 4 + ${direction} = ${(y + 1) * 1000 + (x + 1) * 4 + direction}`)

// 114 * 1000 + 90 * 4 + 3 = 114363 is too low
// 158 * 1000 + 21 * 4 + 3 = 158087 is too high
// 130 * 1000 + 65 * 4 + 2 = 130262 is too high
// 127 * 1000 + 3 * 4 + 0 = 127012 is correct
