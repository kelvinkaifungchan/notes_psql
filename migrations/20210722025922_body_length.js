
exports.up = function(knex) {
    return knex.schema.alterTable('notes', (notes) => {
        notes.string('body',20000).alter();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes')
};
 