# 🫧 Bubble Sort

## 🧠 Pattern
Comparison-Based Sorting

## 💡 Idea

Repeatedly compare **adjacent elements** and swap them if they are in the wrong order.

👉 In each iteration, the **largest element bubbles up to the end**

---

# 📌 Problem

Given an array, sort it in ascending order using **Bubble Sort**.

Example

```
Input:  [5,2,4,1]
Output: [1,2,4,5]
```

---

# ⚙️ Core Idea

Compare pairs:

```
(arr[j], arr[j+1])
```

If:

```
arr[j] > arr[j+1]
```

👉 Swap them

---

# 🧪 Step-by-Step Example

Array

```
[5,2,4,1]
```

---

### 🔹 First Iteration

```
5 & 2 → swap → [2,5,4,1]
5 & 4 → swap → [2,4,5,1]
5 & 1 → swap → [2,4,1,5]
```

Largest element `5` moves to the end

---

### 🔹 Second Iteration

```
2 & 4 → no swap
4 & 1 → swap → [2,1,4,5]
```

Second largest element `4` fixed

---

### 🔹 Third Iteration

```
2 & 1 → swap → [1,2,4,5]
```

Array sorted

---

# 🧠 Observation

After each iteration:

| Iteration | Sorted Elements |
|----------|----------------|
| 1        | Last element   |
| 2        | Last 2         |
| 3        | Last 3         |

👉 No need to check sorted part again

---

# 🔁 Loop Logic

Outer loop runs:

```
n - 1 times
```

Inner loop:

```
j < n - 1 - i
```

---

# ⚡ Optimization

If no swap occurs in a pass:

👉 Array is already sorted  
👉 Stop early  

---

# ⏱ Complexity

Time Complexity

```
Worst Case   → O(n²)
Average Case → O(n²)
Best Case    → O(n)  (optimized)
```

---

Space Complexity

```
O(1)
```

---

# ⚠️ Edge Cases

• Already sorted → stops early  
• Reverse sorted → worst case  
• Single element → no operations  

---

# 🎯 Key Learning

• Compare adjacent elements  
• Swap if out of order  
• Largest element moves to end  

Loop condition:

```
j < n - 1 - i
```

Optimization:

```
if(!isSwapped) break;
```