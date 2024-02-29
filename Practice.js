// Array.prototype.myMap = function (cb) {
//     let temp = []
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))


//     }
//     return temp
// }
Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }



    }
    return temp
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// const mul = nums.myMap((num, i, arr) => {
//     return num * 3;
// })
// console.log(mul);

const fil = nums.myFilter((num, i, arr) => {
    return num > 2;

})
console.log(fil)
// const red = nums.reduce((acc, num, i, arr) => {
//     return acc + num;
// }, 1)
// console.log(red)

// Polyfills for Map filter And Reduce

