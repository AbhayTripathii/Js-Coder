//scope

//outside is global scope
// outside scope merge with inside scope
// but inside scope never merge with outside scope

let a = 300;
if(true){   // inside of {---}, this is local scope 
    let a = 10
    // const b = 20
    // var c = 30
    // console.log("Inner :", a)
    // c = 30 same as var keyword
}

// console.log(a);
// console.log(b);
// console.log(c);


// ++++++++++++++++++++++++++PART 2 +++++++++++++++++++++++++++++++++

function one(){
    const username = "Abhay"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website) //error! = because this log is outside of scope

    two()
}
// one()

if(true) {
    const username = "Abhay"
    if (username === "Abhay") {
        const website = " youtube"
        // console.log(`Hii i'm ${username} i study from${website}.`)
    }

    // console.log(website); //error! = because this log is outside of scope
}

// console.log(username)


// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

//first declare in fuunction description
console.log(addOne(25));
function addOne(num) {
    return num + 10
}

// firsty delare in variable hold function ---- !error
addTwo(25)
const adding = function addTwo(num) {
    return num + 10
}

