# 📘 Day 3A — Understanding Big O Notation

---

## 1️⃣ What is Big O?

Big O is a mathematical notation used to describe the **worst-case time complexity** of an algorithm.

It helps us understand:

- How an algorithm grows as input size (`n`) increases
- The upper bound of operations
- Performance for large inputs

Big O does NOT measure exact time.
It measures **growth rate**.

---

## 2️⃣ Why Do We Use Big O?

Actual execution time depends on:

- Machine
- CPU
- RAM
- Programming language
- Compiler

So instead of measuring time in seconds,
we measure:

> Number of operations relative to input size (`n`)

---

## 3️⃣ Worst Case Analysis

Big O represents the **worst-case scenario**.

Why?

- Best case can be misleading
- We want guaranteed performance
- Interviews expect worst-case analysis

We always analyze:

> Maximum possible number of iterations

---

## 4️⃣ Important Rule

When calculating Big O:

- Ignore constants
- Ignore smaller terms
- Keep highest growth term

Examples:

- O(3n) → O(n)
- O(n² + n) → O(n²)

---

## 🎯 Key Takeaways (Day 3A)

- Big O measures growth rate, not actual time.
- It represents worst-case complexity.
- We ignore constants.
- We focus on highest order term.