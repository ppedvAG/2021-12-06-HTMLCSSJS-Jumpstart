"use strict"

console.log("Hallo Welt!");
// Primitive Typen
// Sind keine Objekte und verfügen über keine Methoden
// Alle Primitiven Typen sind von einem Wrapper-Objekt Umgeben

// string
let Name = "Marius Sommer";
// console.log() gibt einen Wert in der Konsole aus
console.log(Name);
console.log("Hallo " + Name);
// string = Text

// number
// Maximaler Wert:
//  max = 1.7976931348623157e;
let zahl = 258;
let ergebnis = 50 + 78;
console.log(zahl);
console.log(ergebnis);
console.log(58 * 612);
console.log("1" + 1);

// boolean

let bool = true;
let bool2 = false;
console.log(bool);

// null
// Absichtlich "leerer" Wert

// undefined
// Undefined ist wenn die Referenz nicht exisitiert

// bigint
// Muss gezielt erstellt werden:
let bigNum = BigInt("999999999999999999999999999");

// Zeigt an welcher Typ ein Wert ist oder eine Variable:
// typeof(Variable/Wert)
console.log(typeof(bigNum));
/*
Mehrzeiliger Kommentar
*/
let x = 1;
var y = 2;
const z = 3;
function test() {
    if (true) {
        let variable1 = "Hallo";
        var variable2 = "Tschüss";
        console.log(variable1);
        console.log(variable2);
    }
    console.log(variable2)
}





// Gültigkeitsbereiche:
// global-scope Überall aufrufbar
// function-scope In der ganzen Funktion aufrufbar
// block-scope Nur im eigenem Block aufrufbar

//let: wird im jeweiligen Scope definiert und ist nur dort gültig (im function-scope definiert und nur dort gültig)
//var: ist eine Stufe höher definiert als eigentlich geschrieben (im function-scope definiert, aber global gültig)

// Vergleiche

console.log(1 == 1);
// == vergleicht nur den Wert
console.log("1" === 1);
// === vergleicht Typ und Wert der Variable

// Ungleich
console.log(1 != 2);
console.log("1" !== 1);

// Kleiner/größer
console.log(1 < 2);
console.log(20 > 5);
// Kleiner/größer gleich
console.log(20 >= 25);

//Logische Verkettungen
// && und => beide Bedingungen müssen wahr sein
// || oder => Eine der Bedingungen muss wahr sein


// if - Blöcke

// if (Bedingung) { Tue etwas}

let zahlEins = 150;

(zahlEins < 100) ? console.log("Zahl ist kleiner als 100") : console.log("Zahl ist größer als 100");

if (zahlEins < 20) {
    console.log("Die Zahl ist kleiner als 20");
    if (zahlEins >= 10) {
        console.log("Die Zahl ist größer als oder genau 10.");
        if (zahlEins % 2 == 0) {
            console.log("Die Zahl ist gerade.");
        }
        else {
            console.log("Die Zahl ist ungerade")
        }
    }
    else {
        console.log("Die Zahl ist kleiner als 10")
    }
}
else if (zahlEins < 30) {
    console.log("Die Zahl ist kleiner als 30.")
}
else {
    console.log("Die Zahl ist größer als 30.")
}

switch(zahlEins) {
    case 15:
        console.log("DIe Zahl ist 15");
        break;
    case 20:
        console.log("Die Zahl ist 20");
        break;
    default:
        console.log("Keine der erwarteten Fälle ist eingetreten. Wert: " + zahlEins);
        break;
}

// Schleifen oder Loops
// Ermöglichen das mehrfache ausführen eines Code-Blocks
// for-schleife
for (let i = 0; i < 11; i++) {
    console.log(i);
}

// while -schleife
let counter = 0;

while (counter < 11) {
    if (counter === 4)
    {
        console.error(counter);
        counter = 9;
        continue;
    }
    console.log(counter);
    counter++;
    if (counter == 5) {
        console.log("Es ist 5");
        break;
    }
    
}

// do..while-schleife
// counter = 0;
do {
    console.log(counter);
    counter++
    console.info("Sind jetzt in der do..while Schleife")
}
while (counter <= 10);


// loop1:
// for(let i = 10; i < 15; i++) {
    
//     loop2:
//     for(let j = 0; j < i; j++)
//     {
//         console.info("Sind in loop 1");
//         if (j >= (i/2)) {
//             alert(j);
//             console.info("Sind in loop 2");
//             continue loop1;
//         }
//     }
// }

// console.
// log() Gibt Wert in der Konsole aus
// info() Gibt Wert als Info aus, in Firefox mit kleinem i daneben
// error() Gibt den Wert als Fehler aus, mit rotem Hitnergrund rotes x
// debug() GIbt den Wert auf log-Level debug aus, d.h. in Produktion nicht sichtbar und in blauer Schrift
console.info("test");
console.error("Fehler");
console.debug("Debug");

// if, else if und else
// for(), do...while(), while()
//Kopfgesteuert: for(), while()
//Fußgesteuert: do...while()

