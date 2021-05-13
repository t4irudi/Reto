// gameModel.js

var mongoose = require('mongoose');

//Setup Schema
var gameSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    description:{
      type: String,
      required: true
    },
    type: String,
    available: Boolean,
    price: Number,
    release_date:{
      type: Date,
      default: Date.now
    },
    platforms: Array
  },
  {
    collection:'juegos'
  }
);

//Game Contact model
var Game = module.exports = mongoose.model('game', gameSchema);

module.exports.get = function(callback, limit)
{
  Game.find(callback).limit(limit);
}

module.exports.findById = function(callback, id)
{
  Game.findOne({'_id': id}, callback);
}

module.exports.deleteGame = function(callback, id)
{
  Game.deleteOne({'_id': id}, callback);
};

module.exports.saveGame = function(callback, id, game)
{
  Game.updateOne({'_id':id}, game, callback);
};











/**/
