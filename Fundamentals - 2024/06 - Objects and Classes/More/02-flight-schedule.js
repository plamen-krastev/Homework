function solve(input) {
    let allFlights = input[0];
    let flights = {};
    for (let flight of allFlights) {
        let info = flight.split(' ');
        let key = info.shift();
        let value = '';
        if (info.length > 1) {
            value = info[0] + ' ' + info[1];
        } else {
            value = info[0];
        }
        flights[key] = value;
    }

    let canceled = input[1];
    let statusFlight = {};
    for (let flight of canceled) {
        let [key, value] = flight.split(' ');
        statusFlight[key] = value;
    }

    let status = input[2].toString();

    let keys = Object.keys(flights);
    for (let key of keys) {
        if (statusFlight[key] && status === 'Cancelled') {
            console.log(
                `{ Destination: '${flights[key]}', Status: '${statusFlight[key]}' }`
            );
        }

        if (flights[key] && !statusFlight[key] && status === 'Ready to fly') {
            console.log(`{ Destination: '${flights[key]}', Status: 'Ready to fly' }`);
        }
    }
}

// solve([
//     [
//         'WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     [
//         'DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'
//     ],
//     ['Cancelled']
// ]);

solve([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'
    ],
    ['Ready to fly']
]);