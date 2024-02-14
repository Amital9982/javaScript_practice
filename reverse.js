// let j = 0;
function reverse(str) {

    let r = "";

    for (let i = str.length - 1; i >= 0; i--) {
        r = r + str[i];

    }
    return r;
}
const arr = "Maynk rathore";
const value = reverse(arr);
console.log(value)