exports.seed = function (knex) {
    //Delete all existing users first
    return knex('users')
    .del()
    .then(function() {
        return knex('users').insert([
            {username: 'Test', password: 'Password'}
        ]);
    });
}