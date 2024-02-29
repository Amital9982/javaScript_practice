//output  based question 

const person = { name: "Arpit" };
function sayHi(age) {
    return `${this.name} is ${age}`

}
console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));
