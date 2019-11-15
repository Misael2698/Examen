const { argv } = require('./config/yargs')
const csv = require('csv-parser');

const fs = require('fs');

fs.createReadStream('datos.csv')
    .pipe(csv())
    .on('data', (row) => {
        //console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
let comando = argv._[0]

switch (comando) {
    case 'mostrar':

        break;
    case 'guardar':


        break;
    default:
        console.log("comando no existe");
}