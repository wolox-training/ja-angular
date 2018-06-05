export class User {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    locale: string;
  
    constructor(firstName, lastName, email, password) {
      this.first_name = firstName;
      this.last_name = lastName;
      this.email = email;
      this.password = password;
      this.password_confirmation = password;
      this.locale = "en";
    }
  }
  