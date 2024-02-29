// data = [1,{ 2, 3, 4]
// data.forEach(function(){ console})
// data.forEachto(function(){ console})


Array.prototype.forEach2 = function (cb) {
    for (var i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }

}
const data = [1, 3, 4, 5, 6, 7, 8]
data.forEach2((el) => {
    console.log(el);
})


Array.prototype.Mymap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp

}
data.Mymap((el) => {
    console.log(el);

})
Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let j = 0; j < this.length; j++) {
        if (cb(this[j], j, this)) {
            temp.push(this[j])
        }

    }
    return temp
}
const more = data.myFilter((dat) => {
    return dat > 2;
})
console.log(more)

Array.prototype.myReduce = function (cb, initialvalue) {
    var accumulator = initialvalue
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator;
};
const sum = data.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)
console.log(sum)