function guestList(...args) {
    let List = new WeakSet()

    List.add({name: 'Pasha'})
    List.add({name: 'Sasha'})
    List.add({name: 'Dima'})
    List.add({name: 'Misha'})
    List.add({name: 'Ira'})

    if (args[1] === 1) {
        let has = List.has(args[0])
        has ? alert(`Yeah, you're on the list`) : alert(`You're not on the list, go away!`)
    }
    if (args[1] === 2) {
        let has = List.delete(args[0])
        has ? alert(`${args[0]} was successfully deleted!`) : alert(`${args[0]} is not on the list`)
    }
}

function menu(params) {
    let menu = new Map()
    menu.set('Chicken noodles', 150)
    menu.set('Onion soup', 120)
    menu.set('Meat broth', 160)
    menu.set('Vegetable soup', 90)
    menu.set('Fish soup', 200)
    menu.set('tomato soup', 100)

    if (params === 'all') {
        let all = ''
        for (const item of menu) {
            all = all.concat(`${item} uah\n`)
        }
        alert(all)
    }
    else
        alert(`${menu.get(params)} uah`)
}

function bankVault(params) {
    let bankVault = new WeakMap()
    const params1 = {
        id: 1,
        firstName: 'Pasha',
        listName: 'Marchenko',
    }
    const params2 = {
        id: 2,
        firstName: 'Dima',
        listName: 'Wolf',
    }
    const params3 = {
        id: 3,
        firstName: 'Pasha',
        listName: 'Bublik',
    }

    bankVault.set(params1, 1)
    bankVault.set(params2, 2)
    bankVault.set(params3, 3)
    
    bankVault.get(params1) === params ?
            alert(`credit ${params}: \n Id: ${params1.id}\n FirstName: ${params1.firstName}\n listName: ${params1.listName}`) :
            (bankVault.get(params2) === params ? alert(`credit ${params}: \n Id: ${params2.id}\n FirstName: ${params2.firstName}\n listName: ${params2.listName}`) :
            (bankVault.get(params3) === params ? alert(`credit ${params}: \n Id: ${params3.id}\n FirstName: ${params3.firstName}\n listName: ${params3.listName}`) :
            alert(`Error credits`)))
}

function coinCollection() {
    let coinCollection = new Set()

    const coin1 = {
        Denomination: 1,
        Diameter: 17.53,
        Thickness: 1.4,
        Weight: 2.59,
        year: 1966
    }

    const coin2 = {
        Denomination: 2,
        Diameter: 21.59,
        Thickness: 1.9,
        Weight: 5.18,
        year: 1967
    }

    const coin3 = {
        Denomination: 5,
        Diameter: 19.41,
        Thickness: 1.3,
        Weight: 2.83,
        year: 1968
    }

    coinCollection.add(coin1, '1¢(вышла из обращения)')
    coinCollection.add(coin1, '2¢(вышла из обращения)')
    coinCollection.add(coin1, '5¢')

    alert(`
    coin1: 
        Denomination: ${coin1.Denomination}
        Diameter: ${coin1.Diameter}
        Thickness: ${coin1.Thickness}
        The Weight: ${coin1.Weight}
        Year: ${coin1.year}
    coin2: 
        Denomination: ${coin2.Denomination}
        Diameter: ${coin2.Diameter}
        Thickness: ${coin2.Thickness}
        The Weight: ${coin2.Weight}
        Year: ${coin2.year}
    coin3: 
        Denomination: ${coin3.Denomination}
        Diameter: ${coin3.Diameter}
        Thickness: ${coin3.Thickness}
        The Weight: ${coin3.Weight}
        Year: ${coin3.year}`)
}

let guest = ''
while (!guest)
    guest = prompt(`Testing guestList(WeakSet). \nPlease entry your name:`, ``)
guestList(guest, 1)
guest = prompt(`Testing guestList(WeakSet). \nWho do you want to delete(leave empty if not):`, ``)
if (guest)
    guestList(guest, 2)

let Soups = ''
while(Soups === '' || Soups === null)
    Soups = prompt(`Testing Menu(Map). \nType the name of Soups or type 'all' to list all of the Soups`, `all`)
menu(Soups)

let client = ''
while (!client)
    client = prompt(`Testing bankVault(WeakMap).\nPlease client credit:`, '1')
bankVault(+client)

alert(`Testing coinCollection(Set)\n Press 'Ok' all to see the the coin`)
coinCollection()