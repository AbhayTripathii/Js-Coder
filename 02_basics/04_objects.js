// const tinderUser = new Object()   ------ singelton object
const tinderUser = {} // non-singleton object

// const nahi likhenge because hume dubara declare nahi karna hai 

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// .console.log(tinderUser);

const regularUser = {
    email: "abhay@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Abhay",
            lastName: "Tripathi"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2) // merge in objects like this
// const obj3 = Object.assign(obj1, obj2) // without this {} data store in obj1  /////// {} = target, source = obj1,obj2

// easy way to assign this from spread operators ...
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check karna ki ye property kahi hai


//de-structure of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// uses of this value like this 


// 1 // const print = course.courseInstructor ///////////////////////


/// but if we are log this statement many times we are write code like this

// a simple way to code de-structure 

/* 2 */ const {courseInstructor} = course
console.log(courseInstructor);

/* 3 */ const {courseInstructor: instructor} = course
console.log(instructor);


/*///////////////////example//////////////////////////
const navbar = () => {
}
navbar(campany = "abhay")
/////////////////////////////////////////////*/


// API json code

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]