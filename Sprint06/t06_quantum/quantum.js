let date = new Date('01-01-1939');
let difference = 7;

exports.calculateTime = () => {
    let result = [];
    let now = new Date();
    console.log(now + '--' + date);

    now = new Date(Math.round((now.getTime() - date.getTime()) / difference + date.getTime()));
    result.push(now.getFullYear() - date.getFullYear());
    result.push(now.getMonth() - date.getMonth());
    result.push(now.getDate() - date.getDate());
    return result;
}