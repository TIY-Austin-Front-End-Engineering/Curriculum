$(document).on('ready', function() {
	$('#submit').click(function() {
		var subtotal = 0;
		var $prices = $('.price');
		var $quantities = $('.quantity');

		for(var i=0; i<$prices.length; i++) {
			var price = parseFloat($prices.eq(i).val());
			var quantity = parseInt($quantities.eq(i).val());

			if(isNaN(price) || isNaN(quantity)) {
				throw 'All prices and quantities must be numbers';
			}

			subtotal += price * quantity;
		}



		// var price1 = parseFloat($('#price1').val());
		// var price2 = parseFloat($('#price2').val());
		// var price3 = parseFloat($('#price3').val());
		// var quantity1 = parseInt($('#quantity1').val());
		// var quantity2 = parseInt($('#quantity2').val());
		// var quantity3 = parseInt($('#quantity3').val());

		// if(isNaN(price1) || isNaN(price2) || isNaN(price3) || isNaN(quantity1) || isNaN(quantity2) || isNaN(quantity3)) {
		// 	throw 'All prices and quantities must be numbers';
		// }

		// subtotal += price1*quantity1;
		// subtotal += price2*quantity2;
		// subtotal += price3*quantity3;

		// console.log(subtotal);
		// console.log(subtotal*100);
		// console.log(Math.round(subtotal*100));
		// console.log(Math.round(subtotal*100)/100);

		var output = '';
		output += '<div>Subtotal: '+(Math.round(subtotal*100)/100)+'</div>';
		output += '<div>Tax: '+(Math.round(subtotal*0.055*100)/100)+'</div>';
		output += '<div>Total: '+(Math.round(subtotal*1.055*100)/100)+'</div>';

		$('#output').html(output);

	});
});
