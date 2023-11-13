// function condense(arr) {

//     while (arr.length > 1) {
//         for (let i = 0; i < arr.length; i++) {
//             let temp = arr[i] + arr[i + 1];
//             arr[i] = temp;
//         }
//         arr.pop();
//     }
//     console.log(arr[0]);
// }

function condense(arr) {
    while (arr.length > 1) {

        let arrNew = [];
        arrNew.length = arr.length - 1;

        for (let i = 0; i < arr.length - 1; i++) {
            arrNew[i] = arr[i] + arr[i + 1];
        }

        arr = [...arrNew];
    }
    console.log(arr[0]);

}


condense ([2,10,3]);
condense ([5,0,4,1,2]);
condense ([1]);