const user = {
    id: 339,
    name: 'Satu',
    age: 23,
    education: {
        degree: "Masters",
    },
};

// const {name} = user;
// console.log(name);

// const {name: title} = user;
// console.log(title);

// const {education:{degree},} = user;

// console.log(degree);

const {education:{degree: x},} = user;

console.log(x);