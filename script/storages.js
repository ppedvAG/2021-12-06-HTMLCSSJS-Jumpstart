let button = document.querySelector("#login");
let inp = document.querySelector("#user");
let p = document.querySelector("#greeting");
function login() {
    let tempDate = new Date();
    let exp = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate(), tempDate.getHours() + 3);
    let username = inp.value;
    localStorage.setItem("username", username);
}
function greeting() {
    let user = localStorage.getItem("username");
    if (user) {
        button.style.display = "none";
        inp.style.display = "none";
        p.innerHTML += ` ${user}`;
        p.style.display = "";
    }
    else {
        button.style.display = "";
        inp.style.display = "";
        p.style.display = "none";
    }
}
button.addEventListener("click", login);
window.addEventListener("load", greeting);