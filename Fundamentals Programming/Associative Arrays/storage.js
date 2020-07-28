function storage(input) {

    let storage = new Map();
    input.forEach(line => {
        let [item, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (storage.has(item)) {
            let oldQuantity = storage.get(item);
            storage.set(item, oldQuantity + quantity)
        } else {
            storage.set(item, quantity);
        }

    });

    //    for (let key of storage.keys()){
    //        console.log(`${key} -> ${storage.get(key)}`); 
    //    }
    for (let kvp of storage.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)