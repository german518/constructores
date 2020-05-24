//declaramos la funcion con sus parametros a detallar

function vehiculo(marca, modelo, anio, color) {
    this.marca = marca,
        this.modelo = modelo,
        this.anio = anio,
        this.color = color
}

//declaramos las funciones generales, asi no tenemos que 
//transcribir funcion por funcion
var cliente1 = new vehiculo('seat', 'ibiza', 1999, 'azul')
var cliente2 = new vehiculo('fiat', 'palio', 2009, 'azul')
var cliente3 = new vehiculo('kia', 'rio', 2001, 'verde')
var cliente4 = new vehiculo('peugeot', 'c4', 1989, 'rojo')
var cliente5 = new vehiculo('daewoo', 'ckp', 2003, 'azul')
var cliente6 = new vehiculo('honda', 'civic', 1996, 'verde')
var cliente7 = new vehiculo('citroen', 'c8', 2000, 'rosa')
var cliente8 = new vehiculo('chevrolet', 'corsa', 1996, 'azul')
var cliente9 = new vehiculo('citroen', 'pal', 2005, 'gris')
var cliente10 = new vehiculo('hyundai', 'atis', 2010, 'plata')


//aqui algunas pruebas 

console.log(cliente1);//objeto cliente1
console.log(cliente2.marca);//devuelve 'fiat'
console.log(cliente4);//devuelve objeto cliente4

/*aqui , iteramos para sacar parametros del objeto cliente1, pero
al ser un objeto, debemos añadirle el metodo Object.values, 
para poder iterar y ver que valores corresponden a los parametros
declarados en la funcion raiz. Asi podemos tambien, declarar los
objetos y consultarlos con brevedad,sin necesidad de transcribir
objeto por objeto*/

for (info of Object.values(cliente1)) {
    console.log(info);
}
//devuelve seat , ibiza , 1999 , azul