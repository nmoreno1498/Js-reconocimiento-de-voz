'use strict';

//creamos estas variables siguiendo la misma logica para cuando pulsemos podamos
//grabar el sonido y reproduzirlo :)
//basicamente va a realizar una transcripcion

const contenido = document.querySelector('.contenido');
const btngrabarTexto = document.querySelector('.btn-grabar');

//una vez que terminamos la referencia a los 2 eventos dentro del DOM
//vamos a llamar la clase speechRecognition, en caso de que no se
//inicializase la clase, por x problemas del navegador, vamos a utilizar
//un OR y la vamos a inicializar por webkit
//webkit es un framework que nos permite ejecutar en chrome,safari,android, etc
//si no se inicializa una inicializa la otra

const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition;

//generamos una clase que pueda llamarse diferentes propiedades
//que vamos a transformar funciones, que son 2 onStart, onResult

//cuando pulsamos el boton inicializamos el boton
//y en el metodo onStart lo que vamos a hacer es modificar
//esta clase del parrafo e insertar el string

var reconocimiento = new reconocimientoVoz()
reconocimiento.lang = 'es-MX';
reconocimiento.onstart = () => {
    contenido.innerHTML = 'captando sonido ...';
}

//la propiedad onresult me va a devolver un evento

reconocimiento.onresult = (e) => {
    //ahora hago un console.log del evento results,
    //en la posicion 0,0 junto con la propiedad transcript 

    console.log(e.results[0][0].transcript);

    //ejecutamos por consola y auditivamente

    let mensaje = e.results[0][0].transcript;
    leerCondicion(mensaje);
}

//podemos crear condiciones basados en los valores grabados
//y en base a lo que escucha responde un msj pre-definido
//a la funcion pasamos el valor de mensaje por parametro
//y evaluamos la condicion

const leerCondicion = (mensaje) => {
    const voz = new SpeechSynthesisUtterance();
    if (mensaje.includes('pizza')) {
        voz.text = 'la pizza es un Asco';
    } else if (mensaje.includes('Nicolás')) {
        voz.text = 'Hola Nicolás como estas';
    } else if (mensaje.includes('odio')) {
        voz.text = 'yo también';
    } else if (mensaje.includes('bien')) {
        voz.text = 'estoy muy bien también, con un poco de frio';
    } else {
        voz.text = mensaje;
    }

    window.speechSynthesis.speak(voz);
}

//empaquetamos una funcion leer para que retorne lo grabado


const leer = (mensaje) => {
    const voz = new SpeechSynthesisUtterance();
    voz.text = mensaje;
    window.speechSynthesis.speak(voz);
}

btngrabarTexto.addEventListener('click', () =>
    reconocimiento.start()
)
