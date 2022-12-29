// const input = ['1=-0-2', '12111', '2=0=', '21', '2=01', '111', '20012', '112', '1=-1=', '1-12', '12', '1=', '122']
const input = ['10110-02-=2=2021-=', '1212001=', '1==2=22-222=010100-', '1-12-2020', '1=1210', '2--2=1=-00==', '2=11=0=2-=0=0', '1211', '1-212', '11200---2', '2-1120=0--102-0', '21==12=12', '2-=011', '1=21-00=-=2121-', '1=-0==020-==21=-', '1==022-=-101220', '2-20-220', '1-1-', '1-0-0-=1-0-02=', '10-1=00=0=01=01=', '1=12==--1=1=11', '1=-==22=110=-2', '2101=2', '21=0=0-1=--2--11=', '10-00=2-2=000-10', '2-02-11-=-1', '222002--', '2=21-2=-20-1211=0=', '2201=121-2=-1', '1=-2--00', '1=-1', '2-0', '10221120220', '1-22', '1=00011220-1==0-', '12112--1=-20', '2-==00200=--=-00', '210-=-=1==1=2', '1=122=110-10=-', '20221101=120', '12-=220==002100010', '121--0=21--=11-2', '10110-=012=10', '120021=-1-2-1=12=--', '2-001=210=', '22112-=-0', '110---1-=0-11=2=', '1=-20110222-==-00--', '2-2--0-=---0=-11', '10-2-=-0-1-', '1=1112=21-==00--', '2=1-22-000=00=0=', '2=-2=1==2', '10', '2=22200-==1-0=', '2=222002=', '2-=1=-=--0-', '210-=2=--2', '12=2-1-', '2-=2110-01=2', '2=011--2-0=1=', '1===-=202', '1002-2-11=', '2201-', '1-21--022-1101=1', '1=121=202', '1=0--121=-', '1-21', '1-=-', '20', '21=', '1-2-121', '21=2-102-1', '2=100=211211120', '1=1010=1--==2-21=2-2', '111200012--0=', '12=0=', '2=--1=22', '1-02-1012', '2211-=0--', '2---=2=1', '2-00--000-2112', '1021=1', '12-20=-01000==1', '1==-0-1-1-212', '1-0--=01-0=11012==', '1=2010-022', '1==', '1010-=-==0==20', '1=020=0', '1-00-', '12=0=2=20-11', '11-1=-', '2=-=--1==01===2--', '2-00212', '1-=0-1', '10022', '1-2010--1-', '1=2', '1=220--=01', '100=1-0=---1--221==', '110=2-22200-10-', '20=1', '1-', '2122-=10001102', '1-022-1212210==-2', '10001222--112', '22', '2-=0', '111=00', '1102021-==']

const snafu2decimal = (snafu) => {
    const snafuNumbers = snafu.split('')
    const pentagonalNumbers = [snafuNumbers[0], ...snafuNumbers.slice(1).map(snafuNumber => {
        switch (snafuNumber) {
            case '2': return '4'
            case '1': return '3'
            case '0': return '2'
            case '-': return '1'
            case '=': return '0'
        }
    })].join('')
    const offset = Array(pentagonalNumbers.length-1).fill('2').join('')
    // console.log(`snafu: ${snafu}`);
    // console.log(`penta: ${pentagonalNumbers}`);
    // console.log(`offst: ${offset}`);
    // console.log(`reslt: ${parseInt(pentagonalNumbers, 5) - parseInt(offset, 5)}`);

    return parseInt(pentagonalNumbers, 5) - parseInt(offset, 5)
}

input.forEach(snafu => {
    // console.log(`${snafu}${Array(25 - snafu.length - snafu2decimal(snafu).toString().length).fill(' ').join('')}${snafu2decimal(snafu)}`);
    // console.log(snafu2decimal(snafu));
})

const decimalSum = input.reduce((sum, snafu) => sum + snafu2decimal(snafu), 0)

const snafu = '2=0-2-1-0=20-01-2-20'
console.log(decimalSum);
console.log(snafu2decimal(snafu));
console.log(`${snafu2decimal(snafu) - decimalSum > 0 ? 'Too high' : snafu2decimal(snafu) - decimalSum === 0 ? 'YES' : snafu2decimal(snafu) - decimalSum < 0 ? 'Too low' : ''}`);

// not 2=-1=0


const decimal2snafu = (decimal) => {
    const offset = (decimal + 2).toString(5).split('')
    let firstPart
    if (['3', '4'].includes(offset[0])) {
        firstPart = (Number(offset[0]) - 2).toString() + offset[0] === '3' ? '-' : '='
    } else {
        firstPart = offset[0]
    }
    return firstPart + offset.slice(1).map(offsetChar => {
        switch (offsetChar) {
            case '4': return '2'
            case '3': return '1'
            case '2': return '0'
            case '1': return '-'
            case '0': return '='
        }
    }).join('')
}

const testDecimals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 2022, 12345, 314159265]

testDecimals.forEach(dec => {
    // console.log(`${dec}${Array(24 - dec.toString().length - decimal2snafu(dec).toString().length).fill(' ').join('')}${decimal2snafu(dec)}`);
    // console.log(`${dec} ${decimal2snafu(dec)}`);
    // console.log(snafu2decimal(snafu));
})


