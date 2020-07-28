function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let currentFight = 1;
    let helmetRepairsNeeded = 0;
    let swordRepairsNeeded = 0;
    let shieldRepairsNeeded = 0;
    let armorRepairsNeeded = 0;

    while (currentFight <= lostFightsCount) {

        if (currentFight % 2 == 0) {
            helmetRepairsNeeded++;
        }

        if (currentFight % 3 == 0) {
            swordRepairsNeeded++;
        }

        if (currentFight % 2 == 0 && currentFight % 3 == 0) {
            shieldRepairsNeeded++;
        }

        armorRepairsNeeded = Math.floor(shieldRepairsNeeded / 2);

        currentFight++;
    }
    let moneyHelmet = helmetRepairsNeeded * helmetPrice;
    let moneySword = swordRepairsNeeded * swordPrice;
    let moneyShield = shieldRepairsNeeded * shieldPrice;
    let moneyArmor = armorRepairsNeeded * armorPrice;

    let totalExpenses = moneyHelmet + moneySword + moneyShield + moneyArmor;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);


}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200

)