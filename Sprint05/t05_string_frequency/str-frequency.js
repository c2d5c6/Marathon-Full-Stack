module.exports = class StrFrequency {
    object = {};
    constructor(str) {
        this.str = str;
        this.strCase = str.toUpperCase();
    }

    letterFrequencies() {
        this.object = {};
        for (let i = 0; i < this.strCase.length; i++) {
            if (new RegExp(/[A-Z]/).test(this.strCase[i]))
                this.object[this.strCase[i]] ? this.object[this.strCase[i]]++ :
                                                this.object[this.strCase[i]] = 1;
        }
        return this.object;
    }

    wordFrequencies() {
        let result = '';
        this.object = {};
        for (let i = 0; i < this.strCase.length; i++) {
            if (new RegExp(/[A-Z\s]/).test(this.strCase[i])) {
                result += this.strCase[i];
            }
        }
        result.split(' ').map(item => {
            if (item.length > 0)  {
                this.object[item] = this.object[item] ? this.object[item] + 1 : 1
        }});
        return this.object
    }

    reverseString() {
        return [...this.str].reverse().join('');
    }
};

// const StrFrequency = require('./str-frequency');


// function test(str) {
//     const sf = new StrFrequency(str);
//     console.log(`Letters in ${str}`);
//     for (const[k, v] of Object.entries(sf.letterFrequencies())){
//         console.log(`Letter ${k} is repeated ${v} times`);
//     }
//     console.log(`Words in ${str}`);
//     for (const[k, v] of Object.entries(sf.wordFrequencies())){
//         console.log(`Word ${k} is repeated ${v} times`);
//     }
//     console.log(`Reverse of the string: ${str}`);
//     console.log(`${sf.reverseString()}`);
// }

// test("Face it, Harley-- you and your Puddin' are kaput!");
// console.log('*************');
// test('  Test test 123 45 !0 f   HeLlO wOrLd   ');
// console.log('*************');test('');