const stringFunctions = require('./stringFunctions');

describe('stringFunctions', () => {
    test('should return string in reverse', () => {
        expect(stringFunctions.reverseString('hello')).toBe('olleh');
    });
    test('should return true if string is a palindrome, otherwise return false', () => {
        expect(stringFunctions.isPalindrome('racecar')).toBe(true);
        expect(stringFunctions.isPalindrome('hello')).toBe(false);
    });
});