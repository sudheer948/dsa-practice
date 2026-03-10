# 📘 Recursion — Sum of First N Numbers

## 🧩 Pattern
Recursion

## 💡 Idea

Break the problem into a **smaller version of the same problem**.

```
sum(n) = n + sum(n-1)
```

Recursion continues until the **base case** stops it.

---

# 📌 Problem

Find the **sum of the first n natural numbers** using recursion.

Example

```
n = 5
1 + 2 + 3 + 4 + 5 = 15
```

Output

```
15
```

---

# 🧠 Key Thinking

Instead of solving the whole problem directly, we solve a **smaller sub-problem**.

Example:

```
sum(5)
= 5 + 4 + 3 + 2 + 1
```

Rewrite it recursively:

```
sum(5) = 5 + sum(4)
sum(4) = 4 + sum(3)
sum(3) = 3 + sum(2)
sum(2) = 2 + sum(1)
sum(1) = 1 + sum(0)
sum(0) = 0
```

---

# 1️⃣ Base Case

The stopping condition of recursion.

```
sum(0) = 0
```

When `n = 0`, recursion stops.

---

# 2️⃣ Recursive Formula

```
sum(n) = n + sum(n-1)
```

Meaning:

Current number `n` + sum of all numbers before it.

---

# 🔍 Step-by-Step Expansion

Call

```
sum(5)
```

Expands to

```
5 + sum(4)
5 + (4 + sum(3))
5 + (4 + (3 + sum(2)))
5 + (4 + (3 + (2 + sum(1))))
5 + (4 + (3 + (2 + (1 + sum(0)))))
```

Base case

```
sum(0) = 0
```

Then values return back:

```
1 + 0 = 1
2 + 1 = 3
3 + 3 = 6
4 + 6 = 10
5 + 10 = 15
```

Final answer

```
15
```

---

# 📊 Call Stack

The stack grows like this:

```
sum(5)
sum(4)
sum(3)
sum(2)
sum(1)
sum(0)
```

After reaching the base case, the stack **unwinds backwards**.

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

Recursion works when a problem can be broken into **smaller identical problems**.

Formula used here:

```
sum(n) = n + sum(n-1)
```