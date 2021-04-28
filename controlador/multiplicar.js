const fs = require('fs');
var colors = require('colors');

let imprimirTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de la base introducido '${base}' no es un entero`);
            return;
        } else {
            console.log('------------------------------'.green);
            console.log(`Tabla de Multiplicar de: ${base}`.red);
            console.log('------------------------------'.green);
            //let data = '';

        }


        for (i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base*i}\n`);
        }
    });
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de la base introducido '${base}' no es un entero`);
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        //guardar archivo traido desde data creada. 

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`El archivo tabla-de-${base} se guardó con éxito`);
        });
    });
}

module.exports = {
    crearArchivo,
    imprimirTabla
}