// using for loop
function case1(number) {
    let sum = 1;
    
    for (let i = 0; i < number; i++) {
        sum = sum + i;
    }
}

// using while loop
function case2(number) {
    let i = 0;
    let sum = 1;

    while(i < number) {
        sum = sum + i;
        i++;
    }
}

// using for...in
function case3(object) {
    for (property in object) {
        console.log(`${property}: ${object[property]}`);
        // console.log(property + ": " + object);
    }
}

// using for...of
function case4(array) {
    for (let item of array) {
        console.log(item);
    }
}

// using do...while
function case5(number) {
    let i = 0;
    do {
        console.log("Aeeee");
        i++;
    } while (false);
}

let myselfObj = {
    name: "Jessica",
    age: 27,
    surname: "Lewinter"
}
// case3(myselfObj);

let groceriesList = ["banana", "apple", "orange", "milk"];
// case4(groceriesList);

case5(2);
