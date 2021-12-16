let testString = "Max Mustermann";

// object literal
const tisch1 = {Beine: 1, Material: "Eiche", Ablageflaeche: "50 cm2", beschreibe: function() {
    return `Anzahl Beine: ${this.Beine}, Materila: ${this.Material}`  
}};

// new Object() - Syntax

const tisch2 = new Object();
tisch2.Beine = 2;
tisch2.Material = "Fichte";
tisch2.Ablageflaeche = "100cm2";
tisch2["Beine"] // output: 2
tisch2.Beine // output: 2

let Beine = 4;
let Material = "Buche";
let Ablageflaeche = "120cm2";
let tisch3 = {Beine, Material, Ablageflaeche};
// Vordefinierte Objekte:
/*
!String-Obekt
Math-Objekt
Number-Objekt
BigInt-Objekt
!Array-Objekt
Date-Objekt
*/

let person = {
    name: {
        firstName: "Vorname",
        lastName: "Nachname"
    },
    age: 28
}

function beschreibe() {
    return `Der Tisch hat ${this.Beine} Beine, besteht aus ${this.Material} und hat eine
    Ablagefläche von ${this.Ablageflaeche}`;
}

function Tisch(Beine, Material, Ablageflaeche) {
    this.Beine = Beine,
    this.Material = Material,
    this.Ablageflaeche = Ablageflaeche,
    this.beschreibe = beschreibe;
}

let tisch4 = new Tisch(4, "Stahl", "220cm2");
let tisch5 = new Tisch(1, "Fichte", "40cm2");
tisch5.schubladen = 5;
// instanceof
console.log(tisch4 instanceof Tisch) // Output: true, da der Konstruktor benutzt wurde

//for in Schleife

for (property in testString) {
    console.log(`Schlüssel: ${property} Wert: ${testString[property]}`); // Output: eigenschaften + wert
}

// for of schleife
// Nur für iteriebare Objekte
// Also alles was mit Indizes auch abrufbar ist
// Z.B: String oder ein Array (Liste)
for (char of testString)
{
    console.log(char); //output: einzelnen Buchstaben
}

// Klassen



// Erstelle eine Klasse Auto
// Benutze dafür die class-Syntax
// Eigenschaften: Marke, Modell, Baujahr, Motorzustand (Ein/aus), Aktuelle Geschwindigkeit
// Maximale Geschwindigkeit
// Methode: MotorAnAus, Beeschleunige() Darf Maximale geschwindigkeit nicht überschreiten
// Erstelle eine Instanz dieser Klasse und probiere die Methoden
// class Person {
//     constructor (vorname, nachname, alter, geschlecht) {
//         this.Name = {firstName: vorname, lastName: nachname},
//         this.Age = alter,
//         this.Gender = geschlecht
//     }
//     vorstellen() {
//         return `Mein Name ist ${this.Name.firstName} ${this.Name.lastName} und ich bin ${this.Age} Jahre alt.`;
//     }
//     geburtstag() {
//         this.Age += 1;
//     }
//     set Age(alter) {
//         if (alter && typeof(alter) == "number") {
//             this._age = alter;
//         }
//         else {
//             console.error("Keine Zahl.")
//         }
//     }
//     get Age() {
//         return this._age;
//     }
// }
// let person1 = new Person("Erika", "Mustermann", 39, "w")

class Auto {
    constructor (marke, modell, baujahr, maxGeschwindigkeit) {
        this.Marke = marke,
        this.Modell = modell,
        this.Baujahr = baujahr,
        this.MaxGeschwindigkeit = maxGeschwindigkeit,
        this.Motor = false,
        this.AktuelleGeschwindigkeit = 0
    }
    MotorAnAus() {
        if (this.Motor == true) {
            this.Motor = false;
        }
        else {
            this.Motor = true;
        }
        // this.Motor = !this.Motor; Abkürzung
    }

    Beschleunige(neueGeschw) {
        let temp = this.AktuelleGeschwindigkeit + neueGeschw;
        if (temp > this.MaxGeschwindigkeit) {
            this.AktuelleGeschwindigkeit = this.MaxGeschwindigkeit;
        }
        else if (temp < 0) {
            this.AktuelleGeschwindigkeit = 0;
        }
        else {
            this.AktuelleGeschwindigkeit = temp;
        }
    }
}

let bmw = new Auto("BMW", "X2", 2020, 220);

//Personen-Klasse
//Eigenschaft: Vorname, Nachname, Alter
// Konto-Klasse
// Props: Kontoinhaber (Objekt-Person), Kontostand, Limit
// Kontoinhaber mit setter
// Konto darf erst ab 18 erstellt werden
// Methoden: Einzahlung(), Auszahlung(), Limit ändern

class Person {
    constructor (vorname, nachname, alter) {
        this.Vorname = vorname,
        this.Nachname = nachname,
        this.Alter = alter
    }
}

class Konto {
    constructor (inhaber, kontostand, limit) {
        this.Inhaber = inhaber,
        this.Kontostand = kontostand,
        this.Limit = limit
    }

    get Inhaber() {
        return this._inhaber;
    }

    set Inhaber(Person) {
        if (Person.Alter >= 18) {
            this._inhaber = Person;
        }
        else {
            // console.error("Ein eigenes Konto kann erst ab 18 erstellt werden.")
            throw (
                new Error("Ein eigenes Konto kann erst ab 18 erstellt werden.")
            )
        }
    }

    get Limit() {
        return this._limit;
    }

    set Limit(limit) {
        if (limit > 0) {
            this._limit = limit * -1;
        }
        else {
            this._limit = limit;
        }
    }

    Ueberweisung(betrag) {
        if (this.Kontostand + betrag >= this.Limit) {
            this.Kontostand += betrag;
        }
        else {
            console.error("Das Konto ist überzogen.");
        }
    }
}

class Schiff {
    constructor (tiefgang, geschwindigkeit, länge) {
        this.Tiefgang = tiefgang,
        this.Geschwindigkeit = geschwindigkeit,
        this.Länge = länge
    }

    get Tiefgang() {
        return this._tiefgang;
    }

    set Tiefgang(neuerTiefgang) {
        if (neuerTiefgang > 0) {
            this._tiefgang = neuerTiefgang;
        }
        else {
            console.error("Der Tiefgang muss mindestens 1 betragen.")
        }
    }

    set Länge(neueLänge) {
        if (typeof(neueLänge) == "number" && neueLänge > 0) {
            this._länge = neueLänge;
        }
        else {
            console.error("Ungültiger Wert für die Länge")
        }
    }

    get Länge() {
        return this._länge;
    }
}

let aida = new Schiff(5, 15, 200);
aida.Länge;
aida.Länge = 500;
aida.Länge = "Test";

