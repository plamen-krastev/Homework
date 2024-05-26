function createRect(width, height) {
  const rect = { width, height };
  rect.getArea = () => {
    return rect.width * rect.height;
  };
  return rect;
}

console.log(createRect(12, 15).getArea());

console.log("\n##########################\n");

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

