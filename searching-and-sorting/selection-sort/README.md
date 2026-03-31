# 🎯 Selection Sort

## 🧠 Pattern
Selection-Based Sorting

## 💡 Idea

Repeatedly select the **minimum element** from the unsorted part  
👉 Place it at its correct position (front)

---

# 📌 Problem

Given an array, sort it in ascending order using **Selection Sort**.

Example

```
Input:  [7,2,5,4,3,1]
Output: [1,2,3,4,5,7]
```

---

# ⚙️ Core Idea

Divide the array into two parts:

```
[ Sorted | Unsorted ]
```

Initially:

```
[ | Entire Array ]
```

In each iteration:

1. Find minimum in unsorted part  
2. Swap with current index `i`  
3. Expand sorted part  

---

# 🧪 Step-by-Step Example

Array

```
[7,2,5,4,3,1]
```

---

### 🔹 Iteration 1 (i = 0)

Minimum = `1`

Swap:

```
[1,2,5,4,3,7]
```

---

### 🔹 Iteration 2 (i = 1)

Minimum = `2`

Already correct:

```
[1,2,5,4,3,7]
```

---

### 🔹 Iteration 3 (i = 2)

Minimum = `3`

Swap:

```
[1,2,3,4,5,7]
```

---

Continue until sorted.

---

# 🧠 Observation

After each iteration:

| Iteration | Sorted Part |
|----------|-------------|
| 1        | First element |
| 2        | First 2 elements |
| 3        | First 3 elements |

👉 Correct element is placed directly in position

---

# 🔁 Loop Structure

Outer loop:

```
i = 0 → n - 2
```

Inner loop:

```
j = i + 1 → n - 1
```

---

# ⚡ Optimization

Avoid unnecessary swap:

```
if(minIndex !== i)
```

---

# ⏱ Complexity

Time Complexity

```
Best Case   → O(n²)
Average     → O(n²)
Worst Case  → O(n²)
```

---

Space Complexity

```
O(1)
```

---

# ⚠️ Notes

• No early stopping (unlike Bubble Sort)  
• Works the same for all cases  
• Fewer swaps compared to Bubble Sort  

---

# ⚔️ Bubble Sort vs Selection Sort

| Feature        | Bubble Sort     | Selection Sort |
|---------------|----------------|---------------|
| Idea          | Swap adjacent  | Select minimum |
| Swaps         | Many           | Fewer         |
| Optimization  | Yes            | No            |
| Time          | O(n²)          | O(n²)         |

---

# 🎯 Key Learning

• Select minimum element each iteration  
• Swap with current index  
• Always runs full loops  

Loop pattern:

```
j = i + 1 → n
```