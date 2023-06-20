// isn't this beautiful code? i think so too, i didnt brute force it, i used a hashmap

function twoSum(nums, target) {
    // hashmap to store complement values
    const map = new Map();

    // for loop to iterate through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // calculate the complement value
        const complement = target - nums[i];

        // if the complement value is in the hashmap, return the indices
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // if the complement value is not in the hashmap, add the current number and its index to the hashmap
        map.set(nums[i], i);
    }

    // return an empty array if no two numbers add up to the target
    return [];
}


module.exports = twoSum;