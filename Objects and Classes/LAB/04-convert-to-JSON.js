function solve(name, lastName, hairColor) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    console.log(JSON.stringify(person));
}

solve("George", "Jones", "Brown");
solve("Peter", "Smith", "Blond");
