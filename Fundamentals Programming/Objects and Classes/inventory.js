function inventory(array) {
    let heroes = [];

    array.forEach(line => {
        let tokens = line.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(", ").sort((a, b) => a.localeCompare(b));

        heroes.push({ name, level, items });
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    })
}

inventory(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
)