const fs = require('fs');
const { AvengerQuote } = require('./AvengerQuote');
const xml2js = require('xml2js');

module.exports.ListAvengerQuotes = class {
    dataXML = '';
    constructor(data) {
        this.data = this.init(data);
    }

    init(data) {

        let arr = [] ;
        this.data = data.map((item) => {
            arr.push({comment: new AvengerQuote(item)});
        });
        return arr;
    }
    toXML(file) {
        let builder = new xml2js.Builder();
        this.dataXML = builder.buildObject(this.data);

        try {
            fs.writeFile(file, this.dataXML, (err) => {
                if (err) console.log(err);
            });
        } catch (err) {
            console.error(err)
        }
    }

    fromXML(file) {
        this.dataXML = fs.readFileSync(file, 'utf-8');
        return this.dataXML;
    }
}