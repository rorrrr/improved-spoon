MongoClient = require('mongodb').MongoClient;

var FilmQuery = function() {

  this.url = 'mongodb://localhost:27017/airbuds_site';

};

FilmQuery.prototype = {

  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        console.log("connected");
        var collection = db.collection('films');
        collection.find().toArray( function (err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }

}

module.exports = FilmQuery;