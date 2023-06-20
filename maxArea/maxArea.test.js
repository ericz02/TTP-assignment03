const maxArea = require('./maxArea.js')

describe('maxArea', () => {
    // writing down the provided test cases from the problem
    test('maxArea([1,8,6,2,5,4,8,3,7]) should return 49', () => {
        expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49)
    });
    test('maxArea([1,1]) should return 1', () => {
        expect(maxArea([1,1])).toEqual(1)
    });
    test('maxArea([4,3,2,1,4]) should return 16', () => {
        expect(maxArea([4,3,2,1,4])).toEqual(16)
    });
});