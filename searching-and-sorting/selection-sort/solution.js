// Selection Sort
// Pattern: Selection-Based Sorting
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var selectionSort = function(arr){

    let n = arr.length;

    for (let i = 0; i < n - 1; i++){

        let minIndex = i;

        for (let j = i + 1; j < n; j++){

            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        // Swap only if needed
        if (minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
};

// Example
console.log(selectionSort([7,2,5,4,3,1])); // [1,2,3,4,5,7]