exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("games")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        { title: "Pacman", genre: "Arcade", release_year: 1980 },
        { title: "Batman", genre: "Sports", release_year: 1990 },
        { title: "Robin", genre: "Hero", release_year: 1280 }
      ]);
    });
};
