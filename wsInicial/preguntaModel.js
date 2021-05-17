var mongoose = require('mongoose');

//Setup Schema
var preguntaSchema = mongoose.Schema({
    idioma: String,
    pregunta: String,
    a: String,
    b: String,
    c: String,
    d: String,
    respuesta: String,
    explicacion: String,
    categoria: String
}, {
    collection: 'preguntas'
});

var Pregunta = module.exports = mongoose.model('pregunta', preguntaSchema);

module.exports.getFol = function(callback) {
    Pregunta.find({ categoria: 'fol' }, callback);
    console.log('get fol');
};

module.exports.getEnglish = function(callback) {
    Pregunta.find({ categoria: 'ingles' }, callback);
    console.log('get ing');
};

module.exports.getAll = function(callback) {
    Pregunta.find(callback);
    console.log('get all');
};

module.exports.updateOne = function(callback, id, pregunta) {
    Pregunta.findOneAndUpdate({ '_id': id }, pregunta, callback);
};

module.exports.updateFilm = function(callback, id, film) {
    Film.updateOne({ '_id': id, tipo: 'pelicula' }, film, callback);
};

module.exports.getLimit = function(callback, limit, skip) {
    Pregunta.find(callback).limit(limit).skip(skip);
    console.log('get limit');
};