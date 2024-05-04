class User {
    constructor(username) {
      this.username = username;
    }
  
    logMe() {
      console.log(`USERNAME is ${this.username}`);
    }
  }
  
  class Teacher extends User {
    constructor(username, enail, password) {
      super(username); // refrense from User ---> go inside and inject
  
      this.email = this.email;
      this.password = password;
    }
  
    addCourse() {
      console.log(` A new course was added by ${this.username}`);
    }
  }
  
  const chai = new Teacher("chai", "chai@code.com", "123");
  chai.addCourse();
  const masalaChai = new User("masalaChai");
  
  masalaChai.logMe();
  // console.log(chai instanceof masalaChai);
  console.log(chai instanceof Teacher);
  console.log(chai instanceof User);
  