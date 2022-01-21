const fs = require('fs');
const fd = require('./dateFormated');

module.exports = class {
    list = [];
    constructor() {

        const data = fs.readFileSync('NotePad.js', 'utf-8');
        this.note = JSON.parse(data ? data : '{}');
        for(let key in this.note) {
            this.list.push([key, this.note[key]]);
        }
    }
    add(note) {
        try {
            this.note[Date.now()] = {"date": (new fd(Date.now())).getDate(), "name": note.filename, "importance": note.importance, "text": note.content};
            fs.writeFile('NotePad.js', JSON.stringify(this.note), (err) => {
                if (err) console.log(err);
            })

        } catch (err) {
            console.error(err)
        }
    }

    getList() {
        return this.list;
    }

    get(id) {
        return (new Map(this.list)).get(id);
    }

    delete(id) {
        delete this.note[id];
        try {
            fs.writeFile('NotePad.js', JSON.stringify(this.note), (err) => {
                if (err) console.log(err);
            })
        } catch (err) {
            console.error(err)
        }
    }

    getDetail(id) {
        let item = this.get(id);
        let result = `<h2>Detail of "${item.name}"</h2>`;
        result += `<ul><li>date: <b>${(new fd(item.date)).getDate()}</b></li>`;
        result += `<li>name: <b>${item.name}</b></li>`;
        result += `<li>importance: <b>${item.importance}</b></li>`;
        result += `<li>text: <b>${item.text}</b></li></ul>`;
        return result;
    }
}