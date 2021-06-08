'use strict';
//primero selccionamos los valores de nuestras query esogiendo las clases
const texto = document.querySelector('.texto');
const btnLeerTexto = document.querySelector('.btn-leer');

//ahora cuando se haga click que se ejecute una funcion
//creamos una variable, que ghenera diferentes propiedades 
//una de esas va a ser la voz del usuario

//SpeechSynthesisUtterance mucha veces puede fallar xq es algo experimental y nuevo
//entonces la solucion es cerrar live server, y lo iniciamos devuelta

btnLeerTexto.addEventListener('click', ()=>{
    const locutor = new SpeechSynthesisUtterance();

    //clase que se encargue de hablar, pasarle a locutor
    //el texto que escribimos dentro del input
    //al objeto voz le agregamos la propiedad speak
    //y va a recibir el objeto de esta clase configurado
    //en este caso locutor

    const voz = window.speechSynthesis;

    //pitch modula el sonido, podriamos utilizarlo
    //tambien podemos utilizar volume, para modificar el sonido
    
    locutor.volume = 0.5;
    locutor.text = texto.value;
    console.log(texto.value);
    voz.speak(locutor);
})
//--------------------
