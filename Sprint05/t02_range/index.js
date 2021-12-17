exports.checkDivision = (start = 1, end = 60) => {
    if (start <= end && (Number.isInteger(start) && Number.isInteger(end))) {
        let index, result;

        for(let i = start; i <= end; i++) {
            index = false;
            result = '';
            result = `The number ${i} `;
            if (i % 2 === 0) {
                result += 'is divisible by 2';
                index = true;
            }
            if (i % 3 === 0) {
                result += (index ? ', ' : '') + 'is divisible by 3';
                index = true;
            }
            if (i % 10 === 0) {
                result += (index ? ', ' : '') + 'is divisible by 10';
                index = true;
            }
            if (!index) {
                result += '-';
            }
            console.log(result)
        }
    } else {
        console.log("Error");
    }
}

// const i = require('./index');

// console.log('*** Range is 3 - 7 checkDivision(3,7) ***');
// i.checkDivision(3, 7);

// console.log('\n*** Range is 58 - ... checkDivision(58) ***');
// i.checkDivision(58);

// console.log('\n*** Range is ... - ... checkDivision() ***');
// i.checkDivision();

// // Error
// console.log('\n*** Range is ... - ... checkDivision() ***');
// i.checkDivision('tet');
