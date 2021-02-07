import {Testimonial} from '../models/Testimoniales.js';

//Usaremos async await ya que puede tardar un poco en enviar los datosm a la DB
const guardarTestimonial = async (req, res) => {
    console.log(req.body); //Aqui se pondra lo que el usuario coloquee en el formulario

    //Validar formulario
    const { nombre, correo, mensaje } = req.body;
    
    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    console.log(errores)

    if(errores.length > 0) {
        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores. Render toma 2 parametros, la vista y la info que enviaremos
        res.render('testimonios', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })  
    } else {
        //Almacenar los datos en la base de datos csm
        //Se usara un try catch para en caso de haber un error, nuestro programa no truene
        try {
            //Sintaxis para crear un nuevo testimonial
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimonios')
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
}