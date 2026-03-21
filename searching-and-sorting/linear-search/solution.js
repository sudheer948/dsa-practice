// Linear Search
// Pattern: Sequential Scan
// Time Complexity: O(n)
// Space Complexity: O(1)

function linearSearch(arr, target){

    for (let i = 0; i < arr.length; i++){

        if (arr[i] === target){
            return i;
        }

    }

    return -1;
}

// Example
console.log(linearSearch([4,9,1,0,2], 0));  // 3
console.log(linearSearch([4,9,1,0,2], 10)); // -1