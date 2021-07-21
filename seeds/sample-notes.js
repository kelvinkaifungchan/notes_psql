
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {user_id: 1, body: 'This is a sample note to test the database'},
        {user_id: 1, body: 'This is a sample note to test the database'},
        {user_id: 1, body: 'This is a sample note to test the database'}
      ]);
    });
};
