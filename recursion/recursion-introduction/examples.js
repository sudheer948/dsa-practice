// Recursion Examples
// Pattern: Basic Recursion

//--------------------------------------
// Example 1: Print numbers from N → 1
//--------------------------------------

function printNto1(n){

    if(n < 1) return;   // Base case

    console.log(n);     // Work

    printNto1(n - 1);   // Recursive call
}

// Example
// printNto1(5)
// Output: 5 4 3 2 1



//--------------------------------------
// Example 2: Print numbers from 1 → N
//--------------------------------------

function print1toN(i, n){

    if(i > n) return;   // Base case

    console.log(i);     // Work

    print1toN(i + 1, n); // Recursive call
}

// Example
// print1toN(1,5)
// Output: 1 2 3 4 5