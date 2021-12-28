const {EatException} = require("./eat-exception");

exports.Ingestion = class {
    meal_type =['breakfast', 'lunch', 'dinner'];
    products = [];
    constructor(id, day_of_diet, type) {
        this.id = id;
        // this.meal_type = meal_type;
        this.day_of_diet = day_of_diet;
        // this.products = products;
        this.type = type;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(productName) {
        let result;
        this.products.forEach(item => {
            if (item.name == productName) result = item;
        });
        return result;
    }

    getFromFridge(productName) {
        let product = this.getProductInfo(productName);
        EatException(product);
    }
}

const {Product} = require("./product");
const {Ingestion} = require("./ingestion");
const productNames = [
  'Nutella',
  'Chicken',
  'Coca-Cola',
  'Biscuit',
  'Brocolli',
  'Tomatoes',
  'Apple',
  'Potato',
  'Pizza',
  'Beer'
];

const randomInt = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
}

const stock = new Ingestion('breakfast', 1);

productNames.forEach(name => {
  stock.setProduct(new Product(name, randomInt(40, 500)))
})

productNames.forEach(productName => {
  console.log(`***\nGetting ${productName} that has`,
  `${stock.getProductInfo(productName).kcal} calories.`)
  try {
    stock.getFromFridge(productName);
    console.log(`You're doing great, ${productName} is good!`)
  } catch (error) {
    console.log(`Caught exception: ${error.message}!`,
    `Throw ${productName} away!`)
  }
})
