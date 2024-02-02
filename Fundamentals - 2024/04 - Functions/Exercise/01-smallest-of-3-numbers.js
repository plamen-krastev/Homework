function smallestOf3Numbers(num1, num2, num3) {

    let smaller = smallestOf2Numbers(num1, num2);
    if (smaller < num3) {
        console.log(smaller);
    } else {
        console.log(num3);
    }

    function smallestOf2Numbers(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
}

smallestOf3Numbers(2, 5, 3);
smallestOf3Numbers(600, 342, 123);
smallestOf3Numbers(25, 21, 4);
smallestOf3Numbers(2, 2, 2);