const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'Toma la base para hacer la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demonandOption: false,
        default: false,
        describe: 'Se usa para decir si se va a listar o no la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demonandOption: true,
        default: 10,
        describe: 'Hasta que numero quieres multiplicar'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;