function addAndRemoveElements(data) {
  number = 0;
  let result = [];
  for (i = 0; i < data.length; i++) {
    curCommand = data[i];
    number++;
    curCommand === "add" ? result.push(number) : result.pop();
  }

  if (result.length > 0) {
    result.forEach((el) => console.log(el));
  } else {
    console.log("Empty");
  }
}

// addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
