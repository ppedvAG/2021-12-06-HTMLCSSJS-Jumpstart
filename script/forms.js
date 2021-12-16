let farbe = document.querySelector("#farbe");

function changeColor() {
    document.querySelector("body").style.backgroundColor = farbe.value;
}

farbe.addEventListener("change", changeColor);