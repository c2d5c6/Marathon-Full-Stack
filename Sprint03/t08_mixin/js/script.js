const houseMixin = {
    wordReplace(str1, str2) {
        this.description = this.description.replace(str1, str2)
    },

    wordInsertAfter(str1, str2) {
        let str = this.description.indexOf(str1) + str1.lenght
        this.description = [this.description.slice(0, str), ' ', str2, this.description.slice(str)].join('')
    },

    wordDelete(str1) {
        this.description = this.description.replace(str1, '')
    },

    wordEncrypt() {        
        let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';        
        let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';        
        let index = x => input.indexOf(x);        
        let translate = x => index(x) > -1 ? output[index(x)] : x;        
        this.description = this.description.split('').map(translate).join('');    
    },    
    wordDecrypt() {        
        let input = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';        
        let output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'        
        let index = x => input.indexOf(x);        
        let translate = x => index(x) > -1 ? output[index(x)] : x;        
        this.description = this.description.split('').map(translate).join('');
    }
}

const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith', 110, 5);

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild()); 
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.