// this is challenge ---> to create a prototype for give trueLength of extra spacebar without using trim() methods

// let myName = "abhay     ";
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "web",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// humne yaha par ek abhay name se prototype create kiya
Object.prototype.abhay = function () {
  console.log("hey this is an Object");
};

Array.prototype.heyAbhay = function () {
  console.log(`hey this is an array`);
};

// heroPower.abhay();

// myHeros.abhay();
// myHeros.heyAbhay();
// heroPower.heyAbhay();

// inheritance

const User = {
  name: "abhay",
  email: "abhay@gmail.com",
};

const student = {
  learn: true,
};

const learnSupport = {
  isAvailable: false,
};

const TAsupports = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: learnSupport,
};

student.__proto__ = User;

// moder syntax

Object.setPrototypeOf(learnSupport, student);

let anotherUserName = "chaiaurcode    ";

// create a prototype for string
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"abhay".trueLength();
"annu    ".trueLength();
"shivam    ".trueLength();
"created    ".trueLength();