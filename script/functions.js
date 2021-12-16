// Funktionen
// "Unterprogramme"
// Werden mit dem Keyword function definiert
let globalTest = 1;

function addToGlobal(integer) {
    globalTest += integer;
}
/**
 *Diese Funktion begrüßt "name" und addiert "zahl" auf die globale Variable globalTest
 * @param {*} name 
 * @param {*} zahl 
 * @returns greeter String
 */
function helloWorld(name, zahl) {
    
    let greeting = "Hallo";
    addToGlobal(zahl);
    return greeting + " " +  name;
}

function gibEins() {
    return 1;
}
console.log(function(a,b){return a+b}(20,25));

// Anonyme Funktion
// let multiply = function (a,b) {return a*b};
//Alternative
let multiply = (a,b) => a*b;
let ergebnis = multiply(5,5);


let quadrieren = (a) => {
    return a*a;
}

let zahlenString = "250"
let zahlZwei = parseInt(zahlenString);

function FakultätRecursive(a) {
    if (a == 0 || a == 1) {
        return 1;
    }
    else {
        return a * FakultätRecursive(a - 1);
    }
}

function FakultätLoop(a) {
    let sum = 1;
    for (let i = a; i > 1; i--) {
        sum *= i;
    }
    return sum;
}

console.time("Recursive");
    FakultätRecursive(500);
console.timeEnd("Recursive");

console.time("Loop");
FakultätLoop(500);
console.timeEnd("Loop");

// Erstelle eine Funktion, die zwei Zahlen akzeptiert und einen String 
// die je nach String eine Rechenart ausführt

// beispiel(4, 5, "m") => soll multipliziert werden
// beispiel(4, 5, "a") => soll addiert werden
// beispiel(4, 5, "s") => soll subtrahiert werden
// beispiel(4, 5, "d") => soll dividiert werden

function calculator(intOne, intTwo, calcType) {
    if (calcType == "m") {
        return intOne * intTwo;
    }
    else if (calcType == "a") {
        return intOne + intTwo;
    }
    else if (calcType == "s")
    {
        return intOne - intTwo;
    }
    else {
        return intOne / intTwo;
    }
}

// FizzBuzz
// Wir erstellen eine Funktion die einen Parameter übergeben bekommt
// Bis zu dieser Zahl soll gezählt werden
// Wir wollen dass für jhede Zahl geprüft wird ob sie durch 3 oder 5 
// oder beides teilbar ist
// Fall 3: "Fizz"
// Fall 5: "Buzz"
// Fall 3 & 5 : "FizzBuzz"
// Falls keiner dieser Fälle eintritt soll nur die Zahl ausgegeben werden
// Aufruf: fizzBuzz(Limit)
// Ausgabe in der Konsole

function fizzBuzz(limit)
{
    for (let i = 1; i < limit + 1; i++) {
    let message = "";
    if (i % 3 == 0) {
        message += "Fizz";
    }
    if (i % 5 == 0) {
        message += "Buzz";
    }
    if (message == "") {
        message += i;
    }
        console.log(message)
    }
}

// EinmalEins
// Die FUnktionen soll einen Parameter erhalten und soll dann das gesamte
// Zehner einmaleins für diese Zahl in der Konsole ausgeben

let testString = `GlobalTest ist ${globalTest}`;
// EinmalEins(1)
// "1 * 1 = 1"
// "1 * 2 = 2"
// "1 * 10 = 10"
// `${variable} * ${variable2} = ${variable1 * variabale2}`

function EinmalEins(zahl) {
    for (let i = 1; i < 11; i++) {
        console.log(`${zahl} * ${i} = ${zahl * i}`);
    }
}

function EinmalEinsConcat(zahl) {
    for (let i = 1; i < 11; i++) {
        console.log(zahl + " * " + i + " = " + zahl*i);
    }
}


