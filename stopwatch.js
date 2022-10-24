var start = document.getElementById('start')

var stop = document.getElementById('stop')
var reset = document.getElementById('reset')

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

start.addEventListener('click', function(){


    if(start.className == 'start b active'){
	control = setInterval(cronometro,10);
}
    start.classList.remove('active')
    stop.classList.add('active')
    reset.classList.add('active')
});



stop.addEventListener('click', function(){
    console.log('test')

	clearInterval(control);
    start.classList.add('active')
    stop.classList.remove('active')
    reset.classList.add('active')
});

reset.addEventListener('click', function(){
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
    start.classList.add('active')
    stop.classList.remove('active')
    reset.classList.remove('active')
})




function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}