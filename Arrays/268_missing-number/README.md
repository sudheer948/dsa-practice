# 🔎 268. Missing Number

## 🧠 Problem

You are given an array `nums` containing `n` distinct numbers in the range:

```
0 → n
```

Exactly **one number is missing** from this range.

Your task is to **find and return the missing number**.

---

## 🔎 Example 1

Input

```
[3,0,1]
```

Output

```
2
```

Explanation

Expected numbers:

```
0,1,2,3
```

Array contains:

```
3,0,1
```

Missing number = **2**

---

## 🔎 Example 2

Input

```
[0,1]
```

Output

```
2
```

Expected numbers:

```
0,1,2
```

Array contains:

```
0,1
```

Missing number = **2**

---

## 🔎 Example 3

Input

```
[9,6,4,2,3,5,7,0,1]
```

Output

```
8
```

---

## 📊 Constraints

```
1 ≤ n ≤ 10⁴
```

The array size can be between **1 and 10,000**.

---

# 🐢 Brute Force Approach

### Idea

1. Sort the array
2. Check elements sequentially
3. Find where the sequence breaks

Example:

```
[4,0,2,1,5]
```

After sorting:

```
[0,1,2,4,5]
```

Sequence check:

```
0 → 1 ✔
1 → 2 ✔
2 → 3 ❌
```

Missing number = **3**

---

### Complexity

Sorting

```
O(n log n)
```

Scanning

```
O(n)
```

Total

```
O(n log n)
```

But we can do better.

---

# 🚀 Optimized Approach — Math Trick

We know the formula for the sum of numbers from:

```
0 → n
```

Formula

```
n × (n + 1) / 2
```

---

## 💡 Core Idea

1. Calculate **expected sum** of numbers from `0 → n`
2. Calculate **actual sum** of the array
3. The difference gives the missing number

```
Missing Number = Expected Sum − Actual Sum
```

---

## 🧪 Example Walkthrough

Array

```
[4,0,2,1,5]
```

Here

```
n = 5
```

### Step 1 — Expected Sum

```
n × (n + 1) / 2
5 × 6 / 2 = 15
```

Expected sum = **15**

---

### Step 2 — Actual Array Sum

```
4 + 0 + 2 + 1 + 5 = 12
```

Actual sum = **12**

---

### Step 3 — Missing Number

```
15 − 12 = 3
```

Missing number = **3**

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

This problem uses a **Mathematical Sum Formula** pattern.

Key idea:

Use known formulas to **avoid extra loops or sorting**.