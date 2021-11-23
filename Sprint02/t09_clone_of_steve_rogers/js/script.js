// First option
function copyObj(obj) {
    let newObj = {}; // newObj будет хранить копию mainObj

    for (key in obj) {
        newObj[key] = obj[key]; // копирует каждое свойство newObj
    }
    return newObj;
}

// Second option
// function copyObj(obj) {
//     let newObj = Object.assign({}, obj)
//     return newObj
// }

// Third option
// function copyObj(obj) {
//     let newObj = JSON.parse(JSON.stringify(obj))
//     return newObj
// }