module.exports = class {
    constructor(timestamp) {
        this.date = new Date(timestamp);
    }

    getDate(date) {
        return `${this.date.getFullYear()}-${this.format(this.date.getMonth() + 1)}-${this.format(this.date.getDate())} ${this.format(this.date.getHours())}:${this.format(this.date.getMinutes())}:${this.format(this.date.getSeconds())}`;
    }

    format(num) {
        if(num < 10) {
            return `0${num}`;
        }
        return num;
    }
}