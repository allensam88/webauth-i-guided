
exports.seed = function (knex) {
    return knex('roles').insert([
        { id: 1, name: 'admin' },
        { id: 2, name: 'student' },
        { id: 3, name: 'teacher' }
    ]);
};
