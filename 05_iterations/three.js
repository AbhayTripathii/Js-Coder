// for of
// used for Array

// ["", "", ""]
// [{}, {}, {}]

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) { // this object(arr) is kis chiz par loop par lagana hi
    // console.log(num)
}

const greets = "Abhay Tripathi"

for (const greet of greets) {
    // console.log(`Each value is ${greet}`);
    
}

//maps

const map = new Map()

map.set('IN', "India")  
map.set('USA', "United states of America")  
map.set('FR', "France")  
map.set('IN', "India")  

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}