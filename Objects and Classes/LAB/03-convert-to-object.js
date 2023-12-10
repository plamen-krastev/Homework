function solve(jsonStr) {

  let person = JSON.parse(jsonStr);
  let personInfo = Object.entries(person);

  for (let [key, value] of personInfo) {
    console.log(`${key}: ${value}`);
  }

}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');