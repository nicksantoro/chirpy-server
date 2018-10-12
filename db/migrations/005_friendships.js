exports.up = function (knex, Promise) {
    return knex.schema.createTable('friendships', (table) => {
        table.increments();
        table.integer("follower_id").references('users.id').onDelete('cascade');
        table.integer("followee_id").references('users.id').onDelete('cascade');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('friendships');
};
