import Sequelize from 'sequelize';
import db from '../config/db.js';

//Parametro es el nombre tabla, dentro de la llave va el nombre de cada columna y con el tipo de dato que ocupa (estos verlos en la doc de sequelize). Este es el modelo de la DB
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    }, 
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
})