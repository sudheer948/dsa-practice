// Bubble Sort
// Pattern: Comparison-Based Sorting
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var bubbleSort = function(arr){

    let n = arr.length;

    for (let i = 0; i < n - 1; i++){

        let isSwapped = false;

        for (let j = 0; j < n - 1 - i; j++){

            if (arr[j] > arr[j + 1]){

                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSwapped = true;
            }
        }

        // Optimization
        if (!isSwapped) break;
    }

    return arr;
};

// Example
console.log(bubbleSort([5,2,4,1])); // [1,2,4,5]