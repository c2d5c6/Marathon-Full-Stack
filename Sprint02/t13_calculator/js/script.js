function Calculator() {
    this.result = 0

    this.init = function(n) {
        this.result = n
        return this
    };

    this.add = function(n) {
        this.result += n
        return this
    };

    this.mul = function(n) {
        this.result *= n
        return this
    };

    this.div = function(n) {
        this.result /= n
        return this
    };

    this.sub = function(n) {
        this.result -= n
        return this
    };

    this.alert = function() {
        setTimeout(() => alert(this.result), 5000)
        return this
    };
}