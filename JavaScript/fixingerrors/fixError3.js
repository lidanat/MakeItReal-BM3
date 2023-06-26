function myFunction(a, b) {
    let result;
    if(a.b === undefined){
        result = false;
    } else {
        result = a.hasOwnProperty(b);
    }
    return result;
}

    console.log('Result: '+ myFunction({a:1,b:2,c:3},'b'));
    console.log('Result: '+ myFunction({x:'a',y:'b',z:'c'},'a'));
    console.log('Result: '+ myFunction({x:'a',y:'b',z:undefined},'z'));