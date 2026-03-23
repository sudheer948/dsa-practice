// Binary Search
// Pattern: Divide and Conquer
// Time Complexity: O(log n)
// Space Complexity: O(1)

var search = function(nums, target){

    let left = 0;
    let right = nums.length - 1;

    while (left <= right){

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target){
            return mid;
        }

        else if (target < nums[mid]){
            right = mid - 1;
        }

        else {
            left = mid + 1;
        }
    }

    return -1;
};

// Example
console.log(search([-1,0,3,5,9,12], 9));  // 4
console.log(search([-1,0,3,5,9,12], 2));  // -1