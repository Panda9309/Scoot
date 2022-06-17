function myFunction(x) {
    x.classList.toggle("change");
}

var btn = document.querySelector(".burger__menu")
var menu = document.querySelector(".header")

btn.addEventListener("click", (evt) => {
    menu.classList.toggle("header__open")
})