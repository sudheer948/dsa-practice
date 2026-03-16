5) 📘 Namaste DSA – Recursion
Problem: Power of Two

Pattern
Recursion → Repeated division until base condition

Idea
A number is a power of 2 if repeatedly dividing it by 2 eventually reaches 1.

1️⃣ Problem Statement
You are given an integer n.

Return:
true → if n is a power of 2
false → otherwise

Examples:

Input: 1   → Output: true
Input: 16  → Output: true
Input: 3   → Output: false

2️⃣ Understanding Powers of 2
Powers of 2 follow this pattern:

2⁰ = 1
2¹ = 2
2² = 4
2³ = 8
2⁴ = 16
2⁵ = 32

So:
16 = 2 × 2 × 2 × 2

3️⃣ Key Observation
If a number is a power of 2, repeatedly dividing by 2 will eventually reach 1.

Example:

16 / 2 = 8
8 / 2 = 4
4 / 2 = 2
2 / 2 = 1

Reached 1 → power of 2

4️⃣ When is a Number NOT a Power of 2?

Case 1 — Odd Number
Odd numbers cannot be powers of 2 (except 1).

Example:
3, 5, 7, 9

Reason:
Powers of 2 are always even after 2.

Case 2 — Division goes below 1

Example:
6 / 2 = 3
3 / 2 = 1.5

Now it becomes fractional, so it will never reach 1.

Thus:
Not a power of 2

5️⃣ Recursive Thinking
We keep dividing the number by 2 until we reach a base case.

Recursive relation:
isPowerOfTwo(n) → isPowerOfTwo(n / 2)

6️⃣ Base Cases
Case 1

If:
n == 1

Return:
true

Because:
2⁰ = 1
Case 2

If:
n < 1

Return:
false

Case 3
If number is odd:
n % 2 != 0

Return:
false

7️⃣ Recursive Case
If none of the base cases occur:
return isPowerOfTwo(n / 2)

8️⃣ Example Walkthrough
Example:
n = 16

Steps:

isPowerOfTwo(16)
→ isPowerOfTwo(8)
→ isPowerOfTwo(4)
→ isPowerOfTwo(2)
→ isPowerOfTwo(1)

Now base case:
return true

9️⃣ Recursion Tree

16
└── 8
    └── 4
        └── 2
            └── 1

When 1 is reached → true propagates back.

🔟 JavaScript Code

function isPowerOfTwo(n) {

    if (n === 1) {
        return true;
    }

    if (n < 1 || n % 2 !== 0) {
        return false;
    }

    return isPowerOfTwo(n / 2);
}

Example:
console.log(isPowerOfTwo(16));

Output:
true

1️⃣1️⃣ Time & Space Complexity
Time Complexity:
O(log n)
Because we divide n by 2 each time.

Space Complexity:
O(log n)
Due to recursion stack.

1️⃣2️⃣ Important Recursion Concepts Used

Base Case
n == 1
Stops recursion.

Invalid Cases
n < 1
n % 2 != 0
Recursive Call
isPowerOfTwo(n / 2)

🎯 Key Takeaways

• Power of 2 numbers reach 1 when repeatedly divided by 2
• Odd numbers (except 1) cannot be powers of 2
• Recursion continues until a base case is reached
• Main recursion formula:

isPowerOfTwo(n) = isPowerOfTwo(n/2)
