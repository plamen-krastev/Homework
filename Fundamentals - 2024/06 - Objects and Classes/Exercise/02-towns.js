function towns(input) {
    let towns = {};
    for (let info of input) {
        let [town, latitude, longitude] = info.split(' | ');
        towns.town = town;
        towns.latitude = Number(latitude).toFixed(2);
        towns.longitude = Number(longitude).toFixed(2);
        console.log(towns);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);