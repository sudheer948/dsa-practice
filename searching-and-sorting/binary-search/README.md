# 🔎 Binary Search

## 🧠 Pattern
Divide and Conquer

## 💡 Idea

Binary Search uses the **sorted nature of an array** to eliminate half of the search space at every step.

Instead of checking every element, we check the **middle element**.

---

# 📌 Problem

Given:

- A **sorted array** `nums`
- A `target` value

Return:

```
Index of target → if found
-1 → if not found
```

---

# ⚠️ Important

Binary Search works **only on sorted arrays**.

---

# 🔎 Example 1

```
nums = [-1,0,3,5,9,12]
target = 9
```

Output

```
4
```

---

# 🔎 Example 2

```
nums = [-1,0,3,5,9,12]
target = 2
```

Output

```
-1
```

---

# ⚙️ Core Idea

1. Find the middle element  
2. Compare with target  
3. Eliminate half of the array  

---

# 🎯 Cases

### 🟢 Case 1

```
nums[mid] == target
```

Return `mid`

---

### 🟡 Case 2

```
target < nums[mid]
```

Search left half

```
right = mid - 1
```

---

### 🔵 Case 3

```
target > nums[mid]
```

Search right half

```
left = mid + 1
```

---

# 🔁 Algorithm

```
left = 0
right = n - 1

while(left <= right){

    mid = (left + right) / 2

    if(nums[mid] == target)
        return mid

    else if(target < nums[mid])
        right = mid - 1

    else
        left = mid + 1
}

return -1
```

---

# 📊 Dry Run

Array

```
[-1,0,3,5,9,12]
```

Target = `9`

```
left = 0, right = 5
mid = 2 → value = 3

3 < 9 → move right
left = 3

mid = 4 → value = 9 ✅
```

Return `4`

---

# ⚠️ Important Edge Case

```
nums = [5]
target = 5
```

Loop condition must be:

```
while(left <= right)
```

NOT:

```
while(left < right)
```

---

# ⏱ Complexity

Time Complexity

```
O(log n)
```

---

Space Complexity

```
O(1)
```

---

# ⚡ Binary Search vs Linear Search

| Algorithm       | Time Complexity |
|----------------|----------------|
| Linear Search  | O(n)           |
| Binary Search  | O(log n)       |

---

# 🎯 Key Learning

• Works only on sorted arrays  
• Eliminates half of the search space  
• Uses left, right, and mid pointers  

Middle formula:

```
mid = Math.floor((left + right) / 2)
```

Loop condition:

```
left <= right
```