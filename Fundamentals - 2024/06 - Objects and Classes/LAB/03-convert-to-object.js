function convertToObject(string) {
    let person = JSON.parse(string);
    let personInfo = Object.entries(person);
    for (let info of personInfo) {
        console.log(`${info[0]}: ${info[1]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');