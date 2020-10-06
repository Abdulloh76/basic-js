const CustomError = require("../extensions/custom-error");

const separatorDefault = '+';
const additionSeparatorDefault = '|';

module.exports = function repeater(str, options) {
  
  if(!options.separator)
    options.separator = separatorDefault;
  if(!options.additionSeparator)
    options.additionSeparator = additionSeparatorDefault;


  const additional = () => {
    let add = options.addition;
    for(let i = 0; i < options.additionRepeatTimes - 1; i++) {
      add += options.additionSeparator + options.addition;
    }
  return add;
  // add -> PLUS00PLUS00PLUS
  }

  if(str === null)
    str = 'null';
  if(options.addition === null)
    options.addition = 'null';
  
  str = str.toString();
  let result = str;
  let repeatedText = str;
  if(options.addition || options.addition === false) {
    options.addition = options.addition.toString();
    result += additional();
    repeatedText += additional(); // repeating text 
  }
  for(let i = 0; i < options.repeatTimes-1; i++) {
    result += options.separator + repeatedText;
    // result += options.addition ? options.separator + str + additional() : options.separator + str;
  }

  return result;

};
  