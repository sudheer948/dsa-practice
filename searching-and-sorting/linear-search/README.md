# 🔎 Linear Search

## 🧠 Pattern
Searching / Sequential Scan

## 💡 Idea

Traverse the array **element by element** and compare each element with the target.

- If found → return index  
- If not found → return -1  

---

# 📌 Problem

Given:

- An array `arr`
- A target value

Return:

```
Index of target → if found
-1 → if not found
```

---

# 🔎 Example 1

Array

```
[4, 9, 1, 0, 2]
```

Target

```
0
```

Output

```
3
```

---

# 🔎 Example 2

Array

```
[4, 9, 1, 0, 2]
```

Target

```
10
```

Output

```
-1
```

---

# 🔁 Algorithm

1. Start from index `0`
2. Compare current element with target

```
arr[i] === target
```

3. If equal → return index  
4. Else → move to next element  
5. If loop ends → return `-1`

---

# 📊 Dry Run

Array

```
[4, 9, 1, 0, 2]
```

Target = `0`

```
i = 0 → 4 ≠ 0
i = 1 → 9 ≠ 0
i = 2 → 1 ≠ 0
i = 3 → 0 = 0 ✅
```

Return

```
3
```

---

# ⏱ Complexity

Time Complexity

```
Worst Case → O(n)
Best Case → O(1)
```

---

Space Complexity

```
O(1)
```

---

# ⚠️ Notes

✔ Works on both sorted and unsorted arrays  
✔ Simple and easy to implement  
✔ Not efficient for large datasets  

---

# 🎯 Key Learning

• Linear Search checks elements one by one  
• Returns index if found  
• Returns -1 if not found  

Time Complexity:

```
O(n)
```

Space Complexity:

```
O(1)
```