# LeetCode 121 – Best Time to Buy and Sell Stock

## 🧠 Problem Understanding

Given an array `prices`:

prices[i] = stock price on i-th day

You must:
- Choose one day to buy
- Choose a different future day to sell
- Maximize profit
- If no profit possible → return 0

---

## 🚨 Important Constraints

- Cannot sell before buying
- Cannot buy and sell on same day
- Selling must happen in future

---

## 📝 Example

Input:
[7,1,5,3,6,4]

Best:
Buy at 1  
Sell at 6  
Profit = 5

---

## 🧪 Brute Force Idea

Try all pairs:

Buy day i  
Sell day j (j > i)

profit = prices[j] - prices[i]

Time Complexity:
O(n²)

❌ Not efficient.