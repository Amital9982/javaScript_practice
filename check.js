let arr = [3, 98, 2, 3, 5, 6, 9, 3, 5]
let duplicate = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            let duplicateExists = false;
        }
        for (let k = 0; k < arr.length; k++) {
            if (duplicate[k] === arr[i]) {
                duplicateExists = true;
            }
        }
        if (!duplicateExists) {
            duplicate.push(arr[i]);
        }
        break;
    }
}
console.log("duplicate values: " + duplicate)