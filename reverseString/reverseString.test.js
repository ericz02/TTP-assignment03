const reverseString = require('./reverseString');

describe('reverseString', () => {
    test('reverseString test case 1 with the word hello', () => {
        expect(reverseString('hello')).toBe('olleh')
    });
    test('reverseString test case 2 with the word OpenAI', () => {
        expect(reverseString('OpenAI')).toBe('IAnepO');
    });
    test('reverseString test case 3 with the word racecar', () => {
        expect('racecar').toBe('racecar')
    });
});