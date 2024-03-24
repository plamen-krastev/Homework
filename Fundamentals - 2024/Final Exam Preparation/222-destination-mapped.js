function destinationMapped(data) {
    let pattern = /([=|/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(data);
    let result = [];
    let points = 0;
    if (match !== null) {
        while (match !== null) {
            let destination = match.groups.destination;
            result.push(destination);
            points += destination.length;
            match = pattern.exec(data);
        }
        console.log(`Destinations: ${result.join(', ')}`);
        console.log(`Travel Points: ${points}`);
    } else {
        console.log("Destinations: ");
        console.log(`Travel Points: ${points}`);
    }
}

destinationMapped('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapped('ThisIs some InvalidInput');
