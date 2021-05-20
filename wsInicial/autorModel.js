var mongoose = require('mongoose');

//Setup Schema
var autorSchema = mongoose.Schema({
    _id: Number,
    user: String,
    pwd: String,
    nombre: String,
    apellidos: String
}, {
    collection: 'autores'
});

var Autor = module.exports = mongoose.model('autor', autorSchema);

module.exports.loginData = function(callback, user, pwd) {
    Autor.findOne({ user: user, pwd: pwd }, callback);
    console.log('login');
};