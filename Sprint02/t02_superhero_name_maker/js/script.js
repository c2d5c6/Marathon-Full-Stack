const maker = {
    db: [],
    description: ['boy', 'man', 'girl', 'woman', 'kid', 'hero'],
    animalName: function(name) {
        const reg = RegExp(/^[A-Z]+$/i)
        name.length > 20 || !reg.test(name) ? 
        (alert('Error: length <= 20, only one word that contains only letters'), name = null) : 
        (alert(`Animal name is - ${name}`))
        maker.db.push(name)
    },
    genderSelection: function(gender) {
        const reg = RegExp('^male$|^female|^$', 'i')
        !reg.test(gender) ? 
        (alert('Error: accept only male, female, or blank(not case sensitive)'), gender = null) :
        (alert(`Gender selection is - ${gender}`))
        maker.db.push(gender)
    },
    superAge: function(age) {
        const reg = RegExp(/^[1-9][0-9]{0,4}$/)
        age.length > 5 || !reg.test(age) ?
        (alert('Error: length <=5, only digits, cannot start with a zero'), age = null) :
        (alert(`Age is - ${age}`))
        maker.db.push(age)
    }
}

function isName() {
    const Name = prompt('What animal is the superhero most similar to?', '')
    maker.animalName(Name)
    return Name
}

function isGender() {
    const Gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', '')
    maker.genderSelection(Gender)
    return Gender
}

function isAge() {
    const Age = prompt('How old is the superhero?', '')
    maker.superAge(Age)
    return Age
}

function superName() {
    isName()
    isGender()
    isAge()
    let des

    RegExp('^male$', 'i').test(maker.db[1]) && maker.db[2] < 18 ? des = maker.description[0] : 
    (RegExp('^male$', 'i').test(maker.db[1]) && maker.db[2] >= 18 ? des = maker.description[1] : 
    (RegExp('^female$', 'i').test(maker.db[1]) && maker.db[2] < 18 ? des = maker.description[2] :
    (RegExp('^female$', 'i').test(maker.db[1]) && maker.db[2] >= 18 ? des = maker.description[3] :
    (RegExp('^$', 'i').test(maker.db[1]) && maker.db[2] < 18 ? des = maker.description[4] : des = maker.description[5]))))
    alert(`${maker.db[0]} - ${des}`)
}

superName()