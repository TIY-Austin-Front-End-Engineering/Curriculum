module.exports = bookshelf.model('Panda', {
	tableName: 'pandas',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});