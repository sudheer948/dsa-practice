// Recursion - Factorial of a Number
// Pattern: Recursion
// Time Complexity: O(n)
// Space Complexity: O(n)

function fact(n){

    // Base case
    if(n === 1){
        return 1;
    }

    // Recursive case
    return n * fact(n - 1);
}

// Example
console.log(fact(5)); // Output: 120