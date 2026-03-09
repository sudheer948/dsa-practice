# 📘 Recursion — Introduction

## 🧩 Pattern
Recursion

## 💡 Idea
A function calls itself to solve **smaller versions of the same problem** until a **base case** stops the recursion.

---

# 1️⃣ What is Recursion?

Recursion is a technique where a **function calls itself** inside its own definition.

It is useful when a problem can be broken into **smaller identical sub-problems**.

Definition:

> Recursion solves a problem by solving a **smaller version of the same problem**.

Example structure

```
function fun() {
   fun();
}
```

Without a stopping condition this becomes **infinite recursion**.

---

# 2️⃣ Two Important Parts of Recursion

Every recursive function has two parts.

## Base Case

The condition where recursion stops.

```
if(num === 0) return;
```

Without a base case recursion never stops.

---

## Recursive Case

The part where the function **calls itself**.

```
fun(num - 1)
```

This creates the recursive chain.

---

# 3️⃣ Mental Template for Recursion

A recursive function usually follows this structure:

```
function solve(input){

   // 1️⃣ Base Case
   if(base_condition) return;

   // 2️⃣ Work
   do_something;

   // 3️⃣ Recursive Call
   solve(smaller_input);
}
```

Think of recursion in this order:

```
Base Case
Work
Recursive Call
```

---

# 4️⃣ Recursion Tree Thinking

Recursion creates a chain (or tree) of function calls.

Example:

```
fun(5)
  |
fun(4)
  |
fun(3)
  |
fun(2)
  |
fun(1)
  |
fun(0)
```

Each call solves a **smaller problem**.

---

# 5️⃣ Understanding the Call Stack

Every recursive call is pushed into a **call stack**.

Example:

```
fun(5)
fun(4)
fun(3)
fun(2)
fun(1)
fun(0)
```

Stack looks like:

```
fun(0)
fun(1)
fun(2)
fun(3)
fun(4)
fun(5)
```

When the base case hits:

```
return
```

The stack starts **unwinding backwards**.

---

# 6️⃣ Stack Overflow

If recursion never stops, the call stack keeps growing.

Eventually the program crashes with:

```
Maximum call stack size exceeded
```

This error is called:

⚠️ **Stack Overflow**

Cause: Infinite recursion.

---

# 7️⃣ Recursion vs Loop

Example: Print numbers from `1 → n`

Loop:

```
for(let i=1;i<=n;i++)
```

Recursion:

```
print(1)
print(2)
print(3)
```

Both have the same complexity:

```
Time Complexity = O(n)
```

---

# 🎯 Key Rules of Recursion

Always remember:

1️⃣ Always write the **base case first**  
2️⃣ Always **simplify the input** in recursion  
3️⃣ Ensure recursion **reaches the base case**  
4️⃣ Watch for **stack overflow**

---

# 🧠 When Recursion is Useful

Recursion works best when problems can be broken into smaller sub-problems.

Common examples:

- Factorial
- Fibonacci
- Tree Traversal
- Graph Traversal
- Backtracking
- Divide & Conquer
- Dynamic Programming