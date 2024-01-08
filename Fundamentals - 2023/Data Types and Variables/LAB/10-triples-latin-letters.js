function triples(n) {

    for (let i = 0; i < n; i++) {
        let letter1 = String.fromCharCode(97 + i);
        for (x = 0; x < n; x++) {
            let letter2 = String.fromCharCode(97 + x);
            for (y = 0; y < n; y++) {
                let letter3 = String.fromCharCode(97 + y);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }

}

triples (2);