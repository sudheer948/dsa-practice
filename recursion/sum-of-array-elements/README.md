# 📘 Recursion — Sum of All Elements in an Array

## 🧩 Pattern
Recursion

## 💡 Idea
Break the problem into **smaller sub-problems**.

Sum of array elements:

```
sum(n) = arr[n] + sum(n-1)
```

Each recursive call processes **one element** and reduces the problem size.

---

# 📌 Problem

Given an array:

```
arr = [5,3,2,0,1]
```

Find the **sum of all elements using recursion**.

Output

```
11
```

---

# 🧠 Key Observation

Instead of calculating everything at once, we break the problem.

Example

```
sum(5,3,2,0,1)
= 5 + sum(3,2,0,1)

sum(3,2,0,1)
= 3 + sum(2,0,1)

sum(2,0,1)
= 2 + sum(0,1)

sum(0,1)
= 0 + sum(1)

sum(1)
= 1
```

Each step reduces the array size.

---

# 1️⃣ Base Case

When only one element remains.

```
sum([5]) = 5
```

Because the sum of one number is the number itself.

---

# 2️⃣ Recursive Relation

```
sum(n) = arr[n] + sum(n-1)
```

Where

```
n = current index
```

---

# 🔍 Example Breakdown

Array

```
arr = [5,3,2,0,1]
index: 0 1 2 3 4
```

Initial call

```
sum(4)
```

Expansion

```
sum(4) = 1 + sum(3)
sum(3) = 0 + sum(2)
sum(2) = 2 + sum(1)
sum(1) = 3 + sum(0)
sum(0) = 5
```

Returning phase

```
sum(0) = 5
sum(1) = 8
sum(2) = 10
sum(3) = 10
sum(4) = 11
```

Final result

```
11
```

---

# 📊 Call Stack

Stack grows like this:

```
sum(4)
sum(3)
sum(2)
sum(1)
sum(0)
```

Then values return back up the stack.

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
• Use a recursive formula  

```
sum(n) = arr[n] + sum(n-1)
```