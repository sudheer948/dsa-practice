# ⚔️ Merge Sort

## 🧠 Pattern
Divide & Conquer

## 💡 Idea

👉 Divide array into halves  
👉 Sort each half recursively  
👉 Merge sorted halves  

---

# 📌 Core Concept

Divide → Solve → Merge

---

# 🔽 Divide Phase

Example

```
[8,4,5,6,9,1,3,6]
```

Split repeatedly:

```
[8,4,5,6]   [9,1,3,6]
[8,4] [5,6] [9,1] [3,6]
[8] [4] [5] [6] [9] [1] [3] [6]
```

👉 Stop when size = 1

---

# 🔼 Merge Phase

Merge sorted parts:

```
[8] + [4] → [4,8]
[5] + [6] → [5,6]
[9] + [1] → [1,9]
[3] + [6] → [3,6]
```

Then:

```
[4,8] + [5,6] → [4,5,6,8]
[1,9] + [3,6] → [1,3,6,9]
```

Final:

```
[4,5,6,8] + [1,3,6,9]
→ [1,3,4,5,6,6,8,9]
```

---

# ⚙️ Two Main Parts

## 1️⃣ Divide (Recursion)

```
if(arr.length <= 1) return arr
```

Split into:

```
left + right
```

---

## 2️⃣ Merge

Merge two sorted arrays using two pointers.

---

# 🔁 Merge Logic

```
while(i < left.length && j < right.length){

    if(left[i] < right[j])
        push left[i]
    else
        push right[j]
}
```

Then add remaining elements.

---

# 🌳 Recursion Tree

Example

```
[5,2,3,1]

        [5,2,3,1]
       /         \
    [5,2]       [3,1]
    /   \       /   \
  [5]  [2]   [3]  [1]
```

Return phase:

```
[5]+[2] → [2,5]
[3]+[1] → [1,3]
[2,5]+[1,3] → [1,2,3,5]
```

---

# ⏱ Complexity

Time Complexity

```
O(n log n)
```

---

Space Complexity

```
O(n)
```

---

# ⚔️ Comparison

| Algorithm       | Time Complexity |
|----------------|----------------|
| Bubble Sort    | O(n²)          |
| Selection Sort | O(n²)          |
| Insertion Sort | O(n²)          |
| Merge Sort     | O(n log n) ⭐  |

---

# ⭐ Properties

• Stable sorting  
• Works well for large datasets  
• Uses extra space  
• Recursive algorithm  

---

# 🎯 Key Learning

• Divide → Solve → Merge  
• Recursion drives the algorithm  
• Merge step is most important  

Base case:

```
arr.length <= 1
```