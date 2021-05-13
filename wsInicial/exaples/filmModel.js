//filmModel.js

var mongoose = require('mongoose');

//Peliculas Schema
var filmSchema = mongoose.Schema(
  {
    titulo: String,
    tipo: String,
    descripcion: String,
    valoraciones: [{
      nick: String,
      comentario: String,
      valoracion: Number
    }],
    generos: [],
    numeroRepros: Number,
    premios: [{
      nombre: String,
      ano: Number
    }],
    duracion: Number,
    director: String
  },
  {
    collection: 'contenido'
  }
);

var Film = module.exports = mongoose.model('film', filmSchema);

module.exports.get = function (callback, limit) {
  Film.find({ tipo: 'pelicula' }, callback).limit(limit);
};

module.exports.findById = function (callback, id) {
  Film.findOne({ '_id': id, tipo: 'pelicula' }, callback);
};

module.exports.deleteFilm = function (callback, id) {
  Film.deleteOne({ '_id': id, tipo: 'pelicula' }, callback);
};

module.exports.updateFilm = function (callback, id, film) {
  Film.updateOne({ '_id': id, tipo: 'pelicula' }, film, callback);
};

module.exports.getGenero = function (callback, genero) {
  Film.find({ tipo: 'pelicula' , generos: genero}, callback);
};