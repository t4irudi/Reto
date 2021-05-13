var mongoose = require('mongoose');

//Setup Schema
var preguntaSchema = mongoose.Schema({
    languaje: String,
    question: String,
    a: String,
    b: String,
    c: String,
    d: String,
    answer: String,
    explanation: String,
    category: String
}, {
    collection: 'preguntas'
});

var Pregunta = module.exports = mongoose.model('preguntas', preguntaSchema);

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