// var flag = true; 

// function test() {
//     if(flag) {
//         var flag = false;
//         console.log('Switch flag from true to false');
//     }
//     else {
//         flag = true;
//         console.log('Switch flag from false to true');
//     }
// }
// test();

var run = false;

function fancy(arg1, arg2) {
    if(run) {
        console.log('I can run');
    }
    else {
        console.log('I can\'t run');
    }

    function run() {
        console.log('Will I run?');
    }
}
fancy();

// var run = false;

// function fancy(arg1, arg2) {
// 	var run;
//     if(run) {
//         console.log('I can run');
//     }
//     else {
//         console.log('I can\'t run');
//     }

//     run = function() {
//         console.log('Will I run?');
//     }
// }
// fancy();











