import express  from 'express';
import {
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje,
} from '../controllers/paginasController.js' //Estos vienen del controlador

import {
    guardarTestimonial
} from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/', paginaInicio); //Te muestra esto en pantala

router.get('/nosotros', paginaNosotros); //le decimos que muestre lo que hay en el archivo pagina1

router.get('/testimonios', paginaTestimoniales); //le decimos que muestre lo que hay en el archivo pagina1
router.post('/testimoniales', guardarTestimonial)

router.get('/viajes', paginaViajes);   //le decimos que muestre lo que hay en el archivo pagina1
router.get('/viajes/:slug', paginaDetalleViaje); //despues de los : es un comodin, asi no creamos una ruta para cada viaje que haya

export default router //exportando router