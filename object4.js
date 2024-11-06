// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set lang(lang) {
      this.language = lang;
    }
  };
  person.lang = "bn";
  const personArray = Object.values(person);

for(let x of personArray) {
    console.log(x);
}

