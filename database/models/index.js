'use strict';

const fs = require('fs');
const path = require('path');


const Models = fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
    })
    .map(file => {
        return require(path.join(__dirname, file));
    });


    module.exports = Models; // DEVUELVE UN ARRAY CON TODOS LOS MODELOS (FUNCIONES SIN EJECUTAR) EN LA CARPETA models
    