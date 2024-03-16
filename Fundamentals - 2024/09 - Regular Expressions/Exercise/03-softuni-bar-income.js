function softUniBarIncome(data) {
    // let regexPattern = /%(?<name>[A-Z]{1}[a-z]+)%[^|$%.]*<(?<product>[A-Za-z0-9]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+\.?\d{0,2}?)\$/;
    let regexPattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+\.?\d{0,2}?)\$/;
    let income = 0;

    for (let row of data) {
        if (row === 'end of shift') {
            break;
        }
        if (regexPattern.test(row)) {
            let match = regexPattern.exec(row);
            let price = Number(match.groups.count) * Number(match.groups.price);
            income += price;
            let customerName = match.groups.name;
            let product = match.groups.product;

            console.log(`${customerName}: ${product} - ${price.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$', '%Maria%<Cola>|1|2.4', '%Valid%<Valid>valid|10|valid20$', 'end of shift']);