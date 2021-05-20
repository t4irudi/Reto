// filmController.js

//Import film model
Film = require('./filmModel');

//Handle index actions
exports.index = function (req, res) {
    Film.get(function (err, films) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Films retrieved succesfully",
                data: films
            });
        }
    });
};
exports.newFilm = function (req, res) {
    var film = new Film();
    film.titulo = req.body.titulo;
    film.tipo = req.body.tipo;
    film.descripcion = req.body.descripcion;
    film.valoraciones = req.body.valoraciones;
    film.generos = req.body.generos;
    film.numeroRepros = req.body.numeroRepros;
    film.premios = req.body.premios;
    film.duracion = req.body.duracion;
    film.director = req.body.director;
    film.save(function (err) {
        res.json({
            message: 'New film created',
            data: film
        });
    });
};

exports.findOne = function (req, res) {
    var id = req.params.id;
    Film.findById(function (err, film) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Film retrieved succesfully",
                data: film
            });
        }
    }, id);
};

exports.deleteOne = function (req, res) {
    var id = req.params.id;
    Film.deleteFilm(function (err, film) {
        console.log(film);
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Film deleted succesfully",
                data: film.deletedCount + " deleted"
            });
        }
    }, id);
};

exports.updateOne = function (req, res) {
    var id = req.params.id;
    var peli = req.body;
    Film.updateFilm(function (err, film) {
        res.json({
            status: "success",
            message: "Film updated succesfully",
            data: film
        });
    }, id, peli);
};

exports.findGeneros = function (req, res) {
    var genero = req.params.genero;
    Film.getGenero(function (err, films) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Filtered films retrieved succesfully",
                data: films
            });
        }
    }, genero);
};