const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

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