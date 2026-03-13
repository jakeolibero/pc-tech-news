// BOTÓN MODO OSCURO

function modoOscuro(){

document.body.classList.toggle("dark");

}


// INFORMACIÓN DE COMPONENTES

function cpu(){

document.getElementById("info").innerHTML =
"El procesador es el cerebro de la computadora y ejecuta las instrucciones del sistema.";

}


function ram(){

document.getElementById("info").innerHTML =
"La memoria RAM permite que varios programas se ejecuten al mismo tiempo.";

}


function gpu(){

document.getElementById("info").innerHTML =
"La tarjeta gráfica procesa imágenes, videos y videojuegos.";

}


function ssd(){

document.getElementById("info").innerHTML =
"Los SSD almacenan información y son mucho más rápidos que los discos duros.";

}



// PASOS PARA ARMAR UNA PC

function paso1(){

document.getElementById("armado").innerHTML =
"Paso 1: Instalar el procesador en la tarjeta madre.";

}

function paso2(){

document.getElementById("armado").innerHTML =
"Paso 2: Colocar la memoria RAM.";

}

function paso3(){

document.getElementById("armado").innerHTML =
"Paso 3: Instalar el SSD.";

}

function paso4(){

document.getElementById("armado").innerHTML =
"Paso 4: Instalar la tarjeta gráfica.";

}



// GRÁFICA DE PRECIOS

const ctx = document.getElementById('grafica');

new Chart(ctx, {

type: 'bar',

data: {

labels: ['CPU','GPU','RAM','SSD'],

datasets: [{

label: 'Precio aproximado',

data: [350,800,120,150],

borderWidth: 1

}]

},

options: {

scales: {

y: {

beginAtZero: true

}

}

}

});
