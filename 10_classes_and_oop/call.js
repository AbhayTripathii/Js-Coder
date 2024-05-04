function setUsername(username) {
    //complex database calls
    this.username = username;
    console.log("call this");
  }
  
  function createUser(username, email, password) {
    setUsername.call(this, username); // take call, refrence from out of scope
  
    this.email = email;
    this.password = password;
  }
  
  const chai = new createUser("code", "abhay@example.com", "121212");
  console.log(chai);
  