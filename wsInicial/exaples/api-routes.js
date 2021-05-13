// Filename: api-routes.js

//initailze express router
let router = require('express').Router();

//Set default API response
router.get('/', function (req, res) {
  res.json({
    status: "API is working",
    message: "Bienvenidos al mejor WS del mundo"
  });
});

/*
var gameController = require('./gameController');
//Games
router.route('/games')
  .get(gameController.index)
  .post(gameController.new);

router.route('/games/one/:id')
  .get(gameController.one)
  .delete(gameController.deleteOne)
  .put(gameController.updateGame);
*/

//NetAlmix
var filmController = require('./filmController');
var serieController = require('./serieController');
var allController = require('./todoController');
//Many GET & POST
router.route('/films').get(filmController.index).post(filmController.newFilm);
router.route('/series').get(serieController.index).post(serieController.newSerie);
//One GET & DELETE & PUT
router.route('/films/one/:id').get(filmController.findOne).delete(filmController.deleteOne).put(filmController.updateOne);
router.route('/series/one/:id').get(serieController.findOne).delete(serieController.deleteOne).put(serieController.updateOne);
router.route('/films/generos/:genero').get(filmController.findGeneros);
router.route('/series/generos/:genero').get(serieController.findGeneros);

router.route('/top10').get(allController.top10)
//Export API routes
module.exports = router;
