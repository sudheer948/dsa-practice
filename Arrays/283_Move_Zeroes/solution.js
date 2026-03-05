var moveZeroes = function(nums) {

    let x = 0;

    // Move non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    // Fill remaining positions with zeros
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};