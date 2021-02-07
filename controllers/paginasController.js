import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js';

//Aca se crearan los controladores. Aqui va lo que va a mostrar cada ruta ya que el controlador se encarga de eso.

const paginaInicio = async (req, res) => {     //req - es lo que tu envias, res - es lo que express te envia.
        //Consultar 3 viaje sdel modelo viaje

        const promiseDB = []; //Se crea para guardar los resultados de lo que arroje la DB

        //Se agregan los resultados al array, esto con el objetivo de mejorar el performance
        promiseDB.push(Viaje.findAll({limit: 3})); 
        promiseDB.push(Testimonial.findAll({limit: 3}));

        try {
            const resultado = await Promise.all( promiseDB ) //Consultamos los resultados simultaneamente, asi ganamos tiempo de ejecucion, ya que no debemos esperar que cargue uno para que cargue el otro.

            res.render('inicio', {       
                pagina: 'Inicio',
                clase: 'home',
                viajes: resultado[0],
                testimoniales: resultado[1],
            });
            
        } catch (error) {
            console.log(error)
        }
};


const paginaNosotros = (req, res) => {
    res.render('nosotros', { //Informacion extra como variables se pone en las llaves
        pagina: 'NOSOTROS'
    })
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('Testimonios', { //Informacion extra como variables se pone en las llaves
            pagina: 'Testimonios',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
};

const paginaViajes = async (req, res) => {
    //Consultar base de datos para mostrar los viajes
    const viajes = await Viaje.findAll(); //Este finAll se va traer todos los resultado que hay en esta tabla en la DB.
    console.log(viajes);

    res.render('viajes', { //Informacion extra como variables se pone en las llaves
        pagina: 'Próximos Viajes',
        viajes,
    });
};


//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    console.log(slug)

    try {
        const viaje = await Viaje.findOne({where : { slug }});

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}