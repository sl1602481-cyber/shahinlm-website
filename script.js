
lucide.createIcons();

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon = navMenu.classList.contains("active")
        ? "x"
        : "menu";

    menuToggle.innerHTML = `<i data-lucide="${icon}"></i>`;

    lucide.createIcons();
});

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});