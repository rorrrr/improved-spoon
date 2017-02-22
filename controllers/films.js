var express = require('express');
var app = express();
var filmRouter = express.Router();

var FilmQuery = require('../client/db/filmQuery');
var query = new FilmQuery();
MongoClient = require('mongodb').MongoClient;

filmRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  })
});

filmRouter.get('/:id', function(req, res){
  query.all(function(results){
    res.json(results[req.params.id]);
  })
});

// filmRouter.put('/:id', function(req, res) {

//   var film = ({
//     title: req.body.title,
//     sport: req.body.sport
//   });

//   query.all(function(results){
//     results[req.params.id] = film;
//     res.json(results);;
//   })
// });

// filmRouter.post('/', function(req, res) {

//   var film = ({
//     title: req.body.title,
//     actors: req.body.sport 
//   });

//   query.all(function(results){
//     films.push(film);
//     res.json(results);
//   })
// });

// filmRouter.delete('/:id', function(req, res) {
//   query.all(function(results){
//     results.splice(req.params.id, 1);
//     res.json(results)
//   })
// });




module.exports = filmRouter;