# LeetCode 88 – Merge Sorted Array

## 🧠 Problem Understanding

You are given two sorted arrays.

nums1 → size = m + n  
nums2 → size = n  

Important:

- First **m elements of nums1 are valid**
- Last **n elements are dummy zeros (space for merging)**
- nums2 has **n valid elements**

Goal:

Merge nums2 into nums1.

The final sorted array must be stored inside nums1.

Do NOT return a new array.

---

## Example

nums1 = [1,2,3,0,0,0], m = 3  
nums2 = [2,5,6], n = 3  

Final nums1:

[1,2,2,3,5,6]

---

## Important Observations

- Both arrays are sorted.
- The zeros in nums1 are only placeholders.
- Only the first m elements of nums1 are actual values.
- We must modify nums1 in place.

---

## Why This Problem Is Tricky

- Cannot create a new array
- Must modify nums1
- Must carefully handle pointer boundaries