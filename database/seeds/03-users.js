
exports.seed = function (knex) {
    return knex('users').insert([
        { id: 1, username: 'JoeBob', password: '1234', role_id: 1 },
        { id: 2, username: 'JimBob', password: '5678', role_id: 2 },
        { id: 3, username: 'BillyBob', password: '666', role_id: 3 }
    ]);
};
