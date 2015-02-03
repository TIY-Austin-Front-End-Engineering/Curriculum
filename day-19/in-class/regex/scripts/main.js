var matchPhoneFirst = new RegExp('[0-9]{3}[-\.]?[0-9]{3}[-\.]?[0-9]{4}');
var matchPhoneSecond = /[0-9]{3}[-\.]?[0-9]{3}[-\.]?[0-9]{4}/g;

var myString = 'ZZZ608-514-4444AAA555.666.8888BBB1234567890CCC123:444:4535 78704';

var results = myString.match(matchPhoneFirst);
console.log(results);

var results2 = matchPhoneSecond.exec(myString);
console.log(results2);

var results3 = myString.split(matchPhoneFirst);
console.log(results3);


var myString = 'ZZZ AAA BBB CCC123:444:453578704';

console.log(myString.split(' '));
