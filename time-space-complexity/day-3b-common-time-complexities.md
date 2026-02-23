# 📘 Day 3B — Common Time Complexities & Growth Order

---

## 🟢 O(1) — Constant Time

The algorithm takes the same time regardless of input size.

```javascript
return arr[5];
```

Even if array size = 10 or 1,000,000 → time stays constant.

---

## 🟢 O(log n) — Logarithmic Time

Problem size is divided by 2 repeatedly.

Example:
- Binary Search

Growth pattern:

```
n → n/2 → n/4 → n/8 → ...
```

Very efficient for large inputs.

---

## 🟢 O(n) — Linear Time

Single loop.

```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

Operations grow directly with `n`.

---

## 🟢 O(n log n)

Combination of linear and logarithmic behavior.

Common examples:
- Merge Sort
- Quick Sort (average case)

---

## 🔴 O(n²) — Quadratic Time

Nested loops.

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

Operations = n × n = n²

---

## 🔴 O(2ⁿ) — Exponential Time

Growth doubles as `n` increases.

Common in brute-force recursion.

---

## 🔴 O(n!) — Factorial Time

Seen in permutation problems.

Extremely slow for large `n`.

---

## 📈 Growth Order (Best → Worst)

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)
```

Left side = More efficient  
Right side = Less efficient  

As `n` becomes large, differences become massive.

---

## 🎯 Key Takeaways (Day 3B)

- O(1) is most efficient.
- Nested loops often lead to O(n²).
- Exponential and factorial complexities grow very fast.
- Always try to move left in growth order.