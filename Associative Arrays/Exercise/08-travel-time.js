function solve(arr) {

    // we need object in object. Create empty object:
    let travelGuide = {};

    // population objects
    for (let row of arr) {
        let [country, town, cost] = row.split(' > ');
        cost = Number(cost);

        if (country in travelGuide) {
            if (town in travelGuide[country]) {
                if (cost < travelGuide[country][town]) {
                    travelGuide[country][town] = cost; // change cost
                }
            } else {
                travelGuide[country][town] = cost; //add new town end cost
            }
        } else {
            travelGuide[country] = {
                [town]: cost
            }; // add new country , town and cost
        }
    }

    let entries = Object.entries(travelGuide);
    // sorting by country 
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    // print the output
    for (let [country, towns] of entries) {
        let townInfo = Object.entries(towns);
        // sorting by cost
        townInfo.sort((a, b) => a[1] - b[1]);
        let info = `${country} ->`;
        for (let [town, cost] of townInfo) {
            info += ` ${town} -> ${cost}`;
        }
        console.log(info);
        // console.log(town, cost);
    }
}

// solve ([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);
  
solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);