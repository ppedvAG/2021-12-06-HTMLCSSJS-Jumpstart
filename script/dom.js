// Wie traverse ich die DOM
// Query Selector erlaubt uns mittels CSS-Selektoren die Seite zu durchsuchen
document.querySelector("p") // => erstes p Element
// Gibt das erste Element zurück, dass dem gesuchten Begriff entspricht

document.querySelectorAll("p") // => Array, mit allen p-Tags
// Gibt alle ELemente zurück, die dem gesuchten Begriff entsprechen

// Suche nach Id:
document.getElementById("firstHeading") // Gibt das erste Element mit der gesuchten ID aus
// Suche nach Klassennamen:
document.getElementsByClassName("firstHeading") // Gibt alle Elemente mit der Klasse zurück

// Suche nach Tag Namen:
document.getElementsByTagName("p") // => Array mit allen p Elementen

// Suche nach Name-Attribut Wert:
document.getElementsByName("test"); // Geht nur auf das Attribut "name"
{/* <p name="test"></p> */}

let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.innerText = "Hallo Dom";
h1.style.color = "blue";
h1.classList.add("überschrift");
body.appendChild(h1);
let el = null;



function appendElement(element, parent) {
    parent.appendChild(element);
}

// Eine Funktion, die ein Element als Parameter erhält und diesem Element den Text aus
// dem Input-Feld mit der ID textValue einfügt
//// 1. Müssen wir das Element <input id="textValue"> erreichen über DOM
//// 2. TextWert in Variable speichern
//// 3. Textwert des Parameter-Elements anpassen

function addText(element) {
    // tue etwas
    // let inp = document.querySelector("#textValue");
    // let text = inp.value;
    let inp = document.querySelector("#textValue").value;
    element.innerText = inp;
}

function createTag() {
    let tagName = document.querySelector("#tagName").value;
    el = document.createElement(tagName);
    addText(el);
    appendElement(el, body);
}
// WIr brauchen eine Art Liste der jeweiligen Elemente mit der gesuchten Klasse
// Jedes dieser ELemente soll den gleichen Inhalt bekommen (Fall even: O, Fall odd: X)
// Muss nur einmal ausgeführt werden 
// async zum Script Tag hinzufügen

// Jede Div mit der Klasse odd soll als Inhalt ein X bekommen
// Jede Div mit der Klasse even soll als Inhalt ein O bekommen

let even = document.querySelectorAll(".even");
let odd = document.querySelectorAll(".odd");

for (el of even) {
    el.innerText = "O";
}
for (el of odd) {
    el.innerText = "X";
}

// Event-Listener
// addEventListener("artDesEvents z.B. click", function, (true))  true nur falls capturing
// removeEventListener("artDesEvents", funktionsName); Geht nur wenn keine Anonyme FUnktion benutzt wurde
