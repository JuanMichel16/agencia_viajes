//Instalamos sequelize el cual es un ORM y mysql2

//este archivo es para la configuracion de nuestra base de datos.
import sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path: "variables.env"})

//Parametros, nombre de la DB a la que queremos conectarnos, el usuario y password
const db = new sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false   
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

//Nota: Todo esto es lo que se necesita para configurar sequelize. pool: Es configuracion propia de sequelize (checar la doc para ver que pex con esto).


export default db