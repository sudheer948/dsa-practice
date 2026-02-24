# 📘 Day 4B — Time Complexity Practice Examples

---

## Example 1

```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

Runs n times.

Time Complexity:

> O(n)

---

## Example 2

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i, j);
    }
}
```

Inner loop runs:
0 + 1 + 2 + ... + (n-1)

Total operations ≈ n² / 2

Ignore constant.

Time Complexity:

> O(n²)

---

## Example 3

```javascript
let i = n;
while (i > 0) {
    i = Math.floor(i / 2);
}
```

Each step divides by 2.

n → n/2 → n/4 → n/8 → ...

Time Complexity:

> O(log n)

---

## Example 4

```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}

while (n > 0) {
    n = Math.floor(n / 2);
}
```

Operations:

n + log n

Keep dominant term.

Time Complexity:

> O(n)

---

## 🎯 Key Learning

When solving interview problems:

1. Identify loop structure
2. Check if loops are nested or independent
3. Look for division by 2 (log n)
4. Remove constants
5. Keep highest order term