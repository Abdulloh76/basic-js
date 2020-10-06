const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        i++;
        break; 
      case '--discard-prev':
        if(arr[i-2] === '--discard-next')
          break;
        if(i > 0) 
          result.pop();
        break;
      case '--double-next':
        if(i < arr.length-1) 
          result.push(arr[i+1])
        break; 
      case '--double-prev':
        if(arr[i-2] === '--discard-next')
          break;
        if(i > 0) result.push(arr[i-1]);
        break;
      default: result.push(arr[i]);
    }
  }
  return result;
};
