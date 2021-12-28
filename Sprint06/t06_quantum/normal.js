let date = new Date('01-01-1939');

exports.calculateTime = () => {
    let result = {};
    let now = new Date();
    result.years = () => {return now.getFullYear() - date.getFullYear()};
    result.months = () => {return now.getMonth() - date.getMonth()};
    result.days = () => {return now.getDate() - date.getDate()};
    return result;
}

const normal = require('./normal');
const quantum = require('./quantum');

const time = normal.calculateTime();

console.log(`In real life you were absent for ${time.years()} years, ${time.months()} 
months, ${time.days()} days.`)

const quantumTime = quantum.calculateTime();

console.log(`In quantum space you were absent for ${quantumTime[0]} years,
${quantumTime[1]} months, ${quantumTime[2]} days.`)