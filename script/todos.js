let title = document.querySelector("#title");
let desc = document.querySelector("#description");
let submit = document.querySelector("#submit");
let list = document.querySelector("#todos");

function addToList() {
    let ul = document.createElement("ul");
    ul.innerText = title.value;
    title.value = "";
    ul.addEventListener("click", function() { 
        if (this.style.textDecoration == "line-through") {
            this.remove();
        }
        else {
            this.style.textDecoration = "line-through";
        }
    });
    let li = document.createElement("li");
    li.innerHTML = desc.value;
    desc.value = "";
    ul.appendChild(li);
    list.appendChild(ul);
}
submit.addEventListener("click", addToList);