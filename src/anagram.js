'use strict';

module.exports = (string1, string2) => {
  let first = [...string1].sort().join('');
  let second = [...string2].sort().join('');
  if(first == second) {return true;}
  else { return false };
};
