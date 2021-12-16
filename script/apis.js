// geolocation API

let loc = document.querySelector("#location");
function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        loc.innerHTML = position.coords.longitude + " " + position.coords.latitude;
    },
    function() {
        loc.innerHTML = "Anfrage wurde verweigert";
    });
}
document.querySelector("#position").addEventListener("click", getLocation);

// history-Object
history // GIbt die Anzahl an besuchten URLS zurück
history.forward() // geht eine Seite vorwärts in der fensterhistorie
history.back() // geht eine Seite zurück in der fensterhistorie
history.go(2) // würde 2 mal vorwärts gehen
history.go(-3) // würde 3 mal zurück gehen