module.exports = bookshelf.model('Company', {
	tableName: 'companies',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});