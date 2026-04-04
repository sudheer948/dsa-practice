// Merge Sort
// Pattern: Divide & Conquer
// Time Complexity: O(n log n)
// Space Complexity: O(n)

var mergeSort = function(arr){

    // Base case
    if (arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

function merge(left, right){

    let res = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length){

        if (left[i] < right[j]){
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return [
        ...res,
        ...left.slice(i),
        ...right.slice(j)
    ];
}

// Example
console.log(mergeSort([8,4,5,6,9,1,3,6]));