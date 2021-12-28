exports.LLData = class {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
    }
}