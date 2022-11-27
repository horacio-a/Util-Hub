var medidas = {
    nanometers: 1,
    microns: 1000,
    millimeters: 1000000,
    centimeters: 10000000,
    meters: 1000000000,
    kilometers: 1000000000000,
    inches: 25400000,
    feet: 304800000,
    yard: 914400000,
    miles: 1609344000000,
    nauticalmiles: 1852000000000
}

const bntDistancia = document.getElementById('converlogitud')
const selectFrom = document.getElementById('selectFrom')
const selectTo = document.getElementById('selectTo')
const valueConver = document.getElementById('valueConver')
const resultado = document.getElementById('resultado')

bntDistancia.addEventListener('click', function(){
    let ValueFrom = selectFrom.value
    let ValueTo = selectTo.value

    let value  = valueConver.value
    resultado.innerText = (value * (medidas[ValueFrom]/ medidas[ValueTo])).toLocaleString('es-MX')

})

