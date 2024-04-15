// function searchIn2DArray(matrix, target) {
//     if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
//         return false;
//     }

//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     let row = 0;
//     let col = cols - 1; // Start from the top-right corner

//     while (row < rows && col >= 0) {
//         if (matrix[row][col] === target) {
//             return true;
//         } else if (matrix[row][col] < target) {
//             row++; // Move down
//         } else {
//             col--; // Move left
//         }
//     }

//     return false;
// }


// const matrix = [
//     [1, 4, 7, 11],
//     [2, 5, 8, 12],
//     [3, 6, 9, 16],
//     [10, 13, 14, 17]
// ];

// const target = 18;
// console.log(searchIn2DArray(matrix, target)); // Output: true

const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
const search2DArr = function (arr, flag) {
    if (!arr || arr.length === 0 || arr[0].length === 0) {
        return false;

    }


}
const val = search2DArr(arr, 16);
console.log(val)