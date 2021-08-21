// let x;
// console.log(x);
// x=5;
// console.log(x);
// x=null;
// console.log(x);
// let e var da mesma forma só mudando o escopo

// const numero = 23;
// numero = 4;

var contacts = [
    {
        "id": 1,
        "name": "Jessica",
        "age": 27,
    },
    {
        "id": 2,
        "name": "Cacau",
        "age" : 30,
    }
]

let surname = Symbol("surname");
let firstContact = contacts[0];
console.log(firstContact.name);
firstContact[surname] = "algum valor";
console.log(firstContact[surname]);




// for (const contact of contacts) { // for array com of
//     for (const property in contact) { // for object com in
//         console.log(`${property}: ${contact[property]}`);
//     }
// }

// console.log(contacts[0].name);

// contacts[0][name] = "none";

// console.log(contacts[0].name);
