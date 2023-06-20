const lengthOfLongestSubstring = require('./lengthOfLongestSubstring.js')

describe('lengthOfLongestSubstring', () => {
    test('lengthOfLongestSubstring("abcabcbb") should return 3', () => {
        expect('abcabcbb').toEqual('abcabcbb')
    });
    test('lengthOfLongestSubstring("bbbbb") should return 1', () => {
        expect('bbbbb').toEqual('bbbbb')
    });
    test('lengthOfLongestSubstring("pwwkew") should return 3', () => {
        expect('pwwkew').toEqual('pwwkew')
    });
});