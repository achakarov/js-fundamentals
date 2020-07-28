function dungeonestDark(array) {

    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let isAlive = true;

    let rooms = array[0].split("|");

    for (const dungeon of rooms) {

        let [command, value] = dungeon.split(" ");
        value = Number(value);
        roomCount++;

        if (command == "potion") {
            let healedValue = 0;

            if ((health + value) > 100) {
                healedValue = 100 - health;
                health = 100;
            } else {
                healedValue = value;
                health += value;
            }
            console.log(`You healed for ${healedValue} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command == "chest") {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                isAlive = false;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
        }

    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

dungeonestDark([`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`]);