function storeProvisions(stockProducts, orderedProducts) {

    let products = {};

    stockProducts.forEach((element, i) => {
        if (i % 2 === 0) {
            let product = stockProducts[i];
            let quantity = Number(stockProducts[i + 1]);
            products[product] = quantity;
        }
    });

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);
        if (products[product] === undefined) {
            products[product] = 0
        }
        products[product] += quantity; 
    }

    for (const product in products) {
       console.log(`${product} -> ${products[product]}`); 
    }
}


storeProvisions(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],

    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)