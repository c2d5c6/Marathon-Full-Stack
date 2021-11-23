describe("checkBrackets", function() {
    // Test - True
    it('NaN', function() {
        assert.equal(checkBrackets('NaN'), '-1');
    });

    it('Undefined', function() {
        assert.equal(checkBrackets('Undefined'), '-1');
    });

    it ('1)()(())2(()', function() {
        assert.equal(checkBrackets('1)()(())2(()'), '2');
    });

    it ('((()))((', function() {
        assert.equal(checkBrackets('((()))(('), '2');
    });

    it ('((()))(((', function() {
        assert.equal(checkBrackets('((()))(('), '2');
    });

    it ('((()))((((((((((', function() {
        assert.equal(checkBrackets('((()))(('), '2');
    });

    it ('231()(())3(3)', function() {
        assert.equal(checkBrackets('((()))(('), '2');
    });

    it ('((()))((((((((((', function() {
        assert.equal(checkBrackets('((()))(('), '2');
    });

    it ('pfa()asf()((sadg))', function() {
        assert.equal(checkBrackets('((()))(('), '2');
    });

    it ('test(afa)()()', function() {
        assert.equal(checkBrackets('((()))(('), '2');
    });

    // Test - fasle
    it ('(((test(afa)()(', function() {
        assert.equal(checkBrackets('((()))(('), '-1');
    });

    it ('test(afa)()()', function() {
        assert.equal(checkBrackets('((()))(('), '-1');
    });

    it ('test(afa)()()', function() {
        assert.equal(checkBrackets('((()))(('), '0');
    });

    it ('test(afa)()()', function() {
        assert.equal(checkBrackets('((()))(('), '5');
    });

    it ('test(afa)()()', function() {
        assert.equal(checkBrackets('((()))(('), '5');
    });
});