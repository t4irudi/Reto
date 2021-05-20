Pregunta = require('./preguntaModel');

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
    var preg = new Pregunta();
    preg.idioma = req.body.idioma;
    preg.idioma = req.body.idioma;
    preg.pregunta = req.body.pregunta;
    preg.a = req.body.a;
    preg.b = req.body.b;
    preg.c = req.body.c;
    preg.d = req.body.d;
    preg.respuesta = req.body.respuesta;
    preg.explicacion = req.body.explicacion;
    preg.categoria = req.body.categoria;
    console.log("post?");
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