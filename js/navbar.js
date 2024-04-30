let menuBtn = document.getElementById("menu-btn");
let NavMenu = document.getElementById("NavMenu");

menuBtn.addEventListener("click", () => {

    if (NavMenu.classList.contains("active")) {
        NavMenu.classList.remove("active");
        menuBtn.classList = "fa-solid fa-bars"
    } else {
        NavMenu.classList.add("active");
        menuBtn.classList = "fa-solid fa-xmark"
    }
});
