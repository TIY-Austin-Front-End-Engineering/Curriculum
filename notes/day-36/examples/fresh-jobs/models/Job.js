module.exports = bookshelf.model('Job', {
	tableName: 'jobs',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});