---
date: 2025-08-14
topics: [frontend, react, nextjs, typescript, nextauth]
day: 27
---

# Day 27 – DevFlow Auth & UI Improvements

## ✅ What I Worked On
- Implemented **NextAuth login** with a fully custom UI.  
- Fixed **TypeScript & ESLint** issues in auth callbacks.  
- Added **conditional rendering** of Navbar & Footer on login/signup pages.  
- Cleaned up JWT & Session handling for **type safety**.  

## 📚 What I Learned
- How to **extend `Session` and `JWT` types** safely in NextAuth without breaking TypeScript.  
- Best practices for **inline typing vs. custom type files** for scalable projects.  
- Handling **async session fetch delays** in Next.js apps.  
- Importance of **conditional UI rendering** for auth-related pages.  

## ❌ Blockers
- TypeScript was complaining about `string | undefined` in JWT callbacks.  
- Initial ESLint warnings for unused `_credentials` and imports.  

## 🧠 Reflection
Today was a solid **full-stack improvement day**: I tackled auth flows, fixed type issues, and polished the UI logic. Feeling more confident about **type-safe authentication** in Next.js.  


> DevFlow GitHub: [https://github.com/sangam5756/devflow-frontend](https://github.com/sangam5756/devflow-frontend)
