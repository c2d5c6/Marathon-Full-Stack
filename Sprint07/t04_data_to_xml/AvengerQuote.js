module.exports.AvengerQuote = class {
    id;
    author;
    quote;
    photo = [];
    publishDate;
    comments;

    constructor(data) {
        for (let key in data) {
            this[key] = data[key];
        }
    }

}