const mathFunctions = require('./mathFunctions');

describe ('mathFunctions', () => {
    test('Add 1 + 2 to equal 3', () => {
        expect(mathFunctions.add(1,2)).toBe(3);
    })
    test('Subtract 2 - 1 to equal 1', () => {
        expect(mathFunctions.subtract(2,1)).toBe(1);
    })
    test('Multiply 2 * 2 to equal 4', () => {
        expect(mathFunctions.multiply(2,2)).toBe(4);
    })
    test('Divide 4 / 2 to equal 2', () => {
        expect(mathFunctions.divide(4,2)).toBe(2);
    })
})