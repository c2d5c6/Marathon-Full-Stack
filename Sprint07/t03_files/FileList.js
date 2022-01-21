const fs = require('fs');

module.exports = class {
    dir = 'tmp';
    list = [];

    constructor() {
        this.getList();
    }

    getList() {
        this.list = [];
        try {
            fs.accessSync(this.dir, fs.constants.R_OK);
            let data = fs.readdirSync(this.dir, {encoding: 'utf-8', withFileTypes: true});
            if (data) {
                data.forEach(file => {
                    this.list.push(file.name);
                });
            }
        } catch (err) {

        }
        return this.list;
    }

    hasFiles() {
        return this.list ? true : false;
    }

    getHTMLList() {
        let ren = '<ul>';
        this.list.map(item => {
            ren += '<li data-file="' + item + '" class="btn-file">' + item + '</li>';
        });
        ren += '</ul>';
        return ren;
    }
}