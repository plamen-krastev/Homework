function guestsList(input) {
    let finalList = [];

    for (let token of input) {
        let action = token.split(' ');
        let name = action[0];
        if (action.length === 3) {
            if (finalList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                finalList.push(name);
            }
        } else {
            if (finalList.includes(name)) {
                let idx = finalList.indexOf(name);
                finalList.splice(idx, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(finalList.join('\n'));
}

guestsList(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
guestsList(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);