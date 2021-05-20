// Filename: api-routes.js

//Inicializar ruteo de express
let router = require('express').Router();

//Respuesta de /api (DEFAULT)
router.get('/', function(req, res) {
    res.json({
        status: "API is working",
        message: "Bienvenidos al WS de t4"
    });
});

//Inicializamos preguntaController
var preguntaController = require('./preguntaController');
var autorController = require('./autorController');

//Ruta para preguntas de una categoria individial
router.route('/preguntas/fol').get(preguntaController.getFol);
router.route('/preguntas/english').get(preguntaController.getIngles);

//Ruta para todas las preguntas
router.route('/preguntas').get(preguntaController.getTodas).post(preguntaController.newPregunta);

//Ruta para preguntas con id especifica
router.route('/preguntas/:id').put(preguntaController.updateOne).delete(preguntaController.deleteOne);

//Ruta para los limits del loren
router.route('/preguntas/limit').get(preguntaController.getLimit);

//Ruta para loguearse
router.route('/login').post(autorController.login);

//Export API routes
module.exports = router;