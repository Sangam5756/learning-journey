---
date: 2025-08-04
topics:
  [Next.js, Server Actions, Prisma, RPC, TypeScript, DSA, LinkedList, DevFlow]
day: 19
---

# Day 19 – Full-Stack Practice + DevFlow Progress

## ✅ What I Worked On

- **Next.js**:

  - Reviewed server components vs client components
  - Used server actions with a signup form implementation
  - Refactored Prisma with `globalThis`

- **DevFlow**:

  - Completed landing page UI
  - Set up all routing
  - Planned reusable component structure
  - Used AI efficiently for UI suggestions

- **DSA**:

  - Revised linked list basics
  - Implemented `addFirst`, `addTail`, `deleteNode` in linked list

---

## 📚 What I Learned

- what is rpc and why its better in nextjs
- Server actions behave like RPC; need `'use server'`
- Use `globalThis` to prevent multiple Prisma instances
- Use Zod for validation, bcrypt for hashing
- Returning HTTP status with `Response.json(..., { status })`
- Practiced layout separation and responsive UI
- Learned **Singleton** Pattern for managing Prisma client

---

## ❌ Blockers

- Misunderstood server actions vs server component behavior
- Prisma hot reload issue (fixed with singleton)
- Initially struggled with reusable component structure for landing page UI

---

## 🧠 Reflection

Today was a solid balance between **revision**, **building**, and **learning by doing**.

Revisiting Next.js's internals gave me more clarity on how it handles server vs client logic. I now fully understand how server actions work and why they're a modern version of RPC — clean, efficient, and intuitive.

Proud that I didn’t just code — I made meaningful progress in my **DevFlow project** by completing the **landing page**, and kept up with my DSA practice by writing essential linked list operations from scratch.

Staying consistent and full-stack strong 💪

---

## 🔗 GitHub Commits

* 🧠 Next.js Revision: [Commit](https://github.com/Sangam5756/nextjs-revision/commit/e73a89eaebf1275c4f4cf7eb55a2d2287d169f69)
* 🚀 DevFlow Frontend: [Commit](https://github.com/Sangam5756/devflow-frontend/commit/092341cfc443856cbbe1b2d3ee49660a301f3a11)

---