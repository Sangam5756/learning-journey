---
date: 2025-07-19
topics: [sql, database, transactions, isolation, backend]
day: 4
---

# 📘 Day 4 – Core SQL Concepts Revised + Hands-On Practice

## ✅ What I Worked On
- Revised foundational SQL topics using hands-on CLI practice
- Created markdown notes with query examples
- Simulated **transaction isolation anomalies** in PostgreSQL
- Documented all concepts with diagrams + real-world analogies

## 📚 What I Learned
- ✅ **Transactions**: `BEGIN`, `COMMIT`, `ROLLBACK` — atomic, consistent operations
- ✅ **ACID** Properties:
  - **A – Atomicity**: All or nothing (e.g., ₹100 isn’t deducted if transfer fails)
  - **C – Consistency**: Always valid data (e.g., no -₹50 balances)
  - **I – Isolation**: No user clashes (e.g., only one person books a seat)
  - **D – Durability**: Changes survive crashes (e.g., your booking is saved even after a power cut)
- ✅ **Isolation Levels** (with hands-on examples):
  - 🔹 `READ UNCOMMITTED` → dirty reads allowed
  - 🔹 `READ COMMITTED` → no dirty reads; non-repeatable reads possible
  - 🔹 `REPEATABLE READ` → consistent row reads; phantom reads may occur
  - 🔹 `SERIALIZABLE` → strictest; full isolation, full locking
- ✅ **Normalization**:
  - 1NF → Atomic columns
  - 2NF → Remove partial dependency
  - 3NF → Remove transitive dependency
- ✅ **Database Design**: foreign keys, indexing strategies, table relationships
- ✅ **SQL Axioms & Keys**:
  - Primary Key
  - Foreign Key
  - Composite Key
  - Candidate Key

## ❌ Blockers
- Took time to simulate and understand isolation-level behaviors (e.g., phantom reads)
- Differentiating `REPEATABLE READ` and `SERIALIZABLE` in practice

## 🧠 Reflection
Finally got clarity on **why ACID matters** in real-world apps — banking, ticketing, and payments. Simulating SQL anomalies in real-time made it all click. Isolation levels are no longer just theory — I can explain and apply them.

## 📸 Isolation Level Visuals

### 🔁 Repeatable Read
![Repeatable Read](https://pbs.twimg.com/media/GwT1ZErXcAA6SZA?format=jpg&name=large)

### 🔒 Serializable
![Serializable](https://pbs.twimg.com/media/GwT1RXNWcAAVFWm?format=jpg&name=large)

### 👀 Read Committed
![READ COMMITTED](https://pbs.twimg.com/media/GwT1RXOWcAAU9eG?format=jpg&name=large)

### 🚫 Read Uncommitted
![READ UNCOMMITTED](https://pbs.twimg.com/media/GwT1RtyWYAAlU5_?format=jpg&name=large)

## 🔗 References / Code
- 📂 [SQL Notes + Commands](https://github.com/Sangam5756/sql-essentials)
