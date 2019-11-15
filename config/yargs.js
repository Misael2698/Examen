// const fs = require('fs')
//importacion simple
//const multiplicar = require('./multiplicacion/multiplicar.js')
//importacion con destructutacion
let opt = {
    archivo: {
        demand: true,
        alias: 'f',
        description: 'Archivo CSV con datos a procesar'
    },
    anio: {
        alias: 'y',
        default: 1960,
        description: 'Año que del que se busca informacióv'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        description: 'Código del país que se requiere información'
    }
};
const argv = require('yargs').
command('mostrar', 'Imprime en pantalla el resultado de la búsqueda', opt)
    .command('guardar', 'Genera un archivo con el resultado de la búsqueda', opt).help().argv;


module.exports = {
    argv
};