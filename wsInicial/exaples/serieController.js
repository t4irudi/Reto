//serieController.js

//Import serie model
Serie = require('./serieModel');

//Handle index actions
exports.index = function (req, res) {
    Serie.get(function (err, series) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Series retrieved succesfully",
                data: series
            });
        }
    });
};
exports.newSerie = function (req, res) {
    var serie = new Serie();
    serie.titulo = req.body.titulo;
    serie.tipo = req.body.tipo;
    serie.descripcion = req.body.descripcion;
    serie.valoraciones = req.body.valoraciones;
    serie.generos = req.body.generos;
    serie.numeroRepros = req.body.numeroRepros;
    serie.premios = req.body.premios;
    serie.temporada = req.body.temporada;

    serie.save(function (err) {
        res.json({
            message: 'New serie created',
            data: serie
        });
    });
};

exports.findOne = function (req, res) {
    var id = req.params.id;
    Serie.findById(function (err, serie) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Serie retrieved succesfully",
                data: serie
            });
        }
    }, id);
};

exports.deleteOne = function (req, res) {
    var id = req.params.id;
    Serie.deleteSerie(function (err, serie) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Serie deleted succesfully",
                data: serie.deletedCount + " deleted"
            });
        }
    }, id);
};

exports.updateOne = function (req, res) {
    var id = req.params.id;
    var srie = req.body;
    Serie.updateSerie(function (err, serie) {
        res.json({
            status: "success",
            message: "Serie updated succesfully",
            data: serie
        });
    }, id, srie);
};

exports.findGeneros = function (req, res) {
    var genero = req.params.genero;
    Serie.getGenero(function (err, serie) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Filtered series retrieved succesfully",
                data: serie
            });
        }
    }, genero);
};