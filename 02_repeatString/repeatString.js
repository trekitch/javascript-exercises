const repeatString = function(word, number) {
  let returnString = ""
  if(number >= 0){
    for(let i = 0; i < number; i++){
      returnString += word;
    }
      return returnString;
  }else{
    return "ERROR"
  }

};

// Do not edit below this line
module.exports = repeatString;
