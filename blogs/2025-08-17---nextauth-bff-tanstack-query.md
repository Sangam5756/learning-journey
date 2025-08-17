---
date: 2025-08-17
topics: [nextjs, authentication, state-management, tanstack-query, bff-pattern]
day: 30
---

# Day 30 – NextAuth Fixes, BFF API & TanStack Query

## ✅ What I Worked On
- Fixed `session null` and token type issues in NextAuth
- Implemented **BFF (Backend For Frontend)** layer with Next.js API routes for feed & like/dislike
- Added **optimistic UI updates** for smoother UX
- Standardized error and response handling in API calls
- Explored **TanStack Query** for caching and state management in feed actions

## 📚 What I Learned
- Handling optional `session` safely in NextAuth
- Why BFF is the industry standard to separate frontend logic from backend APIs
- How to implement **optimistic UI updates** for like/dislike actions
- **TanStack Query** for fetching, caching, and mutations

## ❌ Blockers
- Still need to finalize whether to keep all API call logic inside Next.js API routes or directly in frontend with TanStack Query
- Need deeper practice in TanStack Query patterns (cache invalidation, refetch vs optimistic updates)

## 🧠 Reflection
Today felt like a big step in **professionalizing the frontend architecture** — moving away from ad-hoc fetches towards **BFF + query caching**.  
I can already see how this will scale much better as the project grows.  

Next step: go deeper into TanStack Query and fully migrate feed + like/dislike into its flow.
