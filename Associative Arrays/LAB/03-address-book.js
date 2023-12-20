function solve(arr) {
    let addressBook = {};
    //add to object:
    for (let row of arr) {
        let [curName, curAddress] = row.split(':');
        addressBook[curName] = curAddress;
    }

    // convert to array:
    let entries = Object.entries(addressBook);

    // sort array:
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    // add to address book sorted:
    addressBook = Object.fromEntries(entries);

    // print the output:
    for (let [name, address] of Object.entries(addressBook)) {
        console.log(`${name} -> ${address}`);
    }
}

// solve(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']);

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);