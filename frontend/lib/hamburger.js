document.addEventListener("DOMContentLoaded", function() {

    // Check for click events on the navbar burger icon
    const navburger = document.getElementById("navbarb")
    const navmenu = document.getElementById("navbarm")
    
    
    navburger.addEventListener("click", function(){
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        navburger.classList.toggle("is-active");
        navmenu.classList.toggle("is-active");

    });

});