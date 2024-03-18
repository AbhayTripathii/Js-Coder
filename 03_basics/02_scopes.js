//scope

//outside is global scope

let a = 300;
if(true){   // inside of {---}, this is local scope 
    let a = 10
    // const b = 20
    // var c = 30
    console.log("Inner :", a)
    // c = 30 same as var keyword
}

console.log(a);
// console.log(b);
// console.log(c);