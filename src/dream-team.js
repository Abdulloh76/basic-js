const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members == null || typeof(members) != 'object' || !members[0]) 
    return false;

  let result = '', j = 0;

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      while(members[i][j] == ' ') 
        j++;

      result += members[i][j];
      j = 0;
    }
  }

  return result.toUpperCase().split('').sort().join('');
};
