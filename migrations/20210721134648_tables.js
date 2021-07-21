exports.up = function(knex) {
    return knex.schema.createTable('users',(table) => {
        table.increments().unsigned().primary();
        table.string('username').unique().notNull();
        table.string('password').notNull();
        table.timestamps(false,true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };
  
  