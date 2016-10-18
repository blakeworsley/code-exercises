'use strict';

module.exports = (string) => {
  let result = '';
  for (let i = string.length - 1; i > -1; i--) {
    result += string[i];
  }
  return result;
};



// FIRST PASS
// module.exports = (string) => {
//   return string.split("").reverse().join("");
// };
