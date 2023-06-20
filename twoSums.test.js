const twoSum = require("./twoSum");

describe("twoSum function", () => {
    // Test case 1
    test("Returns indices of two numbers that add up to the target - Example 1", () => {

        // here is the array of numbers and the target value to test against
        const nums = [2, 7, 11, 15];
        const target = 9;
        const expected = [0, 1];
        
        expect(twoSum(nums, target)).toEqual(expected);
    });
    
    // Test case 2
    test("Returns indices of two numbers that add up to the target - Example 2", () => {
        // here is the array of numbers and the target value to test against
        const nums = [3, 2, 4];
        const target = 6;
        const expected = [1, 2];
        
        expect(twoSum(nums, target)).toEqual(expected);
    });
    
    // Test case 3
    test("Returns indices of two numbers that add up to the target - Example 3", () => {
        // here is the array of numbers and the target value to test against
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const expected = [2, 4];

        expect(twoSum(nums, target)).toEqual(expected);
    });
});
