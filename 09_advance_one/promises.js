//++++++++++++++ Promise One +++++++++++++++++++++++

const promiseOne = new Promise(function(resolve, reject){
    //do an sync task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise consumed");
})

//++++++++++++++ Promise Two +++++++++++++++++++++++

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})


//++++++++++++++ Promise Three +++++++++++++++++++++++

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Abhay", email: "abhay@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);    
})


//++++++++++++++ Promise four +++++++++++++++++++++++


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "abhay", password: "123456789"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))


//++++++++++++++ Promise Five +++++++++++++++++++++++


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "javascript", password: "123456789"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/abhaytripathii')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// ++++++++++ OR

fetch('https://api.github.com/users/abhaytripathii')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))