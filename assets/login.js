
const tooglePassword = document.querySelector("#tooglePassword");
const password = document.querySelector("#password");
console.log(tooglePassword.children)
tooglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    const newitems = document.createElement('i');
    newitems.setAttribute("data-feather", "eye-off");
    this.replaceChild(newitems, this.firstChild)
});
/*
const eye = document.querySelector(".feather-eye");
const eyeOff = document.querySelector(".feather-eye-off");
const password = document.querySelector("#password")
eye.addEventListener("click", function () {
    this.style.display = "none";
    eyeOff.style.display = "block";
    password.type = "text"
});
eyeoff.addEventListener("click", function () {
    this.style.display = "none";
    eye.style.display = "block";
    password.type = "password"
});
*/

const loginform = document.querySelector("#loginform")
loginform.addEventListener("submit", function (e) {
    console.log("echec")
    e.preventDefault();
});