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

# 🧠 Intuition

Since the array is sorted:
- Duplicates are adjacent.
- We don’t need extra space.

We use Two Pointers.

---

## 🎯 Two Pointer Strategy

- i → explores entire array
- x → tracks position of last unique element

Think of it as:
i explores
x builds the clean array

---

## 🔥 Core Idea

First element is always unique.

For every element:
If nums[i] > nums[x]
→ It's a new unique element
→ Move it to next position

---

## 📝 Algorithm

Initialize:
x = 0

Loop from i = 0 to n-1:
    if nums[i] > nums[x]:
        x++
        nums[x] = nums[i]

Return:
x + 1

---

## 🧪 Dry Run

Input:
0,0,1,1,1,2,2,3,3,4

Initial:
x = 0

i = 1
0 > 0 → No

i = 2
1 > 0 → Yes
x = 1
nums[1] = 1

Array:
0,1,1,1,1,2,2,3,3,4

i = 5
2 > 1 → Yes
x = 2
nums[2] = 2

Continue...

Final array:
0,1,2,3,4,...

Return:
x + 1 = 5