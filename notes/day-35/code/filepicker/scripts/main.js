$(document).on('ready', function() {
	filepicker.setKey('AQbinKCdHTLOXK7MPLluCz');

	$('#submit').click(function() {
		filepicker.pick(
		  {
		    cropRatio: 4/3,
		    mimetype: 'image/*',
		    services: ['CONVERT', 'COMPUTER'],
		    conversions: ['crop', 'rotate', 'filter']
		  },
		  function(Blob){
		  	$('#output').html('<img src="'+Blob.url+'">')
		    console.log(Blob.url);
		  }
		);
	});
});
