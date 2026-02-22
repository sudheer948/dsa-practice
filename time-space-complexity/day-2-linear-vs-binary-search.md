# 📘 Day 2 — Linear Search vs Binary Search & Worst Case Analysis

---

## 1️⃣ Linear Search

### 🔎 How It Works

Linear Search checks elements **one by one** from start to end.

It compares each element until:
- The target is found
- OR the array ends

---

### 💻 Example (JavaScript)

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

---

### ⏱ Time Complexity

- Best Case → **O(1)** (element found at first index)
- Worst Case → **O(n)** (element at last index or not found)

Worst case operations = `n`

So overall complexity is:

> **O(n)**

---

## 2️⃣ Binary Search

⚠️ Binary Search works **only on sorted arrays**.

---

### 🔍 How It Works

1. Find the middle element  
2. Compare with target  
3. If target is smaller → search left half  
4. If target is larger → search right half  
5. Repeat until found  

Each step divides the array size by 2:

```
n → n/2 → n/4 → n/8 → ...
```

---

### 💻 Example (JavaScript)

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

---

### ⏱ Time Complexity

Each step halves the problem size.

Total steps = log₂(n)

So time complexity is:

> **O(log n)**

---

## 📊 Comparison

| Input Size (n) | Linear Search | Binary Search |
|---------------|---------------|---------------|
| 100           | 100 ops       | 7 ops         |
| 1000          | 1000 ops      | 10 ops        |
| 1,000,000     | 1,000,000 ops | 20 ops        |

Binary Search grows **very slowly** compared to Linear Search.

---

## 3️⃣ Why Do We Analyze Worst Case?

Big O represents **worst-case complexity**.

Why?

- Best case can be misleading.
- We want the **maximum number of operations** possible.
- It guarantees performance under heavy input.

Just like testing a laptop using heavy software.

So in interviews, always analyze:

> Maximum possible iterations.

---

## 🎯 Key Takeaways (Day 2)

- Linear Search → **O(n)**
- Binary Search → **O(log n)**
- Binary Search requires **sorted array**
- Big O represents **worst-case complexity**
- Dividing problem by 2 repeatedly → **log n**

