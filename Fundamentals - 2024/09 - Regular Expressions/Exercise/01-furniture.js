function furniture(data) {
    let pattern = /(?<item>[A-Z][A-Za-z]+)<<(?<price>[0-9]+\.?[0-9]*)\!(?<count>\d+)/;
    let totalPrice = 0;
    console.log("Bought furniture:");
    for (let line of data) {
        if (line === 'Purchase') {
            break;
        }
        if (pattern.test(line)) {
            let info = pattern.exec(line);
            let price = Number(info.groups.price) * Number(info.groups.count);
            totalPrice += price;
            console.log(info.groups.item);
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

// furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);

furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);