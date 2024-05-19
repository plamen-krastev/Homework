function evenPositionElement(data) {
  console.log(data.filter((_, index) => index % 2 === 0).join(" "));
}

evenPositionElement(["20", "30", "40", "50", "60"]);
evenPositionElement(["5", "10"]);
