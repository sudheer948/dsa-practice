// Recursion - Power of Two
// Pattern: Recursion (Repeated Division)
// Time Complexity: O(log n)
// Space Complexity: O(log n)

function isPowerOfTwo(n){

    // Base case
    if(n === 1){
        return true;
    }

    // Invalid cases
    if(n < 1 || n % 2 !== 0){
        return false;
    }

    // Recursive call
    return isPowerOfTwo(n / 2);
}

// Example
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3));  // false