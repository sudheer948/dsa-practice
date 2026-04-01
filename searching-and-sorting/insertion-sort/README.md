# 🃏 Insertion Sort

## 🧠 Pattern
Insertion-Based Sorting

## 💡 Idea

Build a sorted array **one element at a time**

👉 Take an element and insert it into its correct position in the sorted part

---

# 📌 Problem

Given an array, sort it using **Insertion Sort**.

Example

```
Input:  [6,3,7,2,5,4]
Output: [2,3,4,5,6,7]
```

---

# 🃏 Real-Life Intuition

Think of arranging cards:

👉 Pick one card  
👉 Insert it in the correct position  

Example

```
[6]  
[3,6]  
[3,6,7]  
[2,3,6,7]  
[2,3,5,6,7]  
[2,3,4,5,6,7]
```

---

# ⚙️ Core Idea

Divide array:

```
[ Sorted | Unsorted ]
```

Initially:

```
[ First element | Rest ]
```

---

# 🔁 Process

1. Pick current element  
2. Compare with previous elements  
3. Shift elements right  
4. Insert at correct position  

---

# 🧪 Example

Array

```
[3,4,5,7,2]
```

Current = `2`

```
2 < 7 → shift
2 < 5 → shift
2 < 4 → shift
2 < 3 → shift
```

Insert

```
[2,3,4,5,7]
```

---

# 🧠 Key Observation

👉 We **shift**, not swap

```
arr[prev + 1] = arr[prev]
```

Then insert:

```
arr[prev + 1] = current
```

---

# 🔁 Loop Structure

Outer loop:

```
i = 1 → n - 1
```

Inner loop:

```
while(prev >= 0 && arr[prev] > current)
```

---

# ⚠️ Important Condition

```
prev >= 0
```

Prevents going out of bounds.

---

# ⏱ Complexity

Time Complexity

```
Best Case   → O(n)
Average     → O(n²)
Worst Case  → O(n²)
```

---

Space Complexity

```
O(1)
```

---

# ⚠️ Edge Cases

• Already sorted → O(n)  
• Reverse sorted → O(n²)  
• Single element → no change  

---

# ⚔️ Comparison

| Algorithm       | Idea              | Best Case |
|----------------|-------------------|-----------|
| Bubble Sort    | Swap adjacent     | O(n)      |
| Selection Sort | Select minimum    | O(n²)     |
| Insertion Sort | Insert correctly  | O(n) ⭐   |

---

# 🎯 Key Learning

• Build sorted array step by step  
• Use shifting instead of swapping  
• Efficient for nearly sorted arrays  

Condition:

```
prev >= 0 && arr[prev] > current
```