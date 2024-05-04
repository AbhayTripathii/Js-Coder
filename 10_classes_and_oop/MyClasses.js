// ES6


/////////////////// From class

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.username.toUpperCase()} , ${this.password}abc , ${
//       this.email
//     }@gmail.com`;
//   }
// }

// const chai = new User("chai", "chai", "123");
// console.log(chai.encryptPassword());


//////////////// From function
// behind the scenes

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  
  User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
  };
  
  User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
  };
  
  const tea = new User("tea", "tea@example.com", "123456");
  
  console.log(tea.encryptPassword());
  console.log(tea.changeUsername());
  