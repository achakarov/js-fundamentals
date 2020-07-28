function muOnline(input) {

    let health = 100;
    let bitcoins = 0;
    let bestDungeon = 0;

    let dungeons = input.split("|");

    for (const dungeon of dungeons) {
        let dungeonSplit = dungeon.split(" ");
        let command = dungeonSplit[0];
        let value = Number(dungeonSplit[1]);
        bestDungeon++;

        if (command == "potion") {
            let healedWith = value;

            if (health + value > 100) {
                healedWith = 100 - health;
                health = 100;
            } else {
                health += value;
            }
            console.log(`You healed for ${healedWith} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == "chest") {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestDungeon}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')