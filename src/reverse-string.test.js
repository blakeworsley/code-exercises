const reverseString = require('./reverse-string');
const anagram = require('./anagram');
const exclusive = require('./exclusive');

it('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('yo')).toBe('oy');
  expect(reverseString('1234')).toBe('4321');
});


it('should match anagrams', () => {
  expect(anagram('abc', 'bca')).toBe(true);
  expect(anagram('def', 'fed')).toBe(true);
  expect(anagram('de f', 'F e d')).toBe(true);
});

it('should return false if characters are not unique', () => {
  expect(anagram('abc', 'bca')).toBe(true);
  expect(anagram('def', 'feed')).toBe(false);
  expect(anagram('de f', 'F ee d')).toBe(false);
  expect(anagram('de f', 'F e d')).toBe(true);
});
