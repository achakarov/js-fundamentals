function vacation(groupNum, groupType, day) {

    let price = 0;
    let totalPrice = 0;

    switch (groupType) {
        case "Students":

            if (day == "Friday") {
                price = 8.45;
            } else if (day == "Saturday") {
                price = 9.80;
            } else if (day == "Sunday") {
                price = 10.46;
            }

            if (groupNum >= 30) {
                totalPrice = 0.85 * (groupNum * price)
            } else {
                totalPrice = groupNum * price;
            }
            break;

        case "Business":

            if (day == "Friday") {
                price = 10.90;
            } else if (day == "Saturday") {
                price = 15.60;
            } else if (day == "Sunday") {
                price = 16;
            }

            if (groupNum >= 100) {
                totalPrice = (groupNum - 10) * price;
            } else {
                totalPrice = groupNum * price;
            }
            break;

        case "Regular":

            if (day == "Friday") {
                price = 15;
            } else if (day == "Saturday") {
                price = 20;
            } else if (day == "Sunday") {
                price = 22.50;
            }

            if (groupNum >= 10 && groupNum <= 20) {
                totalPrice = 0.95 * (groupNum * price);
            } else {
                totalPrice = groupNum * price;
            }

            break;

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);



}

vacation(40,
    "Regular",
    "Saturday"
)