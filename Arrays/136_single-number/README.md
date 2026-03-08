# 🔢 136. Single Number

## 🧩 Pattern
Bit Manipulation / XOR Trick

Key idea:

```
a ^ a = 0
a ^ 0 = a
```

Duplicate numbers cancel each other when XORed.

---

# 📌 Problem

You are given a **non-empty array of integers** `nums`.

Every element appears **twice** except **one element** which appears **only once**.

Return that **single number**.

---

# 🔎 Example 1

Input

```
[2,2,1]
```

Output

```
1
```

Explanation

```
2 → appears twice
1 → appears once
```

Answer = **1**

---

# 🔎 Example 2

Input

```
[4,1,2,1,2]
```

Output

```
4
```

Explanation

```
1 → twice
2 → twice
4 → once
```

---

# 🧠 Key Observation

The problem guarantees:

```
✔ Every element appears twice
✔ Only one element appears once
```

Example:

```
[3,1,5,4,1,5,3]
```

Counts:

```
3 → twice
1 → twice
5 → twice
4 → once
```

Answer = **4**

---

# 🐢 Approach 1 — Hash Map

### Idea

Use a hash map to store frequency of each number.

Example:

```
[3,1,5,4,1,5,3]
```

Hash Map

```
3 → 2
1 → 2
5 → 2
4 → 1
```

The element with frequency **1** is the answer.

---

### Complexity

Time Complexity

```
O(n)
```

Space Complexity

```
O(n)
```

---

# 🚀 Approach 2 — Bitwise XOR (Optimal)

This solution uses **XOR**.

Important properties:

```
a ^ a = 0
a ^ 0 = a
```

---

## 💡 Core Idea

If we XOR all numbers together:

```
A ^ B ^ B ^ A ^ C
```

Duplicates cancel:

```
(A ^ A) ^ (B ^ B) ^ C
0 ^ 0 ^ C
C
```

The remaining number is the answer.

---

# 🧪 Example Walkthrough

Array

```
[3,1,5,4,1,5,3]
```

XOR step-by-step

```
0 ^ 3 = 3
3 ^ 1 = 2
2 ^ 5 = 7
7 ^ 4 = 3
3 ^ 1 = 2
2 ^ 5 = 7
7 ^ 3 = 4
```

Final result

```
4
```

---

# ⏱ Complexity

Time Complexity

```
O(n)
```

Space Complexity

```
O(1)
```

---

# 🧠 Pattern

**Bit Manipulation / XOR**

This trick is useful when problems say:

```
every element appears twice except one
```

Remember:

```
a ^ a = 0
a ^ 0 = a
```