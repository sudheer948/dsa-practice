# LeetCode 344 – Reverse String

## 🧠 Problem Statement

Given an array of characters `s`:

- Reverse the array
- Modify it in-place
- Do not use extra memory

⚠️ Important:
- Input is an array of characters, not a string
- You cannot create a new array
- Only constant extra space allowed

---

## 🔹 What Does "In Place" Mean?

In-place means:
- ❌ No new array
- ❌ No full copy
- ✅ Modify original array
- ✅ Only constant extra space allowed

---

## 🔹 Core Idea: Swapping

To reverse:

First ↔ Last  
Second ↔ Second Last  
Third ↔ Third Last  

General formula:

i ↔ (n - 1 - i)

## 🔥 How Many Swaps?

We only swap first half with second half.

Total swaps:
n / 2

Safer loop:
let half = Math.floor(n / 2)

---

## 🧪 Dry Run (Even Length)

Array:
A K S H A Y  
0 1 2 3 4 5

n = 6  
half = 3  

Iteration 1:
i = 0  
Swap 0 ↔ 5  

Iteration 2:
i = 1  
Swap 1 ↔ 4  

Iteration 3:
i = 2  
Swap 2 ↔ 3  

Reversed ✔️

---

## 🔹 Odd Length Case

Example:
H E L L O  
0 1 2 3 4  

n = 5  
Math.floor(n/2) = 2  

Loop runs only twice.

Middle element stays untouched — correct behavior.

## ⏱ Time Complexity
O(n)

We traverse half the array → still linear.

---

## 📦 Space Complexity
O(1)

Only one temporary variable used.

---

## 🧩 Pattern Identified

Two Pointer Pattern

Used in:
- Palindrome checking
- Array rotation
- Reversing linked lists
- Sorting algorithms
- Partition problems

---

## 🧠 Key Takeaways

- Swap i with n - 1 - i
- Loop only till n/2
- Works for even & odd lengths
- Swapping is fundamental DSA skill