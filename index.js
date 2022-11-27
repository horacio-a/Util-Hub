const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');




const calculadoraHeader = document.getElementById('bntCalculadora'),
    conteinercalculadora = document.getElementById('conteiner-calculadora'),

    cronometroHeader = document.getElementById('bntCronometro'),
    cronometroMain = document.getElementById('Cronometro'),

    distanciaHeader = document.getElementById('bntDistancia'),
    distanciaMain = document.getElementById('distancias'),

    displayState = document.getElementById('display'),
    iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu'),
    tituloApp = document.getElementById('titulo-app')
    btnInfo = document.getElementById('btnInfo')
    conteinerInfo = document.getElementById('conteiner-info')


    //// 
    ////    Calculadora funciones
    //// 
const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

const borradototal = document.getElementById('borradototal')
const borrar1 = document.getElementById('borrar1')


borradototal.addEventListener('click', function a() {
    display.borrarTodo()
})

borrar1.addEventListener('click', function a() {
    display.borrar()
})

    //// 
    ////    Calculadora funciones
    //// 

btnInfo.addEventListener('click', function(){
    tituloApp.classList.toggle('active')

    conteinerInfo.classList.add('active')
    distanciaMain.classList.remove('active')
    cronometroMain.classList.remove('active')
    conteinercalculadora.classList.remove('active')

    menu.classList.toggle('active');
    cronometroHeader.classList.remove('active')
    distanciaHeader.classList.remove('active')
    calculadoraHeader.classList.remove('active')
    btnInfo.classList.add('active')

    document.getElementById('header').classList.toggle('active')

    if (menu.className == 'cont-menu') {
        document.getElementById("icono-menu").src = "open-menu2.png";
    } else {
        document.getElementById("icono-menu").src = "open-menu.png";
    }
    

    tituloApp.innerText = 'Mas informacion'

})




calculadoraHeader.addEventListener('click', function () {
    tituloApp.classList.toggle('active')

    conteinercalculadora.classList.add('active')
    distanciaMain.classList.remove('active')
    cronometroMain.classList.remove('active')
    conteinerInfo.classList.remove('active')

    menu.classList.toggle('active');
    cronometroHeader.classList.remove('active')
    distanciaHeader.classList.remove('active')
    calculadoraHeader.classList.add('active')
    btnInfo.classList.remove('active')


    document.getElementById('header').classList.toggle('active')

    if (menu.className == 'cont-menu') {
        document.getElementById("icono-menu").src = "open-menu2.png";
    } else {
        document.getElementById("icono-menu").src = "open-menu.png";
    }

    tituloApp.innerText = 'Calculadora'

})


cronometroHeader.addEventListener('click', function () {
    tituloApp.classList.toggle('active')

    cronometroMain.classList.add('active')
    distanciaMain.classList.remove('active')
    conteinercalculadora.classList.remove('active')
    conteinerInfo.classList.remove('active')

    menu.classList.toggle('active');
    cronometroHeader.classList.add('active')
    distanciaHeader.classList.remove('active')
    calculadoraHeader.classList.remove('active')
    btnInfo.classList.remove('active')


    document.getElementById('header').classList.toggle('active')
    
    if (menu.className == 'cont-menu') {
        document.getElementById("icono-menu").src = "open-menu2.png";
    } else {
        document.getElementById("icono-menu").src = "open-menu.png";
    }
    
    tituloApp.innerText = 'Cronometro'

})

distanciaHeader.addEventListener('click', function () {
    tituloApp.classList.toggle('active')

    distanciaMain.classList.add('active')
    cronometroMain.classList.remove('active')
    conteinercalculadora.classList.remove('active')
    conteinerInfo.classList.remove('active')

    menu.classList.toggle('active');
    distanciaHeader.classList.add('active')
    cronometroHeader.classList.remove('active')
    calculadoraHeader.classList.remove('active')
    btnInfo.classList.remove('active')


    document.getElementById('header').classList.toggle('active')
    
    if (menu.className == 'cont-menu') {
        document.getElementById("icono-menu").src = "open-menu2.png";
    } else {
        document.getElementById("icono-menu").src = "open-menu.png";
    }
    
    tituloApp.innerText = 'Distancia'

})





iconoMenu.addEventListener('click', (e) => {
    tituloApp.classList.toggle('active')
    menu.classList.toggle('active');
    document.getElementById('header').classList.toggle('active')
    document.body.classList.toggle('opacity');

    if (menu.className == 'cont-menu') {
        document.getElementById("icono-menu").src = "open-menu2.png";
    } else {
        document.getElementById("icono-menu").src = "open-menu.png";
    }
    console.log(tituloApp.className)

    if (tituloApp.className == 'active') {
        tituloApp.innerText = 'Menu'
    } else {
    if(cronometroMain.className == ''){
        tituloApp.innerText = 'Calculadora'
    }else{
        tituloApp.innerText = 'Cronometro'
    }
    }

});


