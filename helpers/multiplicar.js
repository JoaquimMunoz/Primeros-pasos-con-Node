const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5 , listar , hasta) => {

    try {
        
        
        let salida = ``;
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            salida += `${ base } ${ 'x' .magenta} ${ index } ${ '='.magenta } ${ base * index }\n` ;
            consola += `${ base } ${ 'x' } ${ index } ${ '=' } ${ base * index }\n` ;
        }

        if ( listar ) {
            console.log("==================".blue);
            console.log(colors.rainbow(`   TABLA DEL ${ base }    `));
            console.log("==================".blue);
            console.log(salida);
        }
    
        fs.writeFile(`./tablas/tabla-${ base }.txt`,consola, ( err ) => {
            if (err) throw err;
        });
        
        return `tabla-${ base }.txt`.underline.green;

    } catch (error) {
        throw error;
    }



}


module.exports = {
    crearArchivo
}




