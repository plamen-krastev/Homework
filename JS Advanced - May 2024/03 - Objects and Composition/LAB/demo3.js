function factory(library, orders) {
  let result = [];
  for (let request of orders) {
    let orderObject = {};
    const { template, parts } = request;
    orderObject = template;
    for (let part of parts) {
      orderObject[part] = library[part];
      console.log(library[part].toString());
    }
    // console.log(orderObject);
    result.push(orderObject);
  }
  return result;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];
const products = factory(library, orders);
console.log(products);
