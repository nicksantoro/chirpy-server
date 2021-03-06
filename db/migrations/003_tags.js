exports.up = function (knex, Promise) {
  return knex.schema.createTable('tags', (table) => {
    table.increments();
    table.string("tag").notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tags');
};