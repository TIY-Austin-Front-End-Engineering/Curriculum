exports.up = function(knex, Promise) {
	return knex.schema.createTable('pandas', function(table) {
		table.increments('id').unsigned().primary();
		table.dateTime('createdAt').notNull();
		table.dateTime('updatedAt').nullable();
		table.dateTime('deletedAt').nullable();

		table.string('name').notNull();
		table.integer('age').unsigned().nullable();
		table.string('type').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('pandas');
};
