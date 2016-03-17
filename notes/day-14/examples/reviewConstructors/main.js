function Die() {
  this.faceValue = Math.ceil(Math.random()*6);
  this.roll = function() {
    this.faceValue = Math.ceil(Math.random()*6);
    return this.faceValue;
  };
}

var exampleDie = new Die();

function getProbabilities() {
  // make 2 dice
  var die1 = new Die();
  var die2 = new Die();
  // rolls 2 dice 1000 times each
  var probs = {};
  for (var i = 0; i < 1000; i++) {
    var rollResult1 = die1.roll();
    var rollResult2 = die2.roll();
    // adds the sum of EACH roll togehter
    var sum = rollResult2 + rollResult1;
    // keeps track of sum occurences
    if (sum in probs) {
      probs[sum]++;
    } else {
      probs[sum] = 1;
    }
  }
  // returns a list of the occurences
  // turn these into an array
  // var arr = [];
  // for (var rollResult in probs) {
  //   arr.push(probs[rollResult])
  // }
  // console.log(arr);
  return probs;
}

getProbabilities();
