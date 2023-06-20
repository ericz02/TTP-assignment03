// two pointer approach algorithm

function containMostWater(height) {
    // initialize the maximum area, left pointer, and right pointer.
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    // while the left pointer is less than the right pointer
    while (left < right) {
        // Calculate the area between the two pointers.
        let area = Math.min(height[left], height[right]) * (right - left);

        // Update the maximum area if necessary.
        maxArea = Math.max(maxArea, area);

        // Move the pointer with the smaller height.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    // Return the maximum area.
    return maxArea;
}

module.exports = containMostWater;