const sumAll = function(firstNum, secondNum) {
  let sum = 0;
  if(typeof firstNum !== 'number' || typeof secondNum !== 'number') return 'ERROR';
  if(firstNum < 0 && secondNum < 0 ) return "ERROR";
  if(firstNum < secondNum){
    for(i = firstNum; firstNum <= secondNum; firstNum++){
      sum += firstNum
    }
  }else if(firstNum > secondNum){
    for(i = firstNum; firstNum >= secondNum; firstNum--){
      sum += firstNum
    }
  }

  return sum

};

// Do not edit below this line
module.exports = sumAll;
