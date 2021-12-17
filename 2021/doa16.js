let transmission = 'C20D42002ED333E7774EAAC3C2009670015692C61B65892239803536C53E2D307A600ACF324928380133D18361005B336D3600B4BF96E4A59FED94C029981C96409C4A964F995D2015DE6BD1C6E7256B004C0010A86B06A1F0002151AE0CC79866600ACC5CABC0151006238C46858200E4178F90F663FBA4FDEC0610096F8019B8803F19A1641C100722E4368C3351D0E9802D60084DC752739B8EA4ED377DE454C0119BBAFE80213F68CDC66A349B0B0053B23DDD61FF22CB874AD1C4C0139CA29580230A216C9FF54AD25A193002A2FA002AB3A63377C124205008A05CB4B66B24F33E06E014CF9CCDC3A2F22B72548E842721A573005E6E5F76D0042676BB33B5F8C46008F8023301B3F59E1464FB88DCBE6680F34C8C0115CDAA48F5EE45E278380019F9EC6395F6BE404016849E39DE2EF002013C873C8A401544EB2E002FF3D51B9CAF03C0010793E0344D00104E7611C284F5B2A10626776F785E6BD672200D3A801A798964E6671A3E9AF42A38400EF4C88CC32C24933B1006E7AC2F3E8728C8E008C759B45400B4A0B4A6CD23C4AF09646786B70028C00C002E6D00AEC1003440080024658086A401EE98070B50029400C0014FD00489000F7D400E000A60001E870038800AB9AB871005B12B37DB004266FC28988E52080462973DD0050401A8351DA0B00021D1B220C1E0013A0C0198410BE1C180370C21CC552004222FC1983A0018FCE2ACBDF109F76393751D965E3004E763DB4E169E436C0151007A10C20884000874698630708050C00043E24C188CC0008744A8311E4401D8B109A3290060BE00ACEA449214CD7B084B04F1A48025F8BD800AB4D64426B22CA00FC9BE4EA2C9EA6DC40181E802B39E009CB5B87539DD864A537DA7858C011B005E633E9F6EA133FA78EE53B7DE80'
// part 1 tests
// transmission = 'D2FE28' // 6
// transmission = '38006F45291200' // 9
// transmission = 'EE00D40C823060' // 14
// transmission = '8A004A801A8002F478' // 16
// transmission = '620080001611562C8802118E34' // 12
// transmission = 'C0015000016115A2E0802F182340' // 23
// transmission = 'A0016C880162017C3686B18A3D4780' // 31

// part 2 tests
// transmission = 'C200B40A82' // 3
// transmission = '04005AC33890' // 54
// transmission = '880086C3E88112' // 7
// transmission = 'CE00C43D881120' // 9
// transmission = 'D8005AC2A8F0' // 1
// transmission = 'F600BC2D8F' // 0
// transmission = '9C005AC2F8F0' // 0
// transmission = '9C0141080250320F1802104A08' // 1

let index = 0
let bits = ''
let bitsEaten = 0
let versionSum = 0

function eatBits(amount) {
    bitsEaten += amount
    while (bits.length < amount) bits = bits + parseInt(transmission[index++], 16).toString(2).padStart(4, '0')
    let bite = bits.slice(0, amount)
    bits = bits.slice(amount)
    return bite
}

function eatLiteralValue() {
    let stop = false
    let message = ''

    while (!stop) {
        stop = eatBits(1) === '0'
        message += eatBits(4)
    }

    return parseInt(message, 2)
}

function eatOperator() {
    let results = []

    if (eatBits(1) === '0') {
        let bitsLength = parseInt(eatBits(15), 2)
        let goal = bitsEaten + bitsLength

        while (bitsEaten < goal) {
            results.push(eatPacket())
        }
    } else {
        let amountOfSubPackets = parseInt(eatBits(11), 2)

        for (let i = 0; i < amountOfSubPackets; i++) {
            results.push(eatPacket())
        }
    }

    return results
}

function eatSum() {
    return eatOperator().reduce((p, c) => p+c, 0)
}

function eatProduct() {
    return eatOperator().reduce((p, c) => p*c, 1)
}

function eatMinimum() {
    return eatOperator().reduce((p, c) => p < c ? p : c, Infinity)
}

function eatMaximum() {
    return eatOperator().reduce((p, c) => p > c ? p : c, -Infinity)
}

function eatGreaterThan() {
    return eatOperator().reduce((p, c) => p > c ? 1 : 0)
}

function eatLessThan() {
    return eatOperator().reduce((p, c) => p < c ? 1 : 0)
}

function eatEqualTo() {
    return eatOperator().reduce((p, c) => p === c ? 1 : 0)
}

function eatPacket() {
    let version = parseInt(eatBits(3), 2)
    versionSum += version
    let typeID = parseInt(eatBits(3), 2)

    switch (typeID) {
        case 0: return eatSum()
        case 1: return eatProduct()
        case 2: return eatMinimum()
        case 3: return eatMaximum()
        case 4: return eatLiteralValue()
        case 5: return eatGreaterThan()
        case 6: return eatLessThan()
        case 7: return eatEqualTo()
    }
}

console.log(eatPacket())
console.log(versionSum)
