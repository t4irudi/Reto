Pregunta = require('./preguntaModel');
Autor = require('./autorModel');

exports.getFol = function(req, res) {
    Pregunta.getFol(function(err, preguntas) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json(preguntas);
        }
    });
};

exports.getIngles = function(req, res) {
    Pregunta.getEnglish(function(err, preguntas) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json(preguntas);
        }
    });
};

exports.getTodas = function(req, res) {
    Pregunta.getAll(function(err, preguntas) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json(preguntas);
        }
    });
};
exports.newPregunta = function(req, res) {
    console.log(0);
    var preg = new Pregunta();
    console.log(1);
    preg.pregunta = req.body.pregunta;
    console.log(preg.pregunta);
    preg.a = req.body.a;
    console.log(preg.a);
    preg.b = req.body.b;
    console.log(preg.b);
    preg.c = req.body.c;
    console.log(preg.c);
    preg.d = req.body.d;
    console.log(preg.d);
    preg.respuesta = req.body.respuesta;
    console.log(preg.respuesta);
    preg.explicacion = req.body.explicacion;
    console.log(preg.explicacion);
    preg.imagen = req.body.imagen;
    console.log(preg.imagen);
    preg.categoria = req.body.categoria;
    console.log(preg.categoria);
    //preg.autor = req.body.autor;
    console.log("post pregunta");
    preg.save(function(err) {
        if (err) {
            res.json({
                status: ":("
            });
        } else {
            res.json({
                status: ":)"
            });
        }
    });
};
exports.updateOne = function(req, res) {
    var id = req.params.id;
    var q = req.body;
    Pregunta.updateOne(function(err) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json({
                status: ":)"
            });
        }
    }, id, q);
};
exports.getLimit = function(req, res) {
    var limit = req.body.limit;
    var skip = req.body.skip;
    console.log(limit, skip);

    Pregunta.getLimit(function(err, preguntas) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json(preguntas);
        }
    }, limit, skip);
};

exports.deleteOne = function(req, res) {
    var id = req.params.id;
    Pregunta.deletePregunta(function(err, pregunta) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json({
                status: ":)",
                data: pregunta.deletedCount + " deleted"
            });
        }
    }, id);
};

exports.getOne = function(req, res) {
    var id = req.params.id;
    Pregunta.getOne(function(err, pregunta) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json(pregunta);
        }
    }, id);
};
