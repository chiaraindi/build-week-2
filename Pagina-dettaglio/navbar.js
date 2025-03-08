document.addEventListener("DOMContentLoaded", () => {
    const mainNavbar = document.getElementById("mainNavbar");
    const expandedNavbar = document.getElementById("expandedNavbar");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");
    const dropdowns = document.querySelectorAll(".dropdown");
    
    // Mostra la navbar espansa al click su un bottone della navbar principale
    document.querySelectorAll(".open-search").forEach(button => {
        button.addEventListener("click", () => {
            expandedNavbar.classList.add("show");
            expandedNavbar.classList.remove("hidden");
        });
    });
    
    // Mostra il menu a tendina corrispondente al bottone premuto
    dropdownButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // Evita la chiusura immediata
            const dropdownId = button.getAttribute("data-dropdown");
            dropdowns.forEach(dropdown => {
                if (dropdown.id === dropdownId) {
                    dropdown.classList.toggle("show");
                } else {
                    dropdown.classList.remove("show");
                }
            });
        });
    });
    
    // Chiude tutto al click fuori
    document.addEventListener("click", (event) => {
        if (!expandedNavbar.contains(event.target)) {
            expandedNavbar.classList.remove("show");
            expandedNavbar.classList.add("hidden");
            dropdowns.forEach(dropdown => dropdown.classList.remove("show"));
        }
    });
});