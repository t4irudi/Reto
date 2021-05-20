Autor = require('./autorModel');

exports.login = function(req, res) {
    Autor.loginData(function(err, autor) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json(autor);
        }
    });
};