function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");
}

// sayMyName()

function addtwoNo(no1, no2){

    console.log(no1 + no2);
}

function addtwoNo(no1, no2){

    // let result = no1 + no2
    // return result;

    return no1 + no2;  // return keyword dene ke baad hi aap log karva skte hai 
}

// addtwoNo(3, 8) // 1st argument write without variables 
const result = addtwoNo(3, 8)  // 2nd argument write with variables
// console.log("Result:", result);

// EXAMPLES //

// addtwoNo(3, "a")   // 3a
// addtwoNo(3, "5")   // 35
// addtwoNo(3)   // NaN

///////////////////////////////1ST EXAMPLE///////////////////////////////////
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just loged in`;
}

console.log(loginUserMessage());



//////////////////////////////2ND EXAPMLE///////////////////////////////////
function loginUser(username = "Abhay"){
    return `${username} just loged in`;
}
console.log(loginUser("Abhay")); // 3rd argument write with console

