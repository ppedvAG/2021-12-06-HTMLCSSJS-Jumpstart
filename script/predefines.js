// Array
// Eine Liste von Werten
// Objekt
// werden mit [ ] definiert
// Werte werden mit Komma getrennt

// array-literal
let array1 = [10, 50, 100, 27, "Test", true, [1, 4, 5, 6]];

// Array-Constructor
let array2 = new Array(1,4, "§", 5012)


// Erstes Element hat Index 0
// Arrays sind iterierbare Objekte

// Können über Indizes auf die Werte zugreifen
array2[1];
array2.length

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

//Alternative
for (element of array2) {
    console.log(element);
}

// zusammenfügen von arrays:
// array.concat(array2, array3, ....)
// gibt neues array zurück und verändert das alte nicht
let array3 = array1.concat(array2);

// "Suche" nach Element in Array
//array.indexOf(gesuchteElement (, optionale Startposition))
// Gegenstück: array.lastIndexOf(gesuchteElement (, optionale Startposition))

array1.indexOf(50) // Output: 1
array1.indexOf("test") // Output: -1 => -1 bedeutet nicht gefunden

// .join(Seperator)
// Gibt Array als String zurück, zwischen den Elementen wird der Seperator eingefügt
// .pop()
// entfernt das letzte Element aus dem Array und gibt das entfernte Element zurück
// ! Verändert das bestehende Array
// .push(element1, element2, ...)
// Fügt die Elemente am Ende des Arrays an und gibt uns die neue Länge des Arrays zurück
// ! Verändert das bestehende Array
// .shift()
// Entfernt das erste Element aus dem Array und gibt das entfernte Element zurück
// ! Verändert das bestehende Array
// .unshift(element1, element2, ...)
// Fügt Element am Anfang des Arrays an und gibt die neue Länge zurück
// ! Verändert das bestehende Array
// .splice(StartIndex, AnzahlzuLöschendeElemente, element1,elemnt2...)
// Gibt die gelöschten Elemente zurück
// ! Verändert bestehende Array 
// .slice(StartIndex, EndIndex)
// Gibt uns ein neues Array zurück, das bei Start beginnt und bei Ende endet
// Verändert das bestehnde Array nicht
//// .sort() Sortiert das Array alphanumerisch aufsteigen
// ! Verändert das bestehende Array

let uebungsArray = [90, 50, 100, 10, 20, 70, 30, 60, 40, 80];
// Schreibe eine Funktion die das Array soritert zurückgibt,
// aber das bestehende Array nicht verändert

function bubbleSort(array) {
    let newArray = array.slice();
    let len = newArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (newArray[j] > newArray[j + 1]) {
                let temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }
    return newArray;
}

class testFall {
    constructor(test1, test2) {
        this.Attribut1 = test1,
        this.Attribut2 = test2
    }

    sagEtwas() {
        return "Etwas";
    }

    get Attribut1() {
        return this._attribut1;
    }

    set Attribut1(neuerWert) {
        if (typeof(neuerWert) == "number"){
            this._attribut1 = neuerWert;
        }
        else {
            this._attribut1 = 0;
            console.error("Attribut1 muss eine Zahl sein. Wurde auf 0 gesetzt.")
        }
    }
}

let test1 = new testFall(200, "Hallo");
test1.sagEtwas();
test1.Attribut1;
test1.Attribut1 = "EtwasAnderes";

let testString = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam";
testString[5];
testString.charAt(5);
testString.charCodeAt(5); // Gibt uns den Unicode Wert des Buchstaben an der gewünschten Stelle
let neuerString = testString + " Noch was."
let zweiterNeuerString = neuerString.concat(" und noch etwas.")
// Hängt String am Ende des Strings an und gibt neuen String zurück
testString.indexOf("Lorem")
// Sucht nach Buchstaben/Wort und gibt den Index des ersten gefunden Matches zurück
testString.lastIndexOf("Lorem")
// Sucht nach dem letzten aufrtreten des gesuchten Wortes/Buchstabens
// !
let kopierterString = testString.slice(5,10); // kopiert String von Startpos bis Endpos
// Alternative:
kopierterString.substring(0, 2); 
// !
kopierterString.toLowerCase(); // konvertiert den String zu Kleinbuchstaben und gibt einen neuen String zurück
kopierterString.toUpperCase(); // konvertiert den String zu Großbuchstaben und gibt einen neuen String zurück

