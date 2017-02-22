use airbuds_site;

db.collection.drop();

db.films.insert([
  { 
    title: "Air Bud",
    sport: "Basketball"
  },
  { 
    title: "Air Bud: Golden Receiver",
    sport: "American Football"
  },
  { 
    title: "Air Bud: World Pup",
    sport: "Football"
  }

  ]
);

