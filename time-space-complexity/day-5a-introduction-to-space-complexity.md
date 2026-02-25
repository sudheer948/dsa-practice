# 📘 Day 5A — Introduction to Space Complexity

---

## 1️⃣ What is Space Complexity?

Space Complexity measures the **extra memory used by an algorithm** as input size increases.

It tells us:

- How much additional space is required
- How memory grows relative to input size (`n`)

Important:

> We only count **extra memory**, not input memory.

---

## 2️⃣ Example 1 — Constant Space

```javascript
return arr[4];
```

No new variables created.
No extra data structures used.

Space Complexity:

> O(1)

---

## 3️⃣ Example 2 — Using Few Variables

```javascript
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
```

Extra memory used:
- `max`
- `i`

Only constant number of variables.

Space Complexity:

> O(1)

---

## 4️⃣ Important Rule

If number of variables does NOT depend on `n`:

Space Complexity:

> O(1)

---

## 🎯 Key Takeaways (Day 5A)

- Space complexity measures extra memory usage.
- Input array memory is NOT counted.
- Few variables → O(1).
- We focus on how memory grows with `n`.