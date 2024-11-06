// Object Constructor

function Person(first, last, age){ //constructor function
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

const satu = new Person('Satu', 'Razoana', 23);
const oyshi = new Person('Jannatul', 'Oyshi', 18);
const mayesha = new Person('Mayesha', 'Tasfiya', 2);

console.log(satu.fullName());