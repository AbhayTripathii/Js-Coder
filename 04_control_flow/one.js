// if 
const isUserLoggedIn = true
const temperature = 30

if ( temperature <= 40){
    // console.log("Confort zone");
} else {
// console.log("temperature is grator than 50")
}

// console.log("executed")

// <, >, <=, >=, ==, !=, ===(type check), !==


// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");

//  if (balance < 500){
//     console.log("less than 500")
//  } else if(balance < 750) {
//     console.log("less than 750")
//  } else if(balance < 900) {
//     console.log("less than 900")
//  } else {
//     console.log("less than 1200")
//  }



const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

// if (userLoggedIn && debitCard){   // && == if all statement are true i am execute
//     console.log("Allow to buy course")
// }

// if (LoggedInFromEmail || LoggedInFromGoogle){  // || any statement are true i am execute
//     console.log("User Logged in")
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 20
val1 = null ?? 15 ?? 51

console.log(val1);


// Ternary operator

// consition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");