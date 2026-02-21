# 📘 Day 1 — What is an Algorithm & Introduction to Time Complexity

---

## 1️⃣ What is an Algorithm?

An **algorithm** is simply a **step-by-step solution** to solve a problem.

It defines:

- **What steps to take**
- **In what order**
- **To achieve the desired output**

---

### 📌 Examples

- Sorting using **Bubble Sort** → Algorithm  
- Sorting using **Selection Sort** → Algorithm  
- Searching using **Linear Search** → Algorithm  
- Searching using **Binary Search** → Algorithm  

Different problems can have **multiple algorithms**.  
Some algorithms are **more efficient** than others.

---

## 2️⃣ What is Time Complexity?

### ✅ Definition

**Time Complexity measures the efficiency of an algorithm in terms of speed as the input size increases.**

The main focus is:

> **How does the algorithm behave when input size (`n`) grows?**

---

### ❌ Time Complexity ≠ Actual Time Taken

Many beginners confuse this.

Actual execution time depends on:

- Machine performance  
- RAM  
- CPU  
- Programming language (JavaScript vs C++)
- Compiler  
- System configuration  

So we **do NOT measure real execution time**.

Instead, we measure:

> **The number of operations performed relative to input size (`n`).**

---

## 3️⃣ Why Do We Analyze Growth?

If input size increases:

- Does the algorithm slow down slightly?  
- Or does it become extremely slow?  

Time complexity helps us **predict performance for large inputs**.

This is critical in:

- Competitive programming  
- Product-based company interviews  
- Real-world scalable systems  

---

## 🧠 Key Idea

We focus on:

- **Growth rate**
- **Pattern of operations**
- **Worst-case behavior**

Not exact seconds.

---

## 🎯 Key Takeaways (Day 1)

- An **algorithm** is a step-by-step solution to a problem.
- **Time complexity** measures efficiency as input size grows.
- It does **NOT** measure actual running time.
- We count **operations relative to `n`**.
- Understanding growth behavior is more important than execution time.