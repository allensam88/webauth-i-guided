
exports.up = function(knex) {
    return knex.schema.createTable('roles', tbl => {
        tbl.increments();
        tbl.string('name').notNullable
    })
};

exports.down = function(knex) {
  
};
