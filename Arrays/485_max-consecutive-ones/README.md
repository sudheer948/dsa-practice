# 🔢 485. Max Consecutive Ones

## 🧠 Problem

You are given a **binary array** `nums`.

A binary array contains only **0s and 1s**.

Your task is to find the **maximum number of consecutive 1s** in the array.

---

## 🔎 Example

Input

```
[1,1,0,1,1,1]
```

Output

```
3
```

Explanation

- First group → `1,1` → length = 2  
- Second group → `1,1,1` → length = 3  

Maximum consecutive ones = **3**

---

## 🧠 Intuition

While scanning the array:

- Count consecutive `1`s
- When a `0` appears → the sequence breaks
- Compare the current sequence with the **maximum sequence found so far**

---

## 💡 Key Idea

We maintain two variables.

### 1️⃣ Current Count

Tracks the current sequence of consecutive `1`s.

Example:

```
1 1 1
↑ ↑ ↑
currentCount = 3
```

---

### 2️⃣ Maximum Count

Tracks the maximum consecutive ones seen so far.

Example:

```
Groups:
1 1 → 2
1 1 1 → 3
```

So

```
maxCount = 3
```

---

## 📌 Algorithm

Initialize

```
currentCount = 0
maxCount = 0
```

Traverse the array.

### Case 1 — If element is `1`

```
currentCount++
```

### Case 2 — If element is `0`

```
maxCount = max(maxCount, currentCount)
currentCount = 0
```

After the loop finishes we must perform one final check:

```
return max(maxCount, currentCount)
```

This handles cases where the array **ends with 1s**.

---

## ⏱ Complexity

Time Complexity

```
O(n)
```

Space Complexity

```
O(1)
```

---

## 🧩 Pattern

This problem follows the pattern:

**Tracking consecutive elements**

Similar problems:

- Longest increasing sequence
- Longest substring problems
- Sliding window patterns