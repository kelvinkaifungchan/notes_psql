exports.up = function(knex) {
    return knex.schema.createTable('users',(table) => {
        table.increments().unsigned().primary();
        table.string('username').unique().notNull();
        table.string('password').notNull();
        table.timestamps(false,true);
    })
    // .then(()=> {
    //     return knex.schema.createTable('notes',(notes) => {
    //         notes.increments('id').primary();
    //         notes.string('user_id').unsigned();
    //         notes.foreign('user_id').references('users.id');
    //         notes.string('body');
    //         table.timestamps(false,true);
    //     })
    // })
  };
  
  exports.down = function(knex) {
    // return knex.schema.dropTable('notes')
    // .then(() => knex.schema.dropTable('users'))
    return knex.schema.dropTable('users')
  };
  
  