---
date: 2025-07-30
topics: [frontend, react, nextjs, authentication, next-auth]
day: 26
---

# Day 26 – Implementing Multi-Provider Authentication with NextAuth

## ✅ What I Worked On

- Set up authentication in a Next.js project using **NextAuth**.
- Integrated **Google OAuth**, **GitHub OAuth**, and a **custom credentials provider**.
- Configured `.env.local` for storing API keys and secrets.
- Implemented `jwt` and `session` callbacks to attach a `uid` to the session.
- Solved three linked list problems for DSA practice:
  - Add Two Numbers – Implemented addition using linked lists to simulate digit-by-digit summation.
  - Remove Nth Node from End – Used a two-pointer technique to achieve single-pass removal.
  - Merge Two Sorted Lists – Merged two sorted linked lists into one without creating new nodes.

## 📚 What I Learned

- How to configure multiple authentication providers in `NEXT_AUTH_CONFIG`.
- Using callbacks to customize the JWT and session objects.
- How OAuth apps on GitHub and Google require correct callback URLs.

## ❌ Blockers

- Initially got stuck with the `client_id is required` error for GitHub because my `.env` variable names didn’t match my code.
- Spent some time debugging why `process.env` values were coming up `undefined` — solved it by restarting the dev server after editing `.env.local`.

## 🧠 Reflection

Today I did Next.js authentication setup .  
Now I have three working sign-in methods — Google, GitHub, and custom credentials — all feeding into a unified session object.  
The main lesson: **90% of "NextAuth is broken" problems are just environment variable typos or callback URL mismatches**.  
Next up, I want to secure API routes and create a polished login UI so the experience is smooth for real users.

- **pow:** [github-code](https://github.com/Sangam5756/nextjs-revision/commit/ebb6654c40476c15ec2a6a05744d5b1fa29053fa)
