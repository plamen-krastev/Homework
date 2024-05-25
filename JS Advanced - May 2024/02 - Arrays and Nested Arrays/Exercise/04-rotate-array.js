function rotateArray(array, rotation) {
  for (let i = 0; i < rotation; i++) {
    let rotationEl = array.pop();
    array.unshift(rotationEl);
  }
  console.log(array.join(" "));
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
