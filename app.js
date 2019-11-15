const { argv } = require('./config/yargs')
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({ path: 'out.csv' });
const fs = require('fs');
const { listarTabla } = require('./buscador/buscar.js')

fs.createReadStream('datos.csv')
    .pipe(csv())
    .on('data', (row) => {
        //console.log(row);

    })
    .on('end', () => {
        //console.log('CSV file successfully processed');
    });

let comando = argv._[0]
const parseador = csv({
    delimiter: ',', //Delimitador, por defecto es la coma ,
    cast: true, // Intentar convertir las cadenas a tipos nativos
    comment: '#' // El carácter con el que comienzan las líneas de los comentarios, en caso de existir
});

parseador.on('readable', function() {
    let fila;
    while (fila = parseador.read()) {
        console.log(fila);
    }
});

parseador.on('error', function(err) {
    console.error("Error al leer CSV:", err.message);
});

fs.createReadStream("datos.csv") // Abrir archivo
    .pipe(parseador) // Pasarlo al parseador a través de una tubería
    .on("end", function() { // Y al finalizar, terminar lo necesario
        console.log("Se ha terminado de leer el archivo");
        parseador.end();
    });

switch (comando) {
    case 'mostrar':
        parseador.on('readable', function() {
            let fila;
            while (fila = parseador.read()) {
                console.log(fila);
            }
        });

        break;
    case 'guardar':


        break;
    default:
        console.log("comando no existe");
}