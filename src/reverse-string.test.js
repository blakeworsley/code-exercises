const reverseString = require('./reverse-string');
const anagram = require('./anagram');

it('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('yo')).toBe('oy');
  expect(reverseString('1234')).toBe('4321');
});


it('should match anagrams', () => {
  expect(anagram('abc', 'bca')).toBe(true);
  expect(anagram('def', 'fed')).toBe(true);
  expect(anagram('de f', 'f ed')).toBe(true);
});
