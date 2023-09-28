const {products} = require('./products.js') 

function findProductByName(productName){
    return products.find(product => product.name === productName);
}

const searchedProduct = findProductByName("mango");
console.log(searchedProduct);r