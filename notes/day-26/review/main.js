var urls = [
  'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  'http://fillmurray.com/500/400',
  'http://img.huffingtonpost.com/asset/scalefit_630_noupscale/561549ff1400002900bfc5a7.jpeg'
];

urls.forEach(function(val, i, arr) {
  var catPic = $('<img/>').addClass('cat-pic').attr('src', val).attr('data-album-id', i);
  $('#content').append(catPic);
});

$('.cat-pic').on('click', function(e) {
  var $clicked = $(e.target);
  var id = $clicked.data('album-id');
  var newImg= $('<img/>').attr('src', $clicked.attr('src')).addClass('bigPic')
  $('#content').html('').append(newImg);
});
