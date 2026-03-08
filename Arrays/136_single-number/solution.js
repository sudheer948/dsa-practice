// LeetCode 136 - Single Number
// Pattern: Bit Manipulation / XOR
// Time Complexity: O(n)
// Space Complexity: O(1)

var singleNumber = function(nums) {

    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor;
};