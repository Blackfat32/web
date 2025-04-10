const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll('.slider img');
const tituloElement = document.getElementById('titulo');
const descripcionElement = document.getElementById('descripcion');
let currentImg = 0;

function cambiarImagen() {
  imgs[currentImg].classList.remove('active');
  imgs[currentImg].classList.add('inactive');
  
  currentImg = (currentImg + 1) % imgs.length;
  
  imgs[currentImg].classList.remove('inactive');
  imgs[currentImg].classList.add('active');
  
  tituloElement.textContent = imgs[currentImg].getAttribute('data-titulo');
  descripcionElement.textContent = imgs[currentImg].getAttribute('data-descripcion');
}

imgs.forEach((img, index) => {
  img.addEventListener('load', () => {
    console.log('Imagen cargada correctamente');
    if (index === 0) {
      tituloElement.textContent = img.getAttribute('data-titulo');
      descripcionElement.textContent = img.getAttribute('data-descripcion');
    }
  });
});

setInterval(cambiarImagen, 5000);

// Resto de tu código...

const contenedorPeliculas = document.querySelector('.contenedor-peliculas');
let posicionInicial = 0;
let posicionActual = 0;
let desplazamiento = 0;
let isDown = false;

contenedorPeliculas.addEventListener('mousedown', (e) => {
  isDown = true;
  posicionInicial = e.clientX;
  contenedorPeliculas.style.cursor = 'grabbing';
});

contenedorPeliculas.addEventListener('mousemove', (e) => {
  if (isDown) {
    desplazamiento = e.clientX - posicionInicial;
    posicionActual += desplazamiento;
    contenedorPeliculas.scrollLeft = posicionActual;
    posicionInicial = e.clientX;
  }
});

contenedorPeliculas.addEventListener('mouseup', () => {
  isDown = false;
  contenedorPeliculas.style.cursor = 'grab';
});

contenedorPeliculas.addEventListener('mouseleave', () => {
  isDown = false;
  contenedorPeliculas.style.cursor = 'grab';
});

const contenedorSeries = document.querySelector('.contenedor-series');
let posicionInicialSeries = 0;
let posicionActualSeries = 0;
let desplazamientoSeries = 0;
let isDownSeries = false;

contenedorSeries.addEventListener('mousedown', (e) => {
  isDownSeries = true;
  posicionInicialSeries = e.clientX;
  contenedorSeries.style.cursor = 'grabbing';
});

contenedorSeries.addEventListener('mousemove', (e) => {
  if (isDownSeries) {
    desplazamientoSeries = e.clientX - posicionInicialSeries;
    posicionActualSeries += desplazamientoSeries;
    contenedorSeries.scrollLeft = posicionActualSeries;
    posicionInicialSeries = e.clientX;
  }
});

contenedorSeries.addEventListener('mouseup', () => {
  isDownSeries = false;
  contenedorSeries.style.cursor = 'grab';
});

contenedorSeries.addEventListener('mouseleave', () => {
  isDownSeries = false;
  contenedorSeries.style.cursor = 'grab';
});

const contenedorTelevisión = document.querySelector('.contenedor-televisión');
let posicionInicialTelevisión = 0;
let posicionActualTelevisión = 0;
let desplazamientoTelevisión = 0;
let isDownTelevisión = false;

contenedorTelevisión.addEventListener('mousedown', (e) => {
  isDownTelevisión = true;
  posicionInicialTelevisión = e.clientX;
  contenedorTelevisión.style.cursor = 'grabbing';
});

contenedorTelevisión.addEventListener('mousemove', (e) => {
  if (isDownTelevisión) {
    desplazamientoTelevisión = e.clientX - posicionInicialTelevisión;
    posicionActualTelevisión += desplazamientoTelevisión;
    contenedorTelevisión.scrollLeft = posicionActualTelevisión;
    posicionInicialTelevisión = e.clientX;
  }
});

contenedorTelevisión.addEventListener('mouseup', () => {
  isDownTelevisión = false;
  contenedorTelevisión.style.cursor = 'grab';
});

contenedorTelevisión.addEventListener('mouseleave', () => {
  isDownTelevisión = false;
  contenedorTelevisión.style.cursor = 'grab';
});

const contenedorDocumentales = document.querySelector('.contenedor-documentales');
let posicionInicialDocumentales = 0;
let posicionActualDocumentales = 0;
let desplazamientoDocumentales = 0;
let isDownDocumentales = false;

