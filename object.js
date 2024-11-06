const car = {
    //Object property
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",

    //Object method
    start: function(){
        this.drive();
        console.log("car has started");
    },

    drive: function(){
        console.log("car is driving");
    },
    
};

console.log("car is driving F");

//Object accessing way//
console.log(car.color);
console.log(car["weight"]);
car.start();