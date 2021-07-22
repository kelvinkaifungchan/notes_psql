exports.up = function (knex) {
    return knex.schema.createTable('notes', (notes) => {
        notes.increments().primary();
        notes.integer('user_id').unsigned();
        notes.foreign('user_id').references('users.id');
        notes.string('body');
        notes.timestamps(false, true);
    })
};

exports.down = function (knex) {
};