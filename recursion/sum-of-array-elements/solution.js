// Recursion - Sum of Array Elements
// Pattern: Recursion
// Time Complexity: O(n)
// Space Complexity: O(n)

let arr = [5,3,2,0,1];

function sum(n){

    // Base case
    if(n === 0){
        return arr[n];
    }

    // Recursive case
    return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1)); // Output: 11



//--------------------------------------
// Bonus: Sum of Odd Numbers in Array
//--------------------------------------

function sumOdd(n){

    let isOdd = arr[n] % 2 !== 0;

    if(n === 0){
        return isOdd ? arr[n] : 0;
    }

    return (isOdd ? arr[n] : 0) + sumOdd(n - 1);
}

console.log(sumOdd(arr.length - 1)); // Output: 9