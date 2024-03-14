// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Abhay",
    "full name": "Abhay Tripathi",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "abhay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "abhay@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "abhaytripathi@chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());