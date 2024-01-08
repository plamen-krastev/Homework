function employes(arr) {
    let person = {};

    for (let name of arr) {
        let curEl = name;
        person.name = curEl;
        person.number = curEl.length;
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}

employes(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employes(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);