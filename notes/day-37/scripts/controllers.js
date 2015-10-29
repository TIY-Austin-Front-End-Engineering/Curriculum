angular.module('tiyfe', [])
.controller('HelloController', function() {
  this.textChanged = function() {
    console.log(this.username);
  };
});