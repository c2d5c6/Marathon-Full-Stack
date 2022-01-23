const mysql = require('./db.js')

module.exports = class Model {
    constructor(name, description, class_role, race_id) {
        this.id = 0
        this.name = name
        this.description = description
        this.class_role = class_role
        this.race_id = race_id
    }
    find(id) {
        mysql.connect()
        mysql.query('SELECT * FROM heroes WHERE id=?', id, function(err, rows, fields) {
            if (err) {
                console.log(`Hero wasn't found!`)
                throw err
            }
            this.id = rows[0].id
            this.name = rows[0].name
            this.description = rows[0].description
            this.class_role = rows[0].class_role
            this.race_id = rows[0].race_id

            console.log(`Hero was found: ${this.name}.`)
            console.log({
                id: this.id,
                name: this.name,
                description: this.description,
                class_role: this.class_role,
                race: this.race_id
            })

        })
    }
    save() {
        mysql.connect()
        let hero = {
            name: this.name,
            description: this.description,
            class_role: this.class_role,
            race_id: this.race_id
        }
        mysql.query('INSERT INTO heroes SET ?', hero, function(err, rows, fields) {
            if (err) throw err
            this.id = rows.insertId
        })
        console.log(`Successful save hero: ${this.name}.`)
    }
    delete(id) {
        let sql = 'DELETE FROM heroes WHERE id = ?'
        mysql.connect()

        mysql.query('DELETE FROM heroes WHERE id = ?', id, function (err, result) {
            if (err) throw err
            console.log('Successful delete hero, count: ' + result)
        })
    }
}