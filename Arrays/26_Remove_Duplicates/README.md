# LeetCode 26 – Remove Duplicates from Sorted Array

## 🧠 Problem Understanding

We are given a sorted integer array `nums`.

We must:
- Remove duplicates **in-place**
- Keep only unique elements
- Maintain relative order
- Return the number of unique elements (k)

---

## 🔑 Important Concepts

### 1️⃣ Non-Decreasing Order

Non-decreasing means:

nums[i+1] >= nums[i]

Example:
1, 2, 3, 3, 3, 4, 4, 5

Duplicates are allowed.

---

### 2️⃣ What Does In-Place Mean?

We must modify the original array.
We cannot create a new array.

---

### 3️⃣ What Does Relative Order Mean?

We cannot rearrange elements.

If unique elements are:
0,1,2,3,4

We cannot return:
4,3,2,1,0 ❌

---

## 🔍 Example

Input:
0,0,1,1,1,2,2,3,3,4

Output:
Return: 5

Modified array:
0,1,2,3,4, ?, ?, ?, ?, ?

Elements after index k do not matter.