// gameController.js

//Import game model
Game = require('./gameModel');

//Handle index actions
exports.index = function(req, res)
{
  Game.get(function(err, games)
  {
    if(err)
    {
      res.json({
        status: "error",
        message: err
      });
    } else
    {
      res.json({
        status:"success",
        message:"Games retrieved succesfully",
        data:games
      });
    }
  });
};

//Handle create games actions
exports.new = function(req, res)
{
  var game = new Game();
  game.name = req.body.name;
  game.description = req.body.description;
  game.type = req.body.type;
  game.available = req.body.available;
  game.price = req.body.price;
  game.release_date = req.body.release_date;
  game.platforms = req.body.platforms;

  game.save(function(err)
  {
    res.json({
      message:'New game created',
      data: game
    });
  });
};

exports.one = function(req, res)
{
  var id = req.params.id;
  Game.findById(function(err, game)
  {
    if(err)
    {
      res.json({
        status: "error",
        message: err
      });
    } else
    {
      res.json({
        status:"success",
        message:"Game retrieved succesfully",
        data:game
      });
    }
  }, id);
};

exports.deleteOne = function(req, res)
{
  var id = req.params.id;
  Game.deleteGame(function(err, game)
  {
    if(err)
    {
      res.json({
        status: "error",
        message: err
      });
    } else
    {
      res.json({
        status:"success",
        message:"Game retrieved succesfully",
        data:game.deletedCount + " deleted"
      });
    }
  }, id);
};

exports.updateGame = function(req, res)
{
  var id = req.params.id;
  var juego = req.body;
  Game.saveGame(function(err, game)
  {
    res.json({
      status:"success",
      message:"Game retrieved succesfully",
      data:game
    });
  }, id, juego);
}







/**/
