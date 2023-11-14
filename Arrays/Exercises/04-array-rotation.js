function arrRotation(arr, rotations) {

    for (let i = 1; i <= rotations; i++) {
        let shift = arr.shift();
        arr.push(shift)
    }
    console.log(arr.join(" "));
}

arrRotation ([51, 47, 32, 61, 21], 2);
arrRotation ([32, 21, 61, 1], 4);
arrRotation ([2, 4, 15, 31], 5);