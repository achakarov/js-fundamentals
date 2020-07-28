function furniture(input) {

    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]+)!(?<quantity>[\d]+)/g;

    let command = pattern.exec(input);
    let totalPrice = 0;
    console.log('Bought furniture:');

    while (command !== null) {
        let boughtFurniture = command.groups['furniture'];
        let price = Number(command.groups['price']);
        let quantity = Number(command.groups['quantity']);
        console.log(`${boughtFurniture}`);
        let currentPrice = price * quantity;
        totalPrice += currentPrice;
        command = pattern.exec(input);
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(
    ['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
)