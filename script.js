import { barcelona, roma, paris, londres } from './ciudades.js'

//Obteber los elementos del DOM(document object model)
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');


//Agregar evento click por cada enlace

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover la clase 'active' de los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        })

        //Agregar la clase 'active' al enlace actual
        this.classList.add('active')

        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//Funcion para traer la informacion correcta de las ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}