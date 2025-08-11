---
date: 2025-08-11
topics: [backend, architecture, bullmq, redis, mongodb, feed]
day: 25
---

# Day 25 – Materialized Feed Architecture with BullMQ & Redis

## ✅ What I Worked On
- Designed scalable feed system using a denormalized `Feed` collection
- Added PlantUML diagram for architecture visualization
- Documented system structure in README.md
- Wrote STAR-format examples for feed update events (like-added, answer-added, etc.)
- Planned use of BullMQ workers for async feed updates
- Decided on Redis queue + Mongo atomic `$inc` for counters

## 📚 What I Learned
- How to separate read and write models for high-performance APIs
- Event-driven updates using job queues
- Benefits of materialized views for high-traffic feeds (inspiration from Twitter, Reddit, Stack Overflow)
- Using PlantUML to visualize backend architecture


## ❌ Blockers
- Confusion over how to keep `isLike` user-specific flag — debating whether to resolve at read time or precompute per user
- Unsure about best retry/backoff settings in BullMQ for handling temporary Redis or Mongo outages
- Need to figure out idempotency to avoid double increments when events are retried
- Designing schema updates for `Feed` collection without breaking existing API consumers
- Wondering how to handle backfill efficiently without locking collections or impacting live traffic


## 🧠 Reflection
Moving to an event-driven, materialized feed feels like a huge performance win for large-scale systems. Excited to start wiring the actual worker logic and test end-to-end job processing.

