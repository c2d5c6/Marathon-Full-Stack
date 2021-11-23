function addWords(obj, wrds) {
    let strObj = String(Object.values(obj))
    strObj = strObj + ' ' + wrds
    strObj = strObj.replace(/\s+/g, ' ').trim()
    strObj = [...new Set(strObj.split(' '))].join(' ')
    obj['words'] = strObj
    return obj
}

function removeWords(obj, wrds) {
    let strObj = String(Object.values(obj))
    strObj = strObj.split(' ')
    let strWrds = String(wrds)
    strWrds = strWrds.replace(/\s+/g,' ').trim()
    strWrds = strWrds.split(' ')

    for (i = 0; i < strWrds.length; i++) {
        let el = strWrds[i]
        let index = strObj.indexOf(el)
        if (index > -1) {
            strObj.splice(index, i + 1)
        }
    }
    obj['words'] = strObj.join(' ')
    return strObj
}

function changeWords(obj, oldWrds, newWords) {
    let str = String(Object.values(obj))
    let oldStr = String(oldWrds)
    let newStr = String(newWords)

    oldStr = oldStr.replace(/\s+/g,' ').trim()
    newStr = newStr.replace(/\s+/g,' ').trim()

    str = str.split(' ')
    oldStr = oldStr.split(' ')
    newStr = newStr.split(' ')


    for (i = 0; i < oldStr.length; i++) {
        let el = oldStr[i]
        let index = str.indexOf(el)
        if (index > -1) {
            str.splice(index, i + 1)
        }
    }

    for (let i = 0; i < newStr.length; i++) {
        let elem = newStr[i]
        str.push(elem)
    }

    obj['words'] = str.join(' ')
    return str
}
