const ftoc = function(temp) {
  const tempInC = ((temp-32) * (5/9))
  return Math.round(tempInC * 10) /10
};

const ctof = function(temp) {
  const tempInF = ((temp*9/5) + 32).toFixed(1)
  return Math.round(tempInF * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
