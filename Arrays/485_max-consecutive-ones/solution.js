// LeetCode 485 - Max Consecutive Ones
// Pattern: Tracking Consecutive Elements
// Time: O(n)
// Space: O(1)

var findMaxConsecutiveOnes = function(nums) {

    let currentCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            currentCount++;
        } 
        else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }

    }

    return Math.max(maxCount, currentCount);
};