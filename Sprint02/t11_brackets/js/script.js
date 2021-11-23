function checkBrackets(str) {
    let count = 0
    let left = 0
    let right = 0

    if (!str)
        return String(-1)

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            left++
        }
        else if (str[i] == ')')
            right++
            if (right > left) {
                count++;
                right = 0;
                left = 0;
            }
    }
    
    if (left === 0 && right === 0 && count === 0)
        count = -1;
    else if (left > right)
        count += left - right;
    
    return String(count)
}
