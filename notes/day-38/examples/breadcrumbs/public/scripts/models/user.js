import Backbone from 'backbone';

const UserModel = Backbone.Model.extend({
	defaults: {
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		createdAt: null,
		updatedAt: null
	},
	idAttribute: 'id'
});

export default new UserModel(window.user);