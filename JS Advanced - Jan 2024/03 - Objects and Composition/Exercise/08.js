function rectangle(width, height, color) {
  let firstLetter = color[0].toUpperCase();
  color = firstLetter + color.slice(1);

  let rectObj = {
    width,
    height,
    color,
    calcArea() {
      let area = this.width * this.height;
      return area;
    },
  };
  return rectObj;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
