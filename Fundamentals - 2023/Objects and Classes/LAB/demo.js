let obj = {
    name: 'Peter',
    age: '18',
    grade: '5.50'
};

for (let key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
}


let person = { name:'Peter', age: 20 };
// for (let key of Object.keys(person)) {
//     console.log(`${key} -> ${person[key]}`);
// }

person.sayHello = () => console.log('Hi, guys');


console.log("-------------");
person.sayHello();


console.log("-------------");
function convertJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}

convertJSON('Ivan', 'Petrov', 'black');

console.log("-------------");

class MyClass {
    constructor(value, secondValue) {
      this.value = value;
      this.secondValue = secondValue;
    }
  
    // Function inside the class
    myFunction(value, value2) {
      return `Hello ${this.secondValue} from myFunction and this is a first ${this.value}!`;
    }
  }
  
  // Creating an instance of the class
  const myInstance = new MyClass("example", "second example");
  
  // Accessing the function within the class
  console.log(myInstance.myFunction()); // Outputs: Hello from myFunction!
  