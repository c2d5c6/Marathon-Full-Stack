function* generator() {
    let index = 1
    while(true) {
        let input = prompt(`Previous result: ${index}. Enter a new number:`)
        if (+input) {
            index += (+input)
        } else {
            console.error('Invalid number!')
        }
        if (input === 'exit') break
        if (index > 10000) index = 1
    }
}

let gen = generator()
console.log(gen.next().value);