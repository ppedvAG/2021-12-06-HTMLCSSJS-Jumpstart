function ExtremitätenFehler(message) {
    this.message = message;
    this.name = "ExtremitätenFehler";
}

class Wesen {
    constructor (extremitäten, alter) {
        this.Extremitäten = extremitäten,
        this.Alter = alter;
    }
    get Extremitäten() {
        return this._extremitäten;
    }
    get Alter() {
        return this._alter;
    }
    set Alter(neuesAlter) {
        if (neuesAlter > -1) {
            this._alter = neuesAlter;
        }
        else {
            console.error("Negative Zahlen sind nicht erlaubt.");
            throw "Zu kleines alter";
        }
    }
    set Extremitäten(anzahlAnEx) {
        if (anzahlAnEx > -1) {
            this._extremitäten = anzahlAnEx;
        }
        else {
            console.error("Negative Zahlen sind nicht erlaubt.");
        }
    }
    altern() {
        this.Alter += 1;
    }
}

class Person extends Wesen {
    constructor (alter,vorname, nachname, geschlecht) {
        super(4, alter);
        this.Vorname = vorname;
        this.Nachname = nachname;
        this.Geschlecht = geschlecht;
    }
    set Extremitäten(anzahl) {
        try {
        if (anzahl > 4 || anzahl < 0)
        {
            console.error("Müssen mindestens 0 und maximal 4 Extremitäten sein");
            // throw new ExtremitätenFehler("Zu viele oder zu wenige Extremitäten");
            throw new TypeError("Ungültiger Wert. Muss zwischen 0 und 4 liegen");
        }
        else {
            this._extremitäten = anzahl;
        }
    }
    catch(err) {
        console.error(err.name);
        console.error(err.message);
        console.warn("Extremitäten wurde auf 4 gesetzt");
        this.Extremitäten = 4;
    }
    finally {
        console.log("Setter Extremitäten wurde aufgerufen.");
    }
    }
    vorstellen() {
        return "Mein Name ist " + this.Vorname + " " + this.Nachname;
    }

}

class Mann extends Person {
    constructor (alter, vorname, nachname) {
        super(alter, vorname, nachname, "m");
    }
}

let amoebe = new Wesen(0,0);
amoebe.altern();

// Grundklasse: Person
// Eigenschaften: Alter, Vorname, Nachname
// Methoden: altern()
// Alle Attribute mit getter und setter


// Abgeleitete Klasse: Angestellter
// Eigenschaft: Firma, Position, Betriebszugehörigkeit(in Jahren), Gehalt
// Methoden: kündigen() FIrma entfernen und Betriebszugehörigkeit auf 0


// Abgeleitete Klasse: Kunde
// Eigenschaft: Vermögen, Projekt


function* generator() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

function* count10() {
    let index = 0;

    while (index < 11) {
        yield index++;
    }
}