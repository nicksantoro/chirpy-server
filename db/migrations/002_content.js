exports.up = function (knex, Promise) {
  return knex.schema.createTable('content', (table) => {
    table.increments();
    table.integer("user_id").references('users.id').onDelete('cascade');
    table.string("title").notNullable();
    table.string("body").notNullable();
    table.string("type").notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('content');
};