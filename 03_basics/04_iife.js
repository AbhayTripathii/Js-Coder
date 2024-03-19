// Immediately Invoked Function Expressions (IIFE)

(function easy () {
    //this is Named IIFE
    console.log(`DB connected`)
})();


//==================!ERROR
// ( way() => {
//     console.log(`DB connected Two`)
// })()

//==================RIGHT
( () => {
        //this is Simple IIFE
    console.log(`DB connected Two`)
})();

//==================Write variables
( (name) => {
    //this is Unnamed IIFE
console.log(`DB connected Two ${name}`)
})("Abhay Tripathi")