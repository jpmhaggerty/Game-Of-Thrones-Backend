exports.up = function(knex) {
    return knex.schema.createTable('houses_table', table => {
        table.text('house');
        table.text('name');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('houses_table');
};
