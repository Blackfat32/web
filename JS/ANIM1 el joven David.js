// Agregar eventos después de que se cargue la página
document.addEventListener("DOMContentLoaded", function() {
  // Mostrar/ocultar la sinopsis
  document.getElementById("boton-mostrar").addEventListener("click", function() {
    var sinopsis = document.getElementById("sinopsis");
    if (sinopsis.style.display === "block") {
      sinopsis.style.display = "none";
      document.getElementById("boton-mostrar").textContent = "Mostrar sinopsis";
    } else {
      sinopsis.style.display = "block";
      document.getElementById("boton-mostrar").textContent = "Ocultar sinopsis";
    }
  });

  // Agregar funcionalidad al menú desplegable
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Alterna la clase 'active' en el botón y el contenido
      button.classList.toggle('active');
      const accordionContent = button.nextElementSibling;
      accordionContent.classList.toggle('show');
    });
  });
});