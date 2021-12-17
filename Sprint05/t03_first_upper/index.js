exports.firstUpper = str => {
    if (typeof str !== 'string') return ;

    str = str.trim().toLowerCase();
    str = str.slice(0,1).toLowerCase() + str.slice(1);
    return str;
}

// const i = require('./index');

// console.log(`"testing String": ${i.firstUpper("testing String")}`);
// console.log(`"   testing   String": ${i.firstUpper("   testing   String")}`);
// console.log(`"07": ${i.firstUpper("07")}`);
// console.log(`"": ${i.firstUpper("")}`);
// console.log(`null: ${i.firstUpper(null)}`);

// console.log(i.firstUpper('   ...I Will Rebuild Krypton Atop His Bones.'));
// console.log(i.firstUpper(' 300room FOR yoUr   DESTiny   '));