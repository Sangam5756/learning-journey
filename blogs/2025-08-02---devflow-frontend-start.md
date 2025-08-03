---
date: 2025-08-02
topics: [nextjs, frontend, devflow, webdev]
day: 17
---

# Day 17 – DevFlow Frontend Kickoff 🚀

## ✅ What I Worked On

Today I officially started building the **frontend for DevFlow** using **Next.js with the App Router**. I began by designing and implementing the base layout for the application. This included:

- Setting up the **project folder structure** using an organized layout for `app/`, `components/`, and `lib/`.
- Creating a shared layout with **Navbar** and **Sidebar** components.
- Implementing basic **navigation routes** using Next.js routing conventions under the `/app` directory.
- Laying the groundwork for a scalable, modular frontend.

This foundational work is crucial to ensure that as the app grows, it's easy to maintain and extend.

## 📚 What I Learned

Since we started implementation of devflow using the **Next.js App Router**, I focused on understanding and applying several concepts:

- **Layouts in App Router**: Learned how to structure reusable layouts (`layout.tsx`) and where to place components like Navbar and Sidebar to make them persistent across pages.
- **Routing and nested folders**: Explored how Next.js automatically picks up routes based on the folder structure and how to configure nested pages.
- **Client vs Server Components**: Understood when and why to mark components with `"use client"`, especially for interactive parts like Sidebar toggling.
- **Component structure**: Thought carefully about which components should remain global and which should be page-specific.
- Also reviewed how `loading.tsx` and `error.tsx` can be used for better UX in routing.

## ❌ Blockers

- **Sidebar Toggle Logic**: I'm still not 100% confident in the best way to manage layout state (like opening/closing sidebar) when components are split between server and client. I may need to introduce a shared context or rethink some structure.
- **CSS & Tailwind Tweaks**: Minor UI issues with responsive design — but manageable.
- **Component Reusability**: Planning reusability without overengineering is still tricky.

## 🧠 Reflection

Starting the DevFlow frontend feels like a major milestone in this project. I now have a working layout with routes in place, and the entire architecture feels scalable. Learning Next.js App Router in real time while building something practical is helping me understand it more deeply than any tutorial ever could.

Next step: build out the homepage and authentication pages, followed by integrating real data from the backend.

It’s exciting to bring the vision of DevFlow to life — one component at a time.

![screnshot](https://pbs.twimg.com/media/GxW_PWhWQAEe3g7?format=jpg&name=4096x4096)
👉 **Check out the DevFlow Frontend Repo:**  
[github.com/Sangam5756/devflow-frontend](https://github.com/Sangam5756/devflow-frontend)
👉 **Check out the DevFlow Backend Repo:**  
[github.com/Sangam5756/devflow](https://github.com/Sangam5756/devflow)
