function rectangle(width, height, color) {
  let colorWithFirstCapitalLetter = color[0].toUpperCase() + color.slice(1);
  let rectangleObj = {
    width,
    height,
    color: colorWithFirstCapitalLetter,

    calcArea() {
      return this.width * this.height;
    },
  };

  return rectangleObj;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
