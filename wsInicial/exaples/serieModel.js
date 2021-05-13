//serieModel.js

var mongoose = require('mongoose');

//Series Schema
var serieSchema = mongoose.Schema(
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
        temporadas: [{
            numero: Number,
            duracion: String,
            descripcion: String,
            capitulos: [{
                titulo: String,
                duracion: Number,
                descripcion: String
            }]
        }]
    },
    {
        collection: 'contenido'
    }
);
var Serie = module.exports = mongoose.model('serie', serieSchema);

module.exports.get = function (callback, limit) {
    Serie.find({ tipo: 'serie' }, callback).limit(limit);
};

module.exports.findById = function (callback, id) {
    Serie.findOne({ '_id': id, tipo: 'serie' }, callback);
};

module.exports.deleteSerie = function (callback, id) {
    Serie.deleteOne({ '_id': id, tipo: 'serie' }, callback);
};

module.exports.updateSerie = function (callback, id, serie) {
    Film.updateOne({ '_id': id, tipo: 'serie' }, serie, callback);
};

module.exports.getGenero = function (callback, genero) {
    Film.find({ tipo: 'serie' , generos: genero}, callback);
  };