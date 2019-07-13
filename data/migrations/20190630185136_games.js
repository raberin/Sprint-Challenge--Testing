exports.up = function(knex) {
  return knex.schema.createTable("games", tbl => {
    tbl.increments();

    tbl.string("title", 256);
    tbl.string("genre", 256);
    tbl.integer("release_year");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("games");
};
