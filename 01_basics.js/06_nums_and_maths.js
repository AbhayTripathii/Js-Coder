const score = 400
// console.log(score);

const balance = new Number(100)//new object defined karne ke liye
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  ///////always be used in ecommerce like 100.235698===100.23only

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//abs=absolute
// console.log(Math.round(4.6));round of of value
// console.log(Math.ceil(4.2));round of but max value
// console.log(Math.floor(4.9));round of but same front value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 