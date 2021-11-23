function greeting() {
    const reg = RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/)
    const nameFirstLast = prompt('Entry yout FirstName and LastName')

    !reg.test(nameFirstLast) ?
    (alert('Valid Charactors include (A-Z) (a-z) (space) - FirstName and LastName'),
    console.log('Valid Charactors include (A-Z) (a-z) (space) - FirstName and LastName')) :
    (alert(`Greetings - ${nameFirstLast}`),
    console.log(`Greetings - ${nameFirstLast}`))
}

greeting()