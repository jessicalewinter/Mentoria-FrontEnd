
// number default methods
const numberValue = 150.783232;
let numberToString = numberValue.toString();
let numberToFixed = numberValue.toFixed(2);

// console.log(numberToString);
// console.log(numberToFixed);

// convert string into number methods
const stringValue = "34.8383";
let numbParseInt = parseInt(stringValue);
let numbParseFloat = parseFloat(stringValue);

// console.log(numbParseInt);
// console.log(numbParseFloat);

// strings methods
const stringMethodsValue = "CARRO FORD KA FORD";
let stringLength = stringMethodsValue.length // conta espaço também
// console.log(stringLength);

let case1 = stringMethodsValue.indexOf("FORD", "7"); // primeira ocorrência da string "FORD" a partir do index(posição) 7
let case2 = stringMethodsValue.lastIndexOf("FORD", "8"); // ultima ocorrencia da string "FORD" a partir do index(posição) 8
console.log(case1);