contenedorDocumentales.addEventListener('mousedown', (e) => {
  isDownDocumentales = true;
  posicionInicialDocumentales = e.clientX;
  contenedorDocumentales.style.cursor = 'grabbing';
});

contenedorDocumentales.addEventListener('mousemove', (e) => {
  if (isDownDocumentales) {
    desplazamientoDocumentales = e.clientX - posicionInicialDocumentales;
    posicionActualDocumentales += desplazamientoDocumentales;
    contenedorDocumentales.scrollLeft = posicionActualDocumentales;
    posicionInicialDocumentales = e.clientX;
  }
});

contenedorDocumentales.addEventListener('mouseup', () => {
  isDownDocumentales = false;
  contenedorDocumentales.style.cursor = 'grab';
});

contenedorDocumentales.addEventListener('mouseleave', () => {
  isDownDocumentales = false;
  contenedorDocumentales.style.cursor = 'grab';
});

const contenedorMusica = document.querySelector('.contenedor-musica');
let posicionInicialMusica = 0;
let posicionActualMusica = 0;
let desplazamientoMusica = 0;
let isDownMusica = false;

contenedorMusica.addEventListener('mousedown', (e) => {
  isDownMusica = true;
  posicionInicialMusica = e.clientX;
  contenedorMusica.style.cursor = 'grabbing';
});

contenedorMusica.addEventListener('mousemove', (e) => {
  if (isDownMusica) {
    desplazamientoMusica = e.clientX - posicionInicialMusica;
    posicionActualMusica += desplazamientoMusica;
    contenedorMusica.scrollLeft = posicionActualMusica;
    posicionInicialMusica = e.clientX;
  }
});

contenedorMusica.addEventListener('mouseup', () => {
  isDownMusica = false;
  contenedorMusica.style.cursor = 'grab';
});

contenedorMusica.addEventListener('mouseleave', () => {
  isDownMusica = false;
  contenedorMusica.style.cursor = 'grab';
});

const contenedorPodcasts = document.querySelector('.contenedor-podcasts');
let posicionInicialPodcasts = 0;
let posicionActualPodcasts = 0;
let desplazamientoPodcasts = 0;
let isDownPodcasts = false;

contenedorPodcasts.addEventListener('mousedown', (e) => {
  isDownPodcasts = true;
  posicionInicialPodcasts = e.clientX;
  contenedorPodcasts.style.cursor = 'grabbing';
});

contenedorPodcasts.addEventListener('mousemove', (e) => {
  if (isDownPodcasts) {
    desplazamientoPodcasts = e.clientX - posicionInicialPodcasts;
    posicionActualPodcasts += desplazamientoPodcasts;
    contenedorPodcasts.scrollLeft = posicionActualPodcasts;
    posicionInicialPodcasts = e.clientX;
  }
});

contenedorPodcasts.addEventListener('mouseup', () => {
  isDownPodcasts = false;
  contenedorPodcasts.style.cursor = 'grab';
});

contenedorPodcasts.addEventListener('mouseleave', () => {
  isDownPodcasts = false;
  contenedorPodcasts.style.cursor = 'grab';
});

const contenedorPuntoBiblico = document.querySelector('.contenedor-punto-biblico');
let posicionInicialPuntoBiblico = 0;
let posicionActualPuntoBiblico = 0;
let desplazamientoPuntoBiblico = 0;
let isDownPuntoBiblico = false;

contenedorPuntoBiblico.addEventListener('mousedown', (e) => {
  isDownPuntoBiblico = true;
  posicionInicialPuntoBiblico = e.clientX;
  contenedorPuntoBiblico.style.cursor = 'grabbing';
});

contenedorPuntoBiblico.addEventListener('mousemove', (e) => {
  if (isDownPuntoBiblico) {
    desplazamientoPuntoBiblico = e.clientX - posicionInicialPuntoBiblico;
    posicionActualPuntoBiblico += desplazamientoPuntoBiblico;
    contenedorPuntoBiblico.scrollLeft = posicionActualPuntoBiblico;
    posicionInicialPuntoBiblico = e.clientX;
  }
});

contenedorPuntoBiblico.addEventListener('mouseup', () => {
  isDownPuntoBiblico = false;
  contenedorPuntoBiblico.style.cursor = 'grab';
});

contenedorPuntoBiblico.addEventListener('mouseleave', () => {
  isDownPuntoBiblico = false;
  contenedorPuntoBiblico.style.cursor = 'grab';
});