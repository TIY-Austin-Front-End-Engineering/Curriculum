var flag = true; 

function test() {
    if(flag) {
        var flag = false;
        console.log('Switch flag from true to false');
    }
    else {
        flag = true;
        console.log('Switch flag from false to true');
    }
}
test();