// Recursion - Sum of First N Numbers
// Pattern: Recursion
// Time Complexity: O(n)
// Space Complexity: O(n)

function sum(n){

    // Base case
    if(n === 0) return 0;

    // Recursive case
    return n + sum(n - 1);
}

// Example
console.log(sum(5)); // Output: 15