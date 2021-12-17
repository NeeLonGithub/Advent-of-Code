let polymer = 'SHHBNFBCKNHCNOSHHVFF'
let insertions = { 'CK': 'N', 'VP': 'B', 'CF': 'S', 'FO': 'V', 'VC': 'S', 'BV': 'V', 'NP': 'P', 'SN': 'C', 'KN': 'V', 'NF': 'P', 'SB': 'C', 'PC': 'B', 'OB': 'V', 'NS': 'O', 'FH': 'S', 'NK': 'S', 'HO': 'V', 'NV': 'O', 'FV': 'O', 'FB': 'S', 'PS': 'S', 'FN': 'K', 'HS': 'O', 'CB': 'K', 'HV': 'P', 'NH': 'C', 'BO': 'B', 'FF': 'N', 'PO': 'F', 'BB': 'N', 'PN': 'C', 'BP': 'C', 'HN': 'K', 'CO': 'P', 'BF': 'H', 'BC': 'S', 'CV': 'B', 'VV': 'F', 'FS': 'B', 'BN': 'P', 'VK': 'S', 'PV': 'V', 'PP': 'B', 'PH': 'N', 'SS': 'O', 'SK': 'S', 'NC': 'P', 'ON': 'F', 'NB': 'N', 'CC': 'N', 'SF': 'H', 'PF': 'H', 'OV': 'O', 'KH': 'C', 'CP': 'V', 'PK': 'O', 'KC': 'K', 'KK': 'C', 'KF': 'B', 'HP': 'C', 'FK': 'H', 'BH': 'K', 'VN': 'H', 'OO': 'S', 'SC': 'K', 'SP': 'B', 'KO': 'V', 'KV': 'F', 'HK': 'N', 'FP': 'N', 'NN': 'B', 'VS': 'O', 'HC': 'K', 'BK': 'N', 'KS': 'K', 'VB': 'O', 'OH': 'F', 'KB': 'F', 'KP': 'H', 'HB': 'N', 'NO': 'N', 'OF': 'O', 'BS': 'H', 'VO': 'H', 'SH': 'O', 'SV': 'K', 'HF': 'C', 'CS': 'F', 'FC': 'N', 'VH': 'H', 'OP': 'K', 'OK': 'H', 'PB': 'K', 'HH': 'S', 'OC': 'V', 'VF': 'B', 'CH': 'K', 'CN': 'C', 'SO': 'P', 'OS': 'O' }

// test
// polymer = 'NNCB'
// insertions = { 'CH': 'B', 'HH': 'N', 'CB': 'H', 'NH': 'C', 'HB': 'C', 'HC': 'B', 'HN': 'C', 'NN': 'C', 'BH': 'H', 'NC': 'B', 'NB': 'B', 'BN': 'B', 'BB': 'N', 'BC': 'B', 'CC': 'N', 'CN': 'C' }

let pairs = {}
Object.keys(insertions).forEach((pair) => pairs[pair] = 0)

for (let i = 0; i < polymer.length-1; i++) {
    let pair = polymer.substring(i, i+2)
    pairs[pair] += 1
}

function getNewPairs(pair) {
    let insertion = insertions[pair]
    return [`${pair[0]}${insertion}`, `${insertion}${pair[1]}`]
}

for (let i = 0; i < 40; i++) {
    let newPairs = {}
    Object.keys(pairs).forEach((pair) => {
        getNewPairs(pair).forEach((newPair) => {
            if (!newPairs[newPair]) newPairs[newPair] = 0
            newPairs[newPair] += pairs[pair]
        })
    })
    pairs = newPairs
}

let least = Infinity
let most = -Infinity; // without ; the literal array below (alphabet) will be undefined ?!?!??!

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].forEach(
    (letter) => {
        let occurrence = 0
        Object.entries(pairs).forEach(([key, value]) => {
            occurrence += (key.match(new RegExp(letter, 'g')) || []).length * value
        })

        if (occurrence % 2) occurrence++
        occurrence = occurrence/2

        if (occurrence > 0) {
            least = occurrence < least ? occurrence : least
            most = occurrence > most ? occurrence : most
        }
    }
)

console.log(most - least)
