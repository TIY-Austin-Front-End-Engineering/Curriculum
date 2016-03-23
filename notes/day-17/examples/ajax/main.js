var handleData = function(data) {
  var container = $('#user-repos');
  data.forEach(function(val, i, arr) {
    var newEl = $('<div></div>', {'data-id': val.id}).html(val.name);
    // console.log(newEl);
    container.append(newEl)
  });
  $('div').on('click', function(e) {
    console.log($(e.target).data());
  })
};

var settings = {
  url: 'https://api.github.com/users/nicerhugs/repos',
  type: 'GET',
  success: handleData,
  error: function(err) {
    console.log(err);
  },
  complete: function() {
    console.log('i got a response')
  }
};

$.ajax(settings);
