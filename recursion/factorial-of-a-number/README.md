# 📘 Recursion — Factorial of a Number

## 🧩 Pattern
Recursion

## 💡 Idea

Factorial can be expressed recursively as:

```
n! = n × (n-1)!
```

The problem is solved by breaking it into **smaller sub-problems**.

---

# 📌 Problem

Find the factorial of a number using recursion.

Example

```
5! = 5 × 4 × 3 × 2 × 1
```

Output

```
120
```

---

# 1️⃣ What is Factorial?

Factorial of a number `n` means multiplying all numbers from `n` to `1`.

Example

```
5! = 5 × 4 × 3 × 2 × 1
```

Calculation

```
5 × 4 = 20
20 × 3 = 60
60 × 2 = 120
120 × 1 = 120
```

Final result

```
5! = 120
```

---

# 2️⃣ Mathematical Definition

```
n! = n × (n-1) × (n-2) × ... × 1
```

Example

```
4! = 4 × 3 × 2 × 1
```

---

# 3️⃣ Recursive Thinking

Instead of multiplying everything directly, break the problem into smaller problems.

```
5! = 5 × 4!
4! = 4 × 3!
3! = 3 × 2!
2! = 2 × 1!
1! = 1
```

Recursive relation

```
factorial(n) = n × factorial(n - 1)
```

---

# 4️⃣ Base Case

Recursion must stop somewhere.

```
factorial(1) = 1
```

Because multiplying by 1 does not change the result.

---

# 📊 Recursion Tree

Example

```
fact(5)
 └── 5 × fact(4)
        └── 4 × fact(3)
               └── 3 × fact(2)
                      └── 2 × fact(1)
                             └── 1
```

---

# 🔄 Returning Phase

After reaching the base case, values return back through the stack.

```
fact(1) = 1
fact(2) = 2 × 1 = 2
fact(3) = 3 × 2 = 6
fact(4) = 4 × 6 = 24
fact(5) = 5 × 24 = 120
```

Final Answer

```
120
```

---

# ⏱ Complexity

Time Complexity

```
O(n)
```

Space Complexity

```
O(n)
```

Because recursion uses the **call stack**.

---

# 🎯 Key Learning

• Recursion breaks a problem into smaller sub-problems  
• Always define a **base case**  
• Recursive formula here:

```
n! = n × (n-1)!
```