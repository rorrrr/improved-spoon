use airbuds_site;

db.films.drop();

db.films.insert([
{ 
  title: "Air Bud",
  sport: "Basketball",
  image: "https://upload.wikimedia.org/wikipedia/en/2/2b/Air_bud_poster.jpg"
},
{ 
  title: "Air Bud: Golden Receiver",
  sport: "American Football",
  image: "http://vignette2.wikia.nocookie.net/disney/images/4/43/94VOLUME2.jpg/revision/latest?cb=20150712002739"
},
{ 
  title: "Air Bud: World Pup",
  sport: "Football",
  image: "http://vignette4.wikia.nocookie.net/disney/images/0/02/Air_Bud_World_Pup_VHS.jpg/revision/latest?cb=20150712003124"
},
{
  title: "Air Bud: Seventh Inning Fetch",
  sport: "Baseball",
  image: "https://images-na.ssl-images-amazon.com/images/I/51e8w36ckxL.jpg"
}

]);

// db.films.find()
