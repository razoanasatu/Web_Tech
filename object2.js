const person = {
   mame: "John",
   age: 50,
   city: "New york"
};

const personArray = Object.values(person);

for(let x of personArray) {
    console.log(x);
}