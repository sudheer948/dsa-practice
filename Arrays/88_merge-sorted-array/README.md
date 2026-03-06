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

## 🚀 Optimal Idea

If we merge from the front, we risk overwriting values in nums1.

Instead, we merge from the back.

Since nums1 already has empty space at the end, we can fill the largest elements there.

---

## Pointer Setup

p1 = m - 1 → last valid element in nums1  
p2 = n - 1 → last element in nums2  
i  = m + n - 1 → last index of nums1  

At every step we place the larger element at nums1[i].

---

## Dry Run

nums1 = [1,2,3,0,0,0]  
nums2 = [2,5,6]

Initial:

p1 = 2 → value 3  
p2 = 2 → value 6  
i = 5

Step 1  
6 > 3 → place 6 at index 5  

Step 2  
5 > 3 → place 5 at index 4  

Step 3  
3 > 2 → place 3 at index 3  

Continue until one pointer finishes.

Final array:

[1,2,2,3,5,6]

## Time Complexity

O(m + n)

Each element is processed once.

---

## Space Complexity

O(1)

The merge happens in-place without extra space.

---

## Key Insight

When merging in-place and extra space exists at the end:

Fill the array from the back.

This avoids overwriting elements.