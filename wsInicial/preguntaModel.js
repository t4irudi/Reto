var mongoose = require('mongoose');

//Setup Schema
var preguntaSchema = mongoose.Schema({
    pregunta: String,
    a: String,
    b: String,
    c: String,
    d: String,
    respuesta: String,
    explicacion: String,
    imagen: String,
    categoria: String
        //autor: Number
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
    console.log('updateOne');
};

module.exports.getLimit = function(callback, limit, skip) {
    Pregunta.find({ categoria: 'fol' }, callback).skip(skip).limit(limit);
    console.log('get limit');
};

module.exports.deletePregunta = function(callback, id) {
    Pregunta.deleteOne({ '_id': id }, callback);
};