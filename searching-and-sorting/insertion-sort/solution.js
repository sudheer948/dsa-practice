// Insertion Sort
// Pattern: Insertion-Based Sorting
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var insertionSort = function(arr){

    let n = arr.length;

    for (let i = 1; i < n; i++){

        let current = arr[i];
        let prev = i - 1;

        // Shift elements to the right
        while (prev >= 0 && arr[prev] > current){
            arr[prev + 1] = arr[prev];
            prev--;
        }

        // Insert element at correct position
        arr[prev + 1] = current;
    }

    return arr;
};

// Example
console.log(insertionSort([6,3,7,2,5,4])); // [2,3,4,5,6,7]