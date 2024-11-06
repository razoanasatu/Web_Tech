// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fullname() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  console.log(person.fullname);

