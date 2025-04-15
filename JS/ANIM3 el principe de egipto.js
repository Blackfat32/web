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

  // Agregar funcionalidad al botón de reproducción
  document.getElementById("boton-reproducir").addEventListener("click", function() {
    // Aquí puedes agregar la funcionalidad para reproducir la película
    // Por ejemplo, puedes redirigir a una página de reproducción
    window.location.href = "https://ia600604.us.archive.org/28/items/cp-299-pc/CP299PC.ia.mp4";
  });

  // No hay código para el menú desplegable en este script
});