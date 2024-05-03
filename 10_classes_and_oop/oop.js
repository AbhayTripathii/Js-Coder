const user = {
    username: "abhay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("give database info");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
const user2 = {
    username: "tripathi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("give database info");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username // same but diffrent from this keyword
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("abhay", 12, true)
const userTwo = new User("Tripathi", 15, false)

console.log(userOne.constructor)
// console.log(userTwo)