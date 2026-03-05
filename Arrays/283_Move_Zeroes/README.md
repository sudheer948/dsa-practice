# 🚚 283. Move Zeroes

## 🧠 Problem

Given an integer array `nums`, move all `0`s to the end while maintaining the **relative order of the non-zero elements**.

The operation must be done **in-place**.

---

## 🔎 Example

Input

```
[0,1,0,3,12]
```

Output

```
[1,3,12,0,0]
```

---

## 💡 Approach — Two Pointer Technique

We maintain two pointers:

- `i` → scans the array
- `x` → position where the next non-zero element should be placed

### Idea

1. Traverse the array.
2. When a non-zero element is found:
   - move it to position `x`
   - increment `x`
3. After traversal, fill the remaining elements with `0`.

---

## ⏱ Complexity

Time Complexity

```
O(n)
```

Space Complexity

```
O(1)
```

The solution modifies the array **in-place**.

---

## 🧩 Pattern

Two Pointer Pattern  
(Slow pointer + Fast pointer)