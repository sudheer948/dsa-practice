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

## 💡 Core Idea – Two Pointer Technique

We use:
- i → scans every element
- x → tracks position where next valid element should go

Think:
i scans  
x builds the clean array

---

## 🧠 Intuition

If nums[i] == val → ignore  
If nums[i] != val → copy to nums[x] and increment x

---

## 🧪 Dry Run

nums = [3,2,1,5,3,4,8,3]
val = 3

Initial:
x = 0

i = 0 → 3 → ignore  
i = 1 → 2 → move → nums[0] = 2 → x = 1  
i = 2 → 1 → move → nums[1] = 1 → x = 2  
i = 3 → 5 → move → nums[2] = 5 → x = 3  
i = 4 → 3 → ignore  
i = 5 → 4 → move → nums[3] = 4 → x = 4  
i = 6 → 8 → move → nums[4] = 8 → x = 5  
i = 7 → 3 → ignore  

Final valid portion:
[2,1,5,4,8]

Return:
5

## ⏱ Time Complexity
O(n)

Single traversal.

---

## 📦 Space Complexity
O(1)

In-place modification.

---

## 🧩 Pattern Identified

Two Pointer – Fast & Slow Pointer Pattern

Used in:
- Remove Duplicates
- Move Zeroes
- Partition array
- In-place filtering problems

---

## 🧠 Why Return x (Not x+1)?

x starts at 0  
We increment x only when placing valid elements  
At the end, x equals total valid elements  
So return x