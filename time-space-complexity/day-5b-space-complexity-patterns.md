# 📘 Day 5B — Space Complexity Patterns & Practice

---

## 1️⃣ Creating a New Array of Size n

```javascript
let newArr = [];

for (let i = 0; i < n; i++) {
    newArr.push(i);
}
```

New array grows with `n`.

Space Complexity:

> O(n)

---

## 2️⃣ Creating a 2D Matrix (n × n)

```javascript
let matrix = [];

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
    }
}
```

Memory used:

n × n

Space Complexity:

> O(n²)

---

## 3️⃣ Recursive Function Example

```javascript
function countDown(n) {
    if (n === 0) return;
    countDown(n - 1);
}
```

Each recursive call uses stack space.

Number of calls = n

Space Complexity:

> O(n)

---

## 🧠 Space Complexity Rules

- Few variables → O(1)
- New array of size n → O(n)
- 2D array n × n → O(n²)
- Recursive calls → depends on recursion depth

---

## 🎯 Interview Tip

In interviews, always mention:

- Time Complexity
- Space Complexity

Example:

> Time Complexity: O(n)  
> Space Complexity: O(1)

That shows complete understanding.

---

## 🎯 Key Takeaways (Day 5B)

- Memory that grows with input size affects complexity.
- Arrays and recursion increase space.
- Always analyze stack usage in recursive problems.