const eye = document.querySelector("#eye")
const eyeOff = document.querySelector("#eye-off")
const tooglePassword = document.querySelector("#tooglePassword");
const password = document.querySelector("#password");
tooglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    /* const olditems = this.querySelector(".feather-eye")
     const newitems = document.createElement('svg');
     const item = "feather feather-eye";
     newitems.setAttribute("class", item);
     this.replaceChild(newitems, olditems)*/
    if (type === "text") {
        eye.removeAttribute("class");
        eye.setAttribute("class", "hidden")
        eyeOff.removeAttribute("class");
        eyeOff.setAttribute("class", "block")
    } else {
        eyeOff.removeAttribute("class");
        eyeOff.setAttribute("class", "hidden")
        eye.removeAttribute("class");
        eye.setAttribute("class", "block")
    }

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