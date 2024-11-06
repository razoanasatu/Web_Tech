// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
  
  };

  Object.defineProperty(person, "fullname", {
    get : function() {
        return this.firstName + ' ' + this.lastName;
      }
  });
  console.log(person.fullname);

