//Configurando express

// const express = require('express'); //Jalando Express/ importando express. Esta sintaxis no es nativa de JS, esta es de node y express, se le conoce como commonJS.
import express from 'express';// Esta es la version de imports, nativa de JS
import router from './routes/index.js';
import db from './config/db.js';

import dotenv from 'dotenv';
dotenv.config({path: "variables.env"})

const app = express(); //Instanciando express para poder usarlo


//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada existosamente'))
    .catch( error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000 //El process.env.PORT es una variable de entorno que aun no hemos creado, es por ello que nos toma el puerto 4000

const host = process.env.HOST || '0.0.0.0'

//Habilitar PUG
app.set('view engine', 'pug')

//Definir la carpeta publica
app.use(express.static('public'))

//Obteniendo el ano actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
})

//Agregar body parser para leer los datos de un formulario(antes se tenia que instalar esta dependecia, pero actualmente ya viene en express)
app.use(express.urlencoded({extended: true}));


app.use('/', router) //Use soporta post, get, delete

app.listen(port, host, () => {
    console.log('El servidor esta funcionando')
});
