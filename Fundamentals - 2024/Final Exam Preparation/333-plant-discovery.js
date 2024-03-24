function plantDiscovery(data) {
    let count = Number(data.shift());
    // plants = { Name: { rarity: , rating: } };
    let plants = {};
    for (let i = 0; i < count; i++) {
        let tokens = data
            .shift()
            .split('<->');
        let plant = tokens[0];
        let rarity = Number(tokens[1]);
        plants[plant] = {
            rarity: rarity,
            rating: 0,
            votes: 0
        };
    }

    let command = data.shift();
    while (command !== 'Exhibition') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let plant = tokens.shift();
        if (plant in plants) {
            if (action === 'Rate:') {
                let rating = Number(tokens[1]);
                plants[plant].rating += rating;
                plants[plant].votes++;
            } else if (action === 'Update:') {
                let rarity = Number(tokens[1]);
                plants[plant].rarity = rarity;
            } else {
                plants[plant].rating = 0;
                plants[plant].votes = 0;
            }
        } else {
            console.log('error');
        }
        command = data.shift();
        if (command === "Exhibition") {
            console.log('Plants for the exhibition:');
            let plantsArray = Object.entries(plants);
            for (let plant of plantsArray) {
                let averageRating = 0;
                if (plant[1].rating !== 0) {
                    averageRating = plant[1].rating / plant[1].votes;
                }
                console.log(
                    `- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${averageRating.toFixed(2)}`
                );
            }
        }
    }
}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);

plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]);