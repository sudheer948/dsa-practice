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

## 🚀 Optimized Approach (Single Pass)

### 🔥 Core Insight

If selling today,
Best buying price must be minimum price seen before today.

So instead of checking all combinations:

Track:
- minPrice (minimum seen so far)
- maxProfit (maximum profit so far)

---

## 🧠 Algorithm

Initialize:
minPrice = prices[0]
maxProfit = 0

Loop from i = 1 to n-1:

currentProfit = prices[i] - minPrice
maxProfit = max(maxProfit, currentProfit)
minPrice = min(minPrice, prices[i])

Return maxProfit

---

## 📊 Dry Run

Input:
[7,1,5,3,6,4]

Start:
minPrice = 7
maxProfit = 0

Day 1 (1):
Profit = 1 - 7 = -6
Update minPrice → 1

Day 2 (5):
Profit = 5 - 1 = 4
maxProfit = 4

Day 3 (3):
Profit = 3 - 1 = 2
maxProfit stays 4

Day 4 (6):
Profit = 6 - 1 = 5
maxProfit = 5

Final Answer = 5

## ⏱ Time Complexity
O(n)

Single traversal.

---

## 📦 Space Complexity
O(1)

Only two variables used.

---

## 🧩 Pattern Identified

Greedy Pattern

Key ideas:
- Maintain running minimum
- Calculate profit on the fly
- Convert O(n²) → O(n)

---

## 🎯 Mental Model

Don’t think about buying first.

Think:
"If I sell today, what’s the best buying price before today?"

That’s the trick.