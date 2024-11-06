class Person {
    constructor(name, age) {
      this.Name = name;
      this.Age = age;
    }

    play(status){
        console.log(`${this.Name} is playing ${status}`);
    }
  }

  const person1 = new Person("Satu", 22);
  const person2 = new Person("Oyshi", 16);
  
  person1.play("Well");
  person2.play("Bad");