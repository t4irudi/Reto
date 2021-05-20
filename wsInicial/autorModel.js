var mongoose = require('mongoose');

//Setup Schema
var autorSchema = mongoose.Schema({
    user: String,
    pwd: String,
    nombre: String,
    apellidos: String
}, {
    collection: 'autores'
});

var Autor = module.exports = mongoose.model('autor', autorSchema);

module.exports.loginData = function(callback, user, password) {
    Autor.find({ user: user, pwd: password }, callback);
    console.log('login');
};
