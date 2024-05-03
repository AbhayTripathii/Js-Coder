// let myName = "abhay     "
// let mychannel = "code     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyAbhay = function(){
    console.log(`Abhay says hello`);
}

// heroPower.abhay()
// myHeros.abhay()
// myHeros.heyAbhay()
// heroPower.heyAbhay()

// inheritance

const User = {
    name: "code",
    email: "code@example.com"
}

const Student = {
    watchVideo: true
}

const LearningSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: LearningSupport
}

Student.__proto__ = User

// modern syntax
Object.setPrototypeOf(LearningSupport, Student)

let anotherUsername = "coding     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhay".trueLength()
"iceTea".trueLength()