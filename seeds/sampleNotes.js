exports.seed = function (knex) {
    //Delete all existing users first
    return knex('notes')
    .del()
    .then(function() {
        return knex('notes').insert([
            {user_id: 1, body: 'This is a sample note to test the database'},
            {user_id: 1, body: 'This is a sample note to test the database'},
            {user_id: 1, body: 'This is a sample note to test the database'},
        ]);
    });
}