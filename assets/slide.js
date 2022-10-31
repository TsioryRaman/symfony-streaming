const close = document.querySelector("#close")
const right = document.querySelector("#right")
const left = document.querySelector("#left")
const menu = document.querySelector("#menu")
const navbar = document.querySelector("#side-menu")
const index = document.querySelector("#index")
close.addEventListener("click", function () {
    const navbar = document.querySelector("#side-menu")

    const autor = document.querySelector("#autor")
    const footer = document.querySelector("#footer")
    if (left.getAttribute("class") === "hidden") {
        navbar.removeAttribute("class")
        navbar.setAttribute("class", "w-full sm:w-64 max-h-screen  overflow-y-scroll  fixed scrollbar-hide hidden lg:block ")
        right.removeAttribute("class")
        right.setAttribute("class", "hidden")
        left.removeAttribute("class")
        left.setAttribute("class", " block ml-28 my-3")
        index.removeAttribute("class")
        index.setAttribute("class", "sm:ml-4 lg:ml-64 ")
        footer.removeAttribute("class")
        footer.setAttribute("class", "ml-64")
        autor.removeAttribute("class")
        autor.setAttribute("class", "flex items-center pl-2.5 mb-5 block")

    } else {

        navbar.setAttribute("class", "w-full sm:w-14 max-h-screen  overflow-y-scroll  fixed scrollbar-hide hidden lg:block ")
        right.removeAttribute("class")
        right.setAttribute("class", "block ml-3 my-3")
        left.removeAttribute("class")
        left.setAttribute("class", "hidden")
        index.removeAttribute("class")
        index.setAttribute("class", "ml-10 sm:ml-10")
        footer.removeAttribute("class")
        footer.setAttribute("class", "ml-10")
        autor.removeAttribute("class")
        autor.setAttribute("class", "flex items-center pl-2.5 mb-5 hidden")

    }


})


menu.addEventListener("click", function () {
    if (navbar.getAttribute("class") === "w-full sm:w-14 max-h-screen  overflow-y-scroll  fixed scrollbar-hide hidden lg:block") {
        navbar.removeAttribute("class")
        navbar.setAttribute("class", "w-full sm:w-64 max-h-screen  overflow-y-scroll  fixed scrollbar-hide block z-20")
        index.removeAttribute("class")
        index.setAttribute("class", "ml-4 sm:ml-64")
        right.removeAttribute("class")
        right.setAttribute("class", "hidden")
        left.removeAttribute("class")
        left.setAttribute("class", "hidden lg:block block ml-28 my-3")
    }
    else {
        navbar.removeAttribute("class")
        navbar.setAttribute("class", "w-full sm:w-14 max-h-screen  overflow-y-scroll  fixed scrollbar-hide hidden lg:block")
        index.removeAttribute("class")
        index.setAttribute("class", "ml-10 sm:ml-10")
    }
})