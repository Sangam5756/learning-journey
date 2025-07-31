---
date: 2025-07-23
topics: [nodejs, performance, clustering, event-loop, backend]
day: 7
---

# 📘 Day 7 – Node.js Cluster & Performance Benchmarking

## ✅ What I Worked On
- Built a benchmarking setup using **Node.js + Cluster + Worker Threads**
- Benchmarked **sync vs async route performance** using `autocannon`
- Integrated **BullMQ** for offloading heavy tasks to background workers
- Used `os.cpus()` to scale server instances across CPU cores

## 📚 What I Learned

| Scenario | Requests/sec | Timeouts | Avg Latency |
|----------|--------------|----------|-------------|
| **Async Route** | ✅ ~6.2k | ✅ ~80 | ✅ ~125ms |
| **Sync Route (Blocking)** | ❌ ~240 | ❌ 3k+ | ❌ up to 10s |

- 🧠 **Async I/O** in Node is highly performant when you avoid blocking operations
- ⚠️ **Sync code** kills event loop → adds timeouts and high latency
- ✅ Use **cluster** module for horizontal CPU scaling
- ✅ Offload CPU-intensive work using:
  - `worker_threads`
  - Background queues (BullMQ, Redis)

## ❌ Blockers
- Initial trouble spawning isolated workers without shared memory leak
- Needed to fine-tune autocannon settings for accurate measurements

## 🧠 Reflection
This wasn't just coding — this was understanding Node.js *under the hood*. Benchmarking clarified why certain design patterns (queues, cluster, async APIs) aren't just optional — they’re **critical** for real-world backend performance.

## 🔗 References / Code
- 📂 [Node.js Benchmarking Repo](https://github.com/Sangam5756/node-cluster-benchmark)
