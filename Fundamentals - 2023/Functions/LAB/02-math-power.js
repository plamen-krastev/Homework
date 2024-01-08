function mathPower(n, grading) {
    let result = 1;

    for (i = 0; i < grading; i++) {
        result *= n;
    }

    console.log(result);

}

mathPower (2, 8);
mathPower (3, 4);