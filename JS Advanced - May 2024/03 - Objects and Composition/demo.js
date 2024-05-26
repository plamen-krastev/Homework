// Object destructuring
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { c, ...props } = obj;
const modifiedObj = {
  ...props,
  c: 12,
};
console.log(obj); // { a: 1, b: 2, c: 3, d: 4 }
console.log(modifiedObj); // { a: 1, b: 2, d: 12, c: 12 }
modifiedObj.f = 18;
console.log(modifiedObj);

console.log("\n##########################\n");

// Object References
let x = { name: "John" };
let y = x;
y.name = "Steve";
console.log(x.name);

console.log("\n##########################\n");

// sorting helper
const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};
let arr = [24, 35, 88, 33, 1434, 346];
console.log(arr.sort(compareNumbers.descending));

console.log("\n##########################\n");

function print() {
  console.log(`${this.name} is printing a page`);
}
function scan() {
  console.log(`${this.name} is scanning a document`);
}
const printer = { name: "ACME Printer", print };
const scanner = { name: "Initech Scanner", scan };
const copier = { name: "ComTron Copier", print, scan };

printer.print();
scanner.scan();
copier.print();
copier.scan();

console.log("\n##########################\n");

function createRect(width, height) {
  const rect = { width, height };
  rect.getArea = () => {
    return rect.width * rect.height;
  };

  return rect;
}
const rectObj = createRect(12, 15);
console.log(rectObj);
console.log(rectObj.getArea());
console.log(createRect(12, 15).getArea());

console.log("\n##########################\n");

function canPrint(device) {
  device.print = () => {
    console.log(`${device.name} is printing a page`);
  };
}
const printerSecond = { name: "ACME second Printer" };
canPrint(printerSecond);
printerSecond.print();
// ACME Printer is printing a page

console.log("\n##########################\n");

// Factory function
function catFactory(name, age) {
  let cat = {
    name,
    age,
  };

  cat.sleep = () => console.log("ZzzZzzZz");

  return cat;
}

const cat = catFactory("Navcho", 9);
const simpleCat = catFactory("Simple", 2);
cat.sleep();
simpleCat.sleep();

console.log("\n##########################\n");

let array = [5, 7, 8, 23, 45, 'Peter', 'Ivan'];
let myJSON = JSON.stringify(array);
console.log(array);
console.log(myJSON);

console.log("\n##########################\n");