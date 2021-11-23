function concat(str1, str2) {
    second.count = 0;

    str1 = String(str1)
    str2 = String(str2)

    function second() {
        let str2 = prompt('Entry: ', '')
        if (str2 === null)
            return str1
        second.count++

        return str1.concat(' ', str2)
    }

    if (arguments.length == 1)
        return second
    if (arguments.length == 2)
        return str1.concat(' ', str2)
}