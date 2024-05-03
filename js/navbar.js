let menuBtn = document.getElementById("menu-btn");
let NavMenu = document.getElementById("NavMenu");
let menuItems  =document.getElementsByClassName("menu-item")

menuBtn.addEventListener("click", () => {

    if (NavMenu.classList.contains("active")) {
        NavMenu.classList.remove("active");
        menuBtn.classList = "fa-solid fa-bars"
    } else {
        NavMenu.classList.add("active");
        menuBtn.classList = "fa-solid fa-xmark"
    }
});


