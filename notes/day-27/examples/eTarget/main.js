$('.clickable').on('click', function(e) {
  console.log(e.target);
  var htmlStoredData = ($(e.target).data());
  console.log(peopleData[htmlStoredData.name])
  var imgUrl = $(e.target).attr('src')
})

var peopleData = {
  Jess: {
    age: 32,
    height: '5\'8"'
  }
}
