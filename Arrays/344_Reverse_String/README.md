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