const fibonacci = function(i) {
    if(i < 0) return "OOPS";
    let fib = [];
    fib[0] = 0;
    fib[1] = 1

    for (let index = 2; index < 50; index++) {
        fib[index] = (fib[index-1] + fib[index-2]);           
    }
    return fib[i];
};


// Do not edit below this line
module.exports = fibonacci;
