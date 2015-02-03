var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		console.log('Initialize AppView');

		_.bindAll(
			this,
			'render',
			'onAddPersonClick',
			'onPersonAdded'
		);

		this.$firstName = $('#first-name');
		this.$lastName = $('#last-name');
		this.$age = $('#age');
		this.$addPersonButton = $('#add-person-button');
		this.$peopleList = $('#people-list');

		this.people = new PersonCollection();

		this.$addPersonButton.on('click', this.onAddPersonClick);

		this.people.on('add', this.onPersonAdded);

		// this.$firstName.on('keyup', this.onPersonSet);
		// this.$lastName.on('keyup', this.onPersonSet);
		// this.$age.on('keyup', this.onPersonSet);


	},

	render: function() {
		console.log(this);
		console.log(this.newPerson.get('age'));
		this.$displayName.html(this.newPerson.getFullName());
		this.$displayAge.html(this.newPerson.get('age'));
	},

	onAddPersonClick: function() {
		console.log('onAddPersonClick');

		this.people.add({
			firstName: this.$firstNamee,
			lastName: this.$lastName.val(),
			age: this.$age.val()
		});
		console.log(this.people);

	},

	onPersonAdded: function(personModel) {
		console.log(personModel.attributes);
		console.log(personModel.getFullName());
		var newPersonView = new PersonView({model: personModel});
		this.$peopleList.append(newPersonView.$el);
	}
});