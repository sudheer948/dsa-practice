# 🔗 Linked List (Introduction)

## 🧠 Pattern
Linear Data Structure

## 💡 Idea

Store data as **nodes connected via pointers** instead of continuous memory.

---

# 📌 What is a Linked List?

A Linked List is a data structure where:

• Data is stored in **nodes**  
• Each node contains:  
  - Value (data)  
  - Pointer (reference to next node)  

---

# 🧩 Node Structure

```
[ Data | Next Pointer ]
```

Example

```
3 → 1 → 4 → 5 → null
```

---

# 🧠 Key Components

## 🔹 Node

Basic unit containing:

• Value  
• Pointer  

---

## 🔹 Head

Starting point of the list

```
Head → 3 → 1 → 4 → 5 → null
```

---

## 🔹 Tail

Last node of the list

```
Points to null
```

---

# 🔗 Types of Linked List

## 1️⃣ Singly Linked List

```
[Data | Next] → [Data | Next] → null
```

✔ One direction traversal  
✔ Less memory  

---

## 2️⃣ Doubly Linked List

```
[Prev | Data | Next]
```

✔ Traverse both directions  
❌ More memory used  

---

# ⚔️ Linked List vs Array

## 🧱 Memory Layout

| Array              | Linked List        |
|-------------------|------------------|
| Contiguous memory | Non-contiguous   |
| Stored together   | Scattered memory |

---

## ⚡ Access

Array:

```
arr[i] → O(1)
```

Linked List:

```
Traverse from head → O(n)
```

---

## ➕ Insertion / Deletion

Linked List:

✔ Easy (pointer change) → O(1)

Array:

❌ Requires shifting → O(n)

---

## 💾 Memory

| Array        | Linked List           |
|--------------|----------------------|
| Efficient    | Extra memory         |
| Only values  | Value + pointer      |

---

# ⚖️ Summary

| Feature         | Array | Linked List |
|----------------|------|-------------|
| Access         | O(1) | O(n)        |
| Insert/Delete  | O(n) | O(1)        |
| Memory         | Less | More        |
| Size           | Fixed/Dynamic | Dynamic |

---

# 🎯 When to Use

## ✅ Use Array

• Fast index access  
• Known size  
• Memory efficient  

---

## ✅ Use Linked List

• Frequent insert/delete  
• Dynamic size  
• Flexible structure  

---

# ⚠️ Important Concepts

• Linked list is accessed using **head**  
• No direct indexing  
• Must traverse node by node  
• Tail points to null  

---

# 🧠 Core Insight

```
Array → Fast access, slow modification  
Linked List → Slow access, fast modification
```

---

# 🎯 Final Takeaway

Linked List is about:

```
Nodes + Pointers + Traversal
```