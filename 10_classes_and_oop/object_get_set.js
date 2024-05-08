const User = {
    _email: "a@ab.com",
    _password: "asdf",
  
    get email() {
      return this._email.toUpperCase();
    },
  
    set email(value) {
      this._email = value;
    },
  };
  
  const Tea = Object.create(User);
  console.log(Tea.email);
  