exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      knex('users').del()
    })
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          username: 'Test',
          password: 'Password'
        },
        {
          username: 'User',
          password: 'Password'
        }
      ]);
    });
};