//! Übung:
// Erstelle eine Funktion, die einen beliebig langen String akzeptiert und am Ende
// in der Konsole die Anzahl der groß/klein Buchstaben und die Länge des gesamten Strings
// ausgibt

function countCase(string) {
    let upper = 0;
    let lower = 0;
    let length = string.length;
    let ignore = [",", ".", "!", ";", "?", " "];
    for (char of string) {
        if (ignore.indexOf(char) > 0)
        {
            continue;
        }
        else if (char === char.toUpperCase()) {
            upper++;
        }
        else {
            lower++;
        }
    }
    console.log(`Der String ist ${length} Zeichen lang. Er besteht aus ${upper} Großbuchstaben und ${lower} Kleinbuchstaben.`);
}

//! Datum
// Date objekt

// Erstellung
let heute = new Date() // gibt das derzeitige Datum mit Uhrzeit zurück
let jetzt = Date.now() // Gibt derzeitiges Datum als Milisekunden zurück
let spezifischesDatum = new Date(2021) // erstellt ein Datum 2021 vergangenen Milisekunden seit dem 
// 01.01.1970
// Gezielte Daten:
let gestern = new Date(2021,11, 8, 9,0,0); 
// Erstellt 08.12.2021 09:00:00

// get/set

gestern.getFullYear() // => 2021
gestern.getMonth() // => 11
gestern.setDate(9) // => weist neuen Tag zu => 09.12.2021
gestern.getHours() // Gibt Stunden zurück => 9
gestern.getMinutes() // Minuten
gestern.getSeconds() // Sekunden
gestern.getDay() // GIbt Tag zwischen 0(Montag) und 6(Sonntag) zurück

let birthDate = new Date(1990, 0, 1);


// ! Math
let pi = Math.PI;
let ln2 = Math.LN2 // Natürliche rLogarithmus von 2
let ln10 = Math.LN10 // Natürliche rLogarithmus von 10
let e = Math.E // eulerische Zahl
let sqrt2 = Math.SQRT2; // QUadratwurzel von 2

let x = 2.734324;
Math.round(x); // rundet ab .5 auf, davor ab
// Aufrunden
Math.ceil(2.1); // rundet auf nächsthöheren Integer
// Abrunden
Math.floor(2.9) // rundet auf den nächstkleineren Integer

//Betrag
Math.abs(-100);

// Kleinste/Größte Zahl
Math.min(2,5,101,2414,432) // Gibt die kleinste der übergebenen Zahlen zurück
Math.max(2,5,101,2414,432) // Gibt uns die höchste der übergeben Zahlen zurück

// Exponentialrechnung bzw WUrzel
Math.pow(2, 5); // => 2^5
Math.sqrt(16) // QUadratwurzel => 4

// Zufällige Zahl:
Math.random() // Zufällige Zahl zwischen Null und 1

// Größere zufällige Zahl:
let rando = Math.floor(Math.random() * 20) // Zufällige Zahl zwischen 0 und 20



// Erstelle eine Funktion, die mit einem Parameter aufgerufen wird
// Die Funktion erstellt eine Zufallszahl zwischen 0 und 100
// Der Parameter ist unser TIpp
// Die FUnktion soll am Ende sagen ob wir richtig getippt haben
function tippGame(tipp) {
    if (typeof(tipp) != "number") {
        console.error("Nur Zahlen werden als input akzeptiert.");
    }
    let random = Math.floor(Math.random() * 100);
    if (tipp === random) {
        console.log("Du hast gewonnen!");
    }
    else {
        console.log(`Leider falsch! ${random} wäre richtig gewesen!`);
    }
}