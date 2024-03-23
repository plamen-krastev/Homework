function fancyBarcode(data) {
    let barcodePattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    let barcodeGroupPattern = /[0-9]/g;

    let barcodeCount = data.shift();

    for (let i = 0; i < barcodeCount; i++) {
        let curBarcode = data[i];
        let matchBarcode = curBarcode.match(barcodePattern);
        if (barcodePattern.test(curBarcode)) {
            let barcodeGroup = matchBarcode[0].match(barcodeGroupPattern);
            if (barcodeGroup === null) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${barcodeGroup.join("")}`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);

fancyBarcode([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);