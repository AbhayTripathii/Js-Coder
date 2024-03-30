// for 

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is correct")        
    }
    // console.log(element)
    
}

// console.log(element)   dosn't run after the scope end


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop ${i}`) 
        // console.log(i + ' * ' + j + ' = ' + i * j)
    }
    
}

const myArray = ["Cap", "Iron", "Thor"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}



// break and continue

for (let index = 1; index <= 20; index++){
    console.log(`value of i is ${index}`);
   
}