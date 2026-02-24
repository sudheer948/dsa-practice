# 📘 Day 4A — How to Calculate Time Complexity (Common Patterns)

---

## 🎯 Goal

Learn how to calculate time complexity by identifying common code patterns.

Instead of memorizing, understand the structure.

---

## 1️⃣ Single Loop

```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

Loop runs `n` times.

Total operations = n

Time Complexity:

> O(n)

---

## 2️⃣ Two Independent Loops

```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}

for (let j = 0; j < n; j++) {
    console.log(j);
}
```

Operations:

n + n = 2n

Ignore constant.

Time Complexity:

> O(n)

---

## 3️⃣ Nested Loops

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

Operations:

n × n = n²

Time Complexity:

> O(n²)

---

## 4️⃣ Mixed Case

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}

for (let k = 0; k < n; k++) {
    console.log(k);
}
```

Operations:

n² + n

Keep highest term.

Time Complexity:

> O(n²)

---

## 🧠 Important Rules

- Independent loops → Add
- Nested loops → Multiply
- Ignore constants
- Keep highest order term

---

## 🎯 Key Takeaways (Day 4A)

- Single loop → O(n)
- Independent loops → O(n)
- Nested loops → O(n²)
- Mixed → Keep dominant term