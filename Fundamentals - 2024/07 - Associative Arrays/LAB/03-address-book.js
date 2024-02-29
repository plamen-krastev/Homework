function solve(input) {
    let addressBook = {};
    for (let person of input) {
        let [name, address] = person.split(':');
        addressBook[name] = address;
    }

    // let sortedAddressBook = Object
    //     .entries(addressBook)
    //     .sort((a, b) => a[0].localeCompare(b[0]));

    let sortedAddressBook = Object
        .entries(addressBook)
        .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let [name, address] of sortedAddressBook) {
        console.log(`${name} -> ${address}`);
    }
}

// solve(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);

solve([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);