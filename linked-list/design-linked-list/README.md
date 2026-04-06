# 🏗️ Design Linked List (Part 1)

## 🧠 Pattern
Design + Simulation

## 💡 Idea

Build a Linked List from scratch using:

• Node structure  
• Head pointer  
• Operations  

---

# 📌 Problem

Design a Linked List with the following operations:

```
get(index)
addAtHead(val)
addAtTail(val)
addAtIndex(index, val)
deleteAtIndex(index)
```

---

# 🧩 Node Structure

Each node contains:

```
[ val | next ]
```

---

# 🧱 Node Implementation

```javascript
function Node(val){
    this.val = val;
    this.next = null;
}
```

---

# 🧩 Linked List Structure

```javascript
var MyLinkedList = function(){
    this.head = null;
    this.size = 0;
};
```

---

# 🧠 Properties

| Property | Meaning |
|----------|--------|
| head     | Starting node |
| size     | Number of elements |

---

# ⚙️ Operations Overview

## 1️⃣ get(index)

Return value at given index.

👉 Traverse from head

---

## 2️⃣ addAtHead(val)

Insert node at beginning.

```
newNode.next = head
head = newNode
```

---

## 3️⃣ addAtTail(val)

Insert node at end.

👉 Traverse to last node  
👉 Attach new node  

---

## 4️⃣ addAtIndex(index, val)

Insert node before index.

---

## 5️⃣ deleteAtIndex(index)

Remove node at index.

---

# 🔥 Core Pointer Logic

## Insert

```
prev → next
```

Steps:

```
prev.next = newNode
newNode.next = next
```

---

## Delete

```
prev → target → next
```

Step:

```
prev.next = next
```

---

# ⚠️ Edge Cases

• Empty list  
• Insert at head  
• Insert at tail  
• Invalid index  
• Delete head  

---

# 🧠 Key Insight

Linked List = **Pointer Manipulation**

---

# 🎯 Interview Focus

• Node creation  
• Head handling  
• Traversal  
• Pointer updates  

---

# 🚀 Summary

You designed:

```
Node → LinkedList → Operations
```