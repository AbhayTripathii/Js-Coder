// const tinderUser = new Object()   ------ singelton object
const tinderUser = {} // non-singleton object

// const nahi likhenge because hume dubara declare nahi karna hai 

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// .console.log(tinderUser);

const regularUser = {
    email: "any@gmail.com",
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
const obj3 = Object.assign(obj1, obj2) // without this {} data store in obj1  /////// {} = target, source = obj1,obj2

// easy way to assign this from spread operators ...
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check karna ki ye property kahi hai


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

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