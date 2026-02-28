# LeetCode 27 – Remove Element

## 🧠 Problem Statement

Given:
- An integer array `nums`
- An integer `val`

Task:
- Remove all occurrences of `val` in-place
- Do NOT create a new array
- Return `k` → number of elements not equal to `val`
- First `k` elements must contain elements ≠ `val`
- Elements after `k` don’t matter

---

## 🔎 Example

nums = [3,2,2,3]
val = 3

After modification:
[2,2,_,_]

Return:
2

---

## 🚨 Key Observations

- We must modify the same array
- Order of remaining elements can stay same
- Only first `k` elements matter
- Very similar to Remove Duplicates problem