class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // use of _ is locate for privete property anyone can't access
  // but after 2022 _ is going to be removed and write something #
  // we create get, set methods but not write methods like this
  // console.log(User._email()) // with curly brases
  // get, set overwrite property on methods

  // get data ko leke aate time overwrite kar diya
  // set data ko deke ana hai

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    // return this._password.toUpperCase();
    //OR
    return `${this._password}abhay`;
  }

  set password(value) {
    this._password = value; // constructor bhi set kar raha hai aur set bhi set kar raha hai isliye hum new key banayenge _password jaisa
  }
}
  
const abhay = new User("a@bhay.ai", "pass");
console.log(abhay.password);
console.log(abhay.email);
  