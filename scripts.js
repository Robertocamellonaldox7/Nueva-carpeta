// Selecciona el menú y el encabezado del HTML y style.css
const menu = document.querySelector("nav");
const header = document.querySelector("#mi-encabezado");

// Obtén la altura del encabezado
const headerHeight = header.offsetHeight;

// Función que cambia el color de fondo del menú cuando se desplaza
window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
        menu.style.backgroundColor = "rgb(255, 165, 0)"; // Cambia el color de fondo a un color relacionado con el baloncesto (naranja)
    } else {
        menu.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Vuelve al fondo transparente
    }
});
