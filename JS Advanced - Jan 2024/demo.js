const words = ['banana', 'apple', 'date', 'cherry'];
console.log(words);
const sorted = words.sort((a, b) => a.localeCompare(b));
// sorted is now ['apple', 'banana', 'cherry', 'date']

console.log(words);
console.log(sorted);