exports.up = function (knex, Promise) {
    return knex.schema.createTable('content_tags', (table) => {
        table.increments();
        table.integer("content_id").references('content.id').onDelete('cascade');
        table.integer("tags_id").references('tags.id').onDelete('cascade');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('content_tags');
};