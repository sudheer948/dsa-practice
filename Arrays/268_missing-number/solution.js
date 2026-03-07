// LeetCode 268 - Missing Number
// Pattern: Math / Sum Formula
// Time Complexity: O(n)
// Space Complexity: O(1)

var missingNumber = function(nums) {

    let n = nums.length;

    // Expected sum from 0 → n
    let totalSum = (n * (n + 1)) / 2;

    let partialSum = 0;

    for (let i = 0; i < n; i++) {
        partialSum += nums[i];
    }

    return totalSum - partialSum;
};