function convertToJSON(name, lastName, hairColor) {
    let person = {};

    person['name'] = name;
    person['lastName'] = lastName;
    person['hairColor'] = hairColor;

    let personToJSON = JSON.stringify(person);
    console.log(personToJSON);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');