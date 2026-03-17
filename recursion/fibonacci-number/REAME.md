# 📘 Recursion — Fibonacci Number

## 🧩 Pattern
Recursion / Divide into Smaller Subproblems

## 💡 Idea

Each Fibonacci number is the **sum of the previous two numbers**.

```
fib(n) = fib(n-1) + fib(n-2)
```

---

# 📌 Problem

Given a number `n`, return the Fibonacci number at position `n`.

Example

```
Input: n = 5
Output: 5
```

Sequence

```
0 1 1 2 3 5
          ↑
        index 5
```

---

# 1️⃣ Fibonacci Sequence

The sequence starts with:

```
0, 1
```

After that:

```
Each number = sum of previous two numbers
```

Example

```
0 1 1 2 3 5 8 13
```

---

# 2️⃣ Mathematical Definition

```
fib(0) = 0
fib(1) = 1
```

For n > 1:

```
fib(n) = fib(n-1) + fib(n-2)
```

---

# 3️⃣ Recursive Thinking

To calculate:

```
fib(5)
```

We need:

```
fib(4) + fib(3)
```

And each of those again breaks down:

```
fib(4) → fib(3) + fib(2)
fib(3) → fib(2) + fib(1)
```

This continues until base cases.

---

# 4️⃣ Base Case

```
if(n <= 1)
return n
```

---

# 🌳 Recursion Tree

```
            fib(5)
          /        \
     fib(4)        fib(3)
     /    \        /    \
 fib(3) fib(2) fib(2) fib(1)
  / \      / \     / \
fib(2) fib(1) fib(1) fib(0)
```

---

# 🔍 Example

```
fib(5)
= fib(4) + fib(3)
= (3) + (2)
= 5
```

---

# ⚠️ Important Insight

The same values are calculated multiple times:

```
fib(3), fib(2) repeated
```

This causes inefficiency.

---

# ⏱ Complexity

Time Complexity

```
O(2^n)
```

Exponential growth due to repeated calls.

---

Space Complexity

```
O(n)
```

Because of recursion stack.

---

# 🎯 Key Learning

• Fibonacci uses two recursive calls  
• Recursion forms a **tree structure**  
• Repeated calculations cause inefficiency  

Formula:

```
fib(n) = fib(n-1) + fib(n-2)
```

Base cases:

```
fib(0) = 0
fib(1) = 1
```