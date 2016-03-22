var form = $('form');
var textBox = $('input[type="text"]');

function validateEmail(email) {
  email = email.trim();
  // require that it is not empty
  // require that email has a streudle
  // if neither then return false
  if (!email || email.indexOf('@') < 1) {
    return false;
  }
  return true;
  // otherwise return true;
}

form.on('submit', function(e) {
  e.preventDefault();
})

textBox.on('keyup', function(e) {
  if (e.which === 13) {
    // var email = $(e.target).val();
    if (!validateEmail($(e.target).val())) {
      textBox.focus().css({'outline-color': 'red'});
    } else {
      textBox.focus().css({'outline-color': 'blue'});
    }
  }
})
