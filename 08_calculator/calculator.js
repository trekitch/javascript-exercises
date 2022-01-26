const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
  return numbers.reduce((a, b) => a + b,0);
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
