'use strict';


// HASH TABLE : reasonable and fast
// module.exports = (first, second) => {
//   const firstWord = {};
//   const secondWord = {};
//
//   for (let letter of first) {
//     const l = firstWord[letter]
//     firstWord[letter] = l ? l + 1 : 1;
//   }
//
//   for (let letter of first) {
//     const l = secondWord[letter]
//     secondWord[letter] = l ? l + 1 : 1;
//   }
//
//   if (Object.keys(firstWord).length !== Object.keys(secondWord).length) return false;
//
//   for (let letters of Object.keys(firstword).length) {
//     if
//   }
// };



// Good one
module.exports = (string1, string2) => {
  let one = [...string1.toLowerCase()].sort('').join('').trim();
  let two = [...string2.toLowerCase()].sort('').join('').trim();
    return (one === two);
};



// Secondary
// module.exports = (string1, string2) => {
//   if ([...string1.toLowerCase()].sort().join('') === [...string2.toLowerCase()].sort().join('')) return true;
// };



// Original solution
// module.exports = (string1, string2) => {
//   let first = [...string1].sort().join('');
//   let second = [...string2].sort().join('');
//   if(first == second) {return true;}
//   else { return false };
// };
