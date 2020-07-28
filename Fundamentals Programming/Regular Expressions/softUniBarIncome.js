function softUniBarIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.\d]*<(?<product>[\w]+)>[^|$%.\d]*\|(?<quantity>[\d]+)\|[\D]*[\s]*(?<price>[\d]+\.?[\d]+)\$/g;

    let command = pattern.exec(input);
    let totalPrice = 0;

    while (command !== null) {
        let customer = command.groups['customer'];
        let product = command.groups['product'];
        let quantity = Number(command.groups['quantity']);
        let price = Number(command.groups['price']);

        let customerTotal = quantity * price;
        totalPrice += customerTotal;
        console.log(`${customer}: ${product} - ${customerTotal.toFixed(2)}`);

        command = pattern.exec(input);
    }

    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome(
    [
        '%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift'
      ]      
)