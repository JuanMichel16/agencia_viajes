import Sequelize from 'sequelize';
import db from '../config/db.js';

//Parametro es el nombre tabla, dentro de la llave va el nombre de cada columna y con el tipo de dato que ocupa (estos verlos en la doc de sequelize). Este es el modelo de la DB
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
})