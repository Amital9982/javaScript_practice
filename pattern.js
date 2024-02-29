
// function triangle(n) {
//     for (let i = 0; i < 2 * n; i++) {
//         let totalRowsInColumn = i > n ? 2 * n - i : i;
//         let row = '';
//         for (let j = 0; j < totalRowsInColumn; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }

// triangle(5);
// function leftTriangle(n) {

//     for (i = 1; i <= n; i++) {
//         let row = "";
//         for (j = 1; j <= i; j++) {
//             row += j;

//         }
//         console.log(row);
//     }
// }
// leftTriangle(5);
// function leftTriangle(n) {

//     for (i = 0; i < n; i++) {
//         let row = "";
//         for (k = 0; k < i; k++) {
//             row += " "
//             console.log(row)
//         }
//         for (j = 0; j < n; j++) {
//             row += "*";

//         }
//         console.log(row);

//     }

// }
// leftTriangle(5);
function square1(row, col) {
    for (j = 0; j < row; j++) {
        let star = ""
        for (i = 0; i < col; i++) {
            if (j == 0 || j == row - 1 || i == 0 || i == col - 1) {
                star += "*";

            }
            else {
                star += " "

            }
            console.log(star)
            console.log("\n")

        }
    }

}
square1(4, 4)