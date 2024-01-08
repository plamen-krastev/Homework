function towns(arr) {
    let town = {};

    for (let townInfo of arr) {
        let curInfo = townInfo.split(' | ');
        town.name = curInfo[0];
        town.latitude = Number(curInfo[1]);
        town.longitude = Number(curInfo[2]);
        console.log(
            `{ town: '${town.name}', latitude: '${town.latitude.toFixed(2)}', longitude: '${town.longitude.toFixed(2)}' }`
        );
    }

}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);