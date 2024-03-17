function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");
}

// sayMyName()

function addtwoNo(num1, num2){

    // console.log(num1 + num2);
}

function addtwoNo(num1, num2){

    // let result = num1 + num2
    // return result;

    return num1 + num2;  // return keyword dene ke baad hi aap log karva skte hai 
}

// addtwoNo(3, 8) // 1st argument write without variables 
const result = addtwoNo(3, 8)  // 2nd argument write with variables
// console.log("Result:", result); 3rd argument from console

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

// console.log(loginUserMessage());



//////////////////////////////2ND EXAPMLE///////////////////////////////////
function loginUser(username = "Abhay"){
    return `${username} just loged in`;
}
// console.log(loginUser("Abhay")); // 3rd argument write with console





//////////////////// REST OPERATORS USING /////////////////////////

// function addCartShoping(...num1) {
//     return num1;
// }

// console.log(addCartShoping(2300, 400, 345, 456, 234))

////////2nd example ////////
function addCartShoping(val1, val2, ...num1) { //val1, val2 invisible because baki ...num ye show hoga 
    return num1;
}

// console.log(addCartShoping(2300, 400, 345, 456, 234))


/////////////////How to use objects in functions


// const user = {
//     username: "Abhay",
//     price: 199
// }

//1st option to make object then write keywords in callback function  //////

function handleObject(objectFunction) {
    // console.log(`Username is ${objectFunction.username} and price is ${objectFunction.price}`)
}

// handleObject(user)

//2nd option to make object in callback function

handleObject({
    username: "Abhay",
    price: 199
})

//array in function
const myNewArray = [200, 100, 400, 500, 8,] //1st option

function returnSecondValue(getArray){
    return getArray[1]
}


// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 100, 400, 500, 8,])); //2nd option
