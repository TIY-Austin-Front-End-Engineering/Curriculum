'use strict';
var Backbone = require('backbone');
var React = require('react');
var List = require('./components/List');
var CompanyDetails = require('./components/CompanyDetails');
var r;

var CompanyModel = Backbone.Model.extend({
	defaults: {
		name: '',
		location: '',
		employees: 0,
		description: ''
	}
});

var CompanyCollection = Backbone.Collection.extend({
	model: CompanyModel
});

var companies = new CompanyCollection([
	{
		id: 1,
		name: 'Google',
		location: 'Mountain View, California, U.S.',
		employees: 57148,
		description: 'Google Inc. is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, and software.[8] Most of its profits are derived from AdWords,[9][10] an online advertising service that places advertising near the list of search results.'
	},
	{
		id: 2,
		name: 'Facebook',
		location: 'Menlo Park, California, US',
		employees: 9199,
		description: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.[8][9] The founders had initially limited the website\'s membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford University. It gradually added support for students at various other universities and later to high-school students. Since 2006, anyone who is at least 13 years old was allowed to become a registered user of the website, though the age requirement may be higher depending on applicable local laws.[10] Its name comes from a colloquialism for the directory given to it by American universities\' students.[11]'
	},
	{
		id: 3,
		name: 'Ikea',
		location: 'Leiden, Netherlands',
		employees: 147000,
		description: 'IKEA (/aɪˈkiːə/; Swedish: [ɪˈkeːˈa][2]) is a multinational group of companies that designs and sells ready-to-assemble furniture (such as beds, chairs and desks), appliances, small motor vehicles and home accessories. As of January 2008, it is the world\'s largest furniture retailer.[3] Founded in Sweden in 1943 by then-17-year-old Ingvar Kamprad, who was listed as one of the world\'s richest people in 2013,[4] the company\'s name is an acronym that consists of the initials of Ingvar Kamprad, Elmtaryd (the farm where he grew up), and Agunnaryd (his hometown in Småland, south Sweden).[5]'
	}
]);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'details/:name/:id': 'details'
	},
	home: function() {
		React.render(
			<List companies={companies} router={this} />,
			document.getElementById('app')
		);
	},
	details: function(name, id) {
		var company = companies.get(id);
		React.render(
			<CompanyDetails company={company} />,
			document.getElementById('app')
		);
	}
});

r = new Router();
Backbone.history.start();








