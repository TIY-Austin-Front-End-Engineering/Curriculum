exports.up = function(knex, Promise) {
	return knex.schema.createTable('jobs', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('title').notNull();
		t.string('location').notNull();
		t.text('description').notNull();
		t.jsonb('tags').nullable();
		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
		t.integer('companyId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('companies')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('jobs');
};
