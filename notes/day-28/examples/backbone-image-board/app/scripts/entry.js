// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';

// console.log(Backbone);

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
		// console.log(this.$('.delete'));
		// this.$('.delete').click(this.onDeleteClick.bind(this));
		// this.$('.delete').click(() => {
		// 	console.log(this);
		// });
	},
	render: function() {
		// console.log(this);
		// Create template
		const template = `
			<div class="image">
				<button class="delete">Delete</button>
				<img src="${this.src}">
				<p>${this.label}</p>
			</div>`;
		// Put it inside of the view element
		this.$el.append(template);
		console.log(this.el);
	},
	onDeleteClick: function() {
		this.$el.hide();
		this.$el.remove();
		console.log(this);
		console.log('the delete button was clicked');
	}
});

const imageInfo = [
	{
		label: 'Angry Bird Baloon',
		src: 'http://static3.businessinsider.com/image/52517a7feab8ea975f3a7ba2/stunning-photos-of-hot-air-balloons-at-the-albuquerque-balloon-fiesta.jpg'
	},
	{
		label: 'Air Baloon Ride',
		src: 'http://d2847ql9t214mi.cloudfront.net/wp-content/uploads/2015/03/Best-Destinations-in-India-for-Hot-Air-Balloon-Ride.jpg'
	},
	{
		label: 'Hot Air Baloon Real Image',
		src: 'http://www.emilysentourage.org/wp-content/uploads/hot-air-balloon-real-image.jpg'
	}
];

imageInfo.forEach((val, index, array) => {
	// console.log(val);
	let newImageView = new ImageView(val.label, val.src);
	$('#image-list').append(newImageView.$el);
});

// let angryBirdImage = new ImageView(
// 	'Angry Bird Baloon',
// 	'http://static3.businessinsider.com/image/52517a7feab8ea975f3a7ba2/stunning-photos-of-hot-air-balloons-at-the-albuquerque-balloon-fiesta.jpg'
// );
// // console.log(angryBirdImage);
// angryBirdImage.render();
// let airRide = new ImageView(
// 	'Air Baloon Ride',
// 	'http://d2847ql9t214mi.cloudfront.net/wp-content/uploads/2015/03/Best-Destinations-in-India-for-Hot-Air-Balloon-Ride.jpg'
// );
// airRide.render();
// let hotAir = new ImageView(
// 	'Hot Air Baloon Real Image',
// 	'http://www.emilysentourage.org/wp-content/uploads/hot-air-balloon-real-image.jpg'
// );
// hotAir.render();
// // console.log(angryBirdImage);

// $('#image-list').append(angryBirdImage.$el);
// $('#image-list').append(airRide.$el);
// $('#image-list').append(hotAir.$el);



/* jQuery Example */


// const imageTemplate1 = `
// <div class="image">
// 	<button class="delete1">Delete</button>
// 	<img src="http://static3.businessinsider.com/image/52517a7feab8ea975f3a7ba2/stunning-photos-of-hot-air-balloons-at-the-albuquerque-balloon-fiesta.jpg">
// 	<p>This is my image caption</p>
// </div>
// `;

// const imageTemplate2 = `
// <div class="image">
// 	<button class="delete1">Delete</button>
// 	<img src="http://d2847ql9t214mi.cloudfront.net/wp-content/uploads/2015/03/Best-Destinations-in-India-for-Hot-Air-Balloon-Ride.jpg">
// 	<p>This is my image caption</p>
// </div>
// `;

// const imageTemplate3 = `
// <div class="image">
// 	<button class="delete1">Delete</button>
// 	<img src="http://www.emilysentourage.org/wp-content/uploads/hot-air-balloon-real-image.jpg">
// 	<p>This is my image caption</p>
// </div>
// `;


// $('#image-list').append(imageTemplate1);
// $('#image-list').append(imageTemplate2);
// $('#image-list').append(imageTemplate3);

// $('.delete1').click((e) => {
// 	console.log('delete image 1');
// })