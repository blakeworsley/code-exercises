'use strict';

module.exports = (first) => {
  const word = [...first.trim().toLowerCase()].sort();
  for (let letter of one) {
   return (word[letter] === word[letter + 1]);
 };
};



// 
// module.exports = (word) => {
//   const letters = {};
//   for (const letter of word) {
//     if (letters[letter]) {return false;}
//       letters[letter] = true;
//   }
//   return true;
// };
