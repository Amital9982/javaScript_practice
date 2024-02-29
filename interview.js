// var num = prompt("please enter number");
// var temp = num;
// var lengthofDigit = num.toString().length
// var sum = 0;
// while (temp > 0) {
//     var digit = temp % 10;
//     console.log(digit)
//     sum += digit ** lengthofDigit;
//     console.log(sum)
//     temp = parseInt(temp / 10);
//     console.log(temp);
//     console.log("---------");
// }
// if (sum == num) {
//     alert("the given number is a armstrong number : " + num);
// } else {
//     alert("given no. is not a palindrome no.")

// }
// function duplicate(arr) {
//     let newarr = [...arr, ...arr];
//     return newarr
// }

// let arr = [1, 2, 3];

// let dup = duplicate(arr);
// console.log(dup);

// if (arr == dup) {
//     alert("yes")

// } else {
//     alert("no")
// }
function findDuplicates1(arr) {
    // let occurance = {};
    // let duplicate = [];
    let sortedarry = arr.slice().sort();
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        // let currentelemt = arr[i];
        // if (occurance[currentelemt] === undefined)
        if (sortedarry[i + 1] === sortedarry[i]) {
            duplicate.push(sortedarry[i]);
            // occurance[currentelemt] = 1;
        }
    }
    return duplicate;
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10, 9, 12, 5, 14]
const duplicateValues1 = findDuplicates1(arr2);
console.log("Duplicate values in the array:", duplicateValues1);
const uniqueDuplicateValues1 = [...new Set(duplicateValues1)];
console.log("Unique duplicate values in the array:", uniqueDuplicateValues1);
function createPyramid(rows) {
    let pyramid = "";
    for (let i = 1; i <= rows; i++) {

        for (let j = 1; j <= rows - i; j++) {
            pyramid += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            pyramid += "*";
        }

        pyramid += "\n";
    }
    return pyramid;
}

console.log(createPyramid(5));
function findDuplicates(arr) {
    let occurance = {};
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        let currentelemt = arr[i];
        if (occurance[currentelemt] === undefined) {
            occurance[currentelemt] = 1;
        } else {
            duplicate.push(currentelemt);
            occurance[currentelemt]++;
        }
    }
    return duplicate;
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10, 9, 12, 5, 7, 14, 5];
const duplicateValues = findDuplicates(arr1);
console.log("Duplicate values in the array:", duplicateValues);
const uniqueDuplicateValues = [...new Set(duplicateValues)];
console.log("Unique duplicate values in the array:", uniqueDuplicateValues);
let arry = [1, 2, 5, 3, 4, 8, 8, 1, 3, 0, 0];
let dupct = [];
for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            let dep = false;
            for (let k = 0; k < arr.length; k++) {
                if (dupct[k] === arr[i]) {
                    dep = true;
                    break;
                }
            }
            if (!dep) {
                duplicate.push(arr[i]);
            }
            break;
        }
    }
}
