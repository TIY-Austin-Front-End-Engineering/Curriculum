var myMessage = document.getElementById('message');

var alertFunction = function() {
  alert('here\'s a message');
}

var intervalId1 = setTimeout(alertFunction, 2000);
var intervalId2 = setTimeout(alertFunction, 10000);
console.log(intervalId1);
console.log(intervalId2);
clearInterval(intervalId1);

// console.log(myMessage);
// console.log(myMessage.style.border = '1px solid black');

// var listItems = document.getElementsByClassName('item');
// console.log(listItems);
// // listItems[1].color = 'red';
// // listItems[1].style.backgroundColor = 'black';

// for(var i=0; i<listItems.length; i++) {
//   listItems[i].style.color = 'rgb(100, 100, 100)';
//   listItems[i].style.fontSize = '3em';
// }

// var notItems = document.getElementsByClassName('not-item');
// console.log(notItems);

// var listElements = document.getElementsByTagName('li');

// var divs = document.getElementsByTagName('div');

// var innerDiv = document.querySelector('.div1 .div2');


// console.log(innerDiv);
