function pirates(data) {
    // cities = { Tortuga: { population: , gold: } };
    let cities = {};
    let cityInfo = data.shift();

    while (cityInfo !== "Sail") {
        let [city, population, gold] = cityInfo.split('||');
        population = Number(population);
        gold = Number(gold);
        if (city in cities) {
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = {
                population: population,
                gold: gold
            };
        }
        cityInfo = data.shift();
    }

    let token = data.shift();
    while (token !== "End") {
        let command = token.split("=>");
        let action = command.shift();
        if (action === "Plunder") {
            let [city, population, gold] = command;
            population = Number(population);
            gold = Number(gold);
            if (city in cities) {
                cities[city].population -= population;
                cities[city].gold -= gold;
                console.log(
                    `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
                );
                if (cities[city].population <= 0 || cities[city].gold <= 0) {
                    delete cities[city];
                    console.log(`${city} has been wiped off the map!`);
                }
            }
        } else if (action === "Prosper") {
            let [city, gold] = command;
            gold = Number(gold);
            if (gold <= 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[city].gold += gold;
                console.log(
                    `${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`
                );
            }
        }
        token = data.shift();
    }
    let citiesLeft = Object.entries(cities);
    if (citiesLeft.length > 0) {
        console.log(`Ahoy, Captain! There are ${citiesLeft.length} wealthy settlements to go to:`);
        for (let cityInfo of citiesLeft) {
            console.log(
                `${cityInfo[0]} -> Population: ${cityInfo[1].population} citizens, Gold: ${cityInfo[1].gold} kg`
            );
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
// pirates([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"
// ]);

pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);