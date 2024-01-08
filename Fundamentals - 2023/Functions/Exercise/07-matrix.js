function matrix(num) {

    // for (i = 0; i < num; i++) {
    //     let row = '';
    //     for (j = 0; j < num; j++) {
    //         row += num + ' ';
    //     }
    //     console.log(row);
    // }

    for (row = 1; row <= num; row++) {
        let curRow = `${num} `.repeat(num);
        console.log(curRow);
    }

}

matrix (3);
matrix (7);
matrix (2);