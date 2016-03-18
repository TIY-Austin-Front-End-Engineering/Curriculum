// create a new method that all examples of strings can share
String.prototype.reverse = function() {
  // split the string up into an array.
  // use the arry reverse method
  // join it back together
  // return that joined string
  return this.split('').reverse().join('');
}

// OVERWRITE the existing forEach method available for arrays
Array.prototype.forEach = function() {
  return 'haha sucka';
}

// Overwrite the existing toString method
Object.prototype.toString = function() {
  var obj = this;
  var keyMap = Object.keys(obj);
  console.log(keyMap);
  var keyAndValue = keyMap.map(function(key) {
    return key + ': ' + obj[key];
  });
  return keyAndValue.join(', ');
}

// create a constructor
function Mammal() {
  this.covering = 'hair';
  this.vertebrate = true;
}

// define some methods on the constructor's prototype
Mammal.prototype.nurse = function() {
  //do whatever nursing is
}

// create a 'sub class' that 'extends' the mammal constructor
function Cat() {
  // .call runs a function. In this case, we are running the mammal function, which sets "this.covering" to hair, and "this.vertebrate" to true.
  // the issue is that when it sets the "this.whatever" properties, it's inside the "Mammal" context, which doesn't really mean anything here inside the cat constructor
  // the call method allows us to CHANGE what "this" means when we call the function. Here inside the cat constructor, "this" refers to an instance of cat that we create with the new word. Passing it into call makes the Mammal function redirect it's "this"s to this new cat object.
  Mammal.call(this);
  this.whiskers = true;
}

// this method of hooking up the prototype chain will be bi-directional - anything added to the cat prototype will also be added to the mammal prototype
Cat.prototype = Mammal.prototype;

// this method of hooking up the prototype chain will be uni-directional. cat's can look up properties on the mammal prototype, but the mammal prototype doesn't know about the cat prototype.
Cat.prototype = Object.create(Mammal.prototype);

// define a function that all cats shoudl be able to do.
Cat.prototype.purr = function() {
  return 'rrrr rrrr rrr'
}
