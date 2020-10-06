const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  const num = parseFloat(sampleActivity);
  if(typeof(sampleActivity)!='string' || !num || num > 15 || num <= 0) 
    return false;

  const up = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  const down = (0.693 / HALF_LIFE_PERIOD);

  return Math.floor(up / down) + 1;

};
