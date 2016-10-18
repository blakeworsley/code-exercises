const reverseString = require('./reverse-string');

it('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('yo')).toBe('oy');
  expect(reverseString('1234')).toBe('4321');
});
