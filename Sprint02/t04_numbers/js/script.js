// const beginRange = +prompt('Please entry number one')
const beginRange = Number.parseInt(prompt('Please entry number one'))
// const endRange = +prompt('Please entry number two')
const endRange = Number.parseInt(prompt('Please entry number two'))

checkDivision(beginRange, endRange);

function checkDivision(beginRange, endRange) {
    for (let a = beginRange; a <= endRange; a++) {
        let des = ' - '

        if (a % 2 === 0) des = ' is even'
        if (a % 3 === 0 && a % 2 !== 0) des = ' is a multiple of 3'
        else if (a % 3 === 0) des = des.concat(', a multiple of 3')
        if (a % 10 === 0) des = des.concat(', a multiple of 10')

        console.log(a + des + '\n')
    }
}