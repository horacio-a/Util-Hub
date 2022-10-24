const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');




const calculadoraHeader = document.getElementById('bntCalculadora'),
    conteinercalculadora = document.getElementById('conteiner-calculadora'),
    cronometroHeader = document.getElementById('bntCronometro'),
    cronometroMain = document.getElementById('Cronometro'),
    displayState = document.getElementById('display'),
    iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu'),
    tituloApp = document.getElementById('titulo-app')



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





calculadoraHeader.addEventListener('click', function () {
    tituloApp.classList.toggle('active')

    conteinercalculadora.style.display = 'flex'
    cronometroMain.classList.remove('active')
    menu.classList.toggle('active');
    cronometroHeader.classList.remove('active')
    calculadoraHeader.classList.add('active')

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
    conteinercalculadora.style.display = 'none'
    menu.classList.toggle('active');
    cronometroHeader.classList.add('active')
    calculadoraHeader.classList.remove('active')

    document.getElementById('header').classList.toggle('active')
    if (menu.className == 'cont-menu') {
        document.getElementById("icono-menu").src = "open-menu2.png";
    } else {
        document.getElementById("icono-menu").src = "open-menu.png";
    }
    tituloApp.innerText = 'Cronometro'

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