//Dates
//are calculate from 1 january 1970

//let myDate = new Date();

//console.log(myDate.toString());   //////// Mon Mar 11 2024 15:18:34 GMT+0000(Coordinated Universal Time)


//console.log(myDate.toDateString());   //////// Mon Mar 11 2024

//console.log(myDate.toISOString());   //////// 2024-03-11T15:18:34.974Z

//console.log(myDate.toJSON());   //////// 2024-03-11T15:18:34.974Z

//console.log(myDate.toLocaleDateString());   //////// 3/11/2024

//console.log(myDate.toLocaleString());   //////// 3/11/2024, 3:20:09 PM

//console.log(myDate.toLocaleTimeString());   //////// 3:20:09 PM


// let myCreatedDate = new Date(2075,6,11) === /////// 7/11/2075, 12:00:00 AM

// let myCreatedDate = new Date(2075,6,11,10,5)

// let myCreatedDate = new Date("2024-01-14") ///////  1/14/2024, 12:00:00 AM

let myCreatedDate = new Date("03-11-2024") ///////  3/11/2024, 12:00:00 AM

// console.log(myCreatedDate.toString()); 
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp); //show milliseconds from 1 january 1970 to today
// console.log(myCreatedDate.getTime()); //show milliseconds from 1 january 1970 to 03-11-2024

// console.log(Math.floor(Date.now()/1000)); //in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); 
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
})