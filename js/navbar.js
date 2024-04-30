let menuBtn = document.getElementById("menu-btn");
let NavMenu = document.getElementById("NavMenu");
let menuItems  =document.getElementsByClassName("menu-item")

menuBtn.addEventListener("click", () => {
console.log(menuItems)
    if (NavMenu.classList.contains("active")) {
        NavMenu.classList.remove("active");
        menuBtn.classList = "fa-solid fa-bars"
    } else {
        NavMenu.classList.add("active");
        menuBtn.classList = "fa-solid fa-xmark"
    }
});


menuItems.forEach((item) => {
    console.log("Adding event listener to:", item); // Log which item is getting a listener
    item.addEventListener("click", () => {
        console.log("Item clicked:", item); // Log when an item is clicked
        NavMenu.classList.remove("active"); // Attempt to remove the "active" class
    });
});
