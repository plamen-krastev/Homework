function createSortedList() {
  let sorterList = {
    numbers: [],
    size: 0,
    add(index) {
      this.numbers.push(index);
      this.numbers.sort((a, b) => a - b);
      this.size = this.numbers.length;
    },
    remove(index) {
      if (index < this.numbers.length && index >= 0) {
        this.numbers.splice(index, 1);
        this.numbers.sort((a, b) => a - b);
        this.size = this.numbers.length;
      }
    },
    get(index) {
      if (index < this.numbers.length && index >= 0) {
        return this.numbers[index];
      }
    },
  };

  return sorterList;
}

createSortedList();
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list.numbers);
