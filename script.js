console.log(document.getElementById("container"));
console.log(document.querySelector("#container"));
document.querySelector(".second");
document.querySelector("ol.third");
document.querySelector("#container").insertAdjacentHTML("beforebegin", "Hello!");
document.querySelector(".footer").classList.add("main");
document.querySelector(".footer").classList.remove("main");
document.querySelector("ul").insertAdjacentHTML("beforeend", "<li>four</li>");

var list = document.querySelectorAll("ol");

for (let i = 0; i < list.length; i++)
    list[i].style = "background-color:green";

document.querySelector(".footer").remove();