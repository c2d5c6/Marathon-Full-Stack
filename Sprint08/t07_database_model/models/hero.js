const Model = require('./../model.js')

module.exports = class Hero extends Model {
    constructor(name, description, class_role, race_id = 'human') {
        super(name, description, class_role, race_id)
    }
    find(id) {
        super.find(id)
    }
    delete(id) {
        super.delete(id)
    }
    save() {
        super.save()
    }
}