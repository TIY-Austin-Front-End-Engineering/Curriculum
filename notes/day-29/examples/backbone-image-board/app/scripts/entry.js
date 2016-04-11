// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import ImageCollection from './collections/ImageCollection';

const ImageView = Backbone.View.extend({
	tagName: 'article',
	className: 'image-wrapper',
	events: {
		'click .delete': 'onDeleteClick'
	},
	initialize: function(label, src) {
		this.label = label;
		this.src = src;
		this.render();
	},
	render: function() {
		const template = `
			<div class="image">
				<button class="delete">Delete</button>
				<img src="${this.src}">
				<p>${this.label}</p>
			</div>`;
		this.$el.html(template);
	},
	onDeleteClick: function() {
		this.$el.hide();
		this.$el.remove();
	}
});

let polarBears = new ImageCollection();
var settings = {
	success: function() {
		polarBears.forEach((image) => {
			console.log(image.get('caption'));
			let newPolarBearView = new ImageView(
				image.get('caption'),
				image.get('src')
			);
			$('.image-list').append(newPolarBearView.el);
		});
	}
};
polarBears.fetch(settings);

$('.image-form').on('submit', (e) => {
	e.preventDefault();
	let newPolarBear = {
		src: $('.src').val(),
		caption: $('.caption').val()
	};
	polarBears.create(newPolarBear);
	let newPolarBearView = new ImageView(
		newPolarBear.caption,
		newPolarBear.src
	);
	$('.image-list').append(newPolarBearView.el);
});

// const polarBear = new ImageView(
// 	'Baby polar bear',
// 	'http://www.polarbearendangered.com/wp-content/uploads/2013/12/polar-bear-4.jpg'
// );

// polarBear.render();
// $('.image-list').append(polarBear.$el);

// imageInfo.forEach((val, index, array) => {
// 	let newImageView = new ImageView(val.label, val.src);
// 	$('#image-list').append(newImageView.$el);
// });












