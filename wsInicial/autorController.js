Autor = require('./autorModel');

exports.login = function(req, res) {
    var user = req.params.user;
    var pwd = req.body.pwd;
    Autor.loginData(function(err, autor) {
        if (err) {
            res.json({
                status: ":(",
                message: err
            });
        } else {
            res.json(autor);
        }
    }, user, pwd);
};