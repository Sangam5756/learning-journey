---

date: 2025-08-08
topics: \[backend, frontend, react, ci/cd]
day: 23
-------
# 📘 Day 22 –  DevOps Setup, Backend  & Frontend 

## What I Worked On

### DevOps / CI-CD

* Created GitHub Actions workflow to automate deployment on EC2.
* Developed a deploy script to pull latest code, install dependencies, run tests, and reload app using PM2.
* Fixed environment issues by loading NVM in the deploy script so `npm` and `pm2` commands work properly.
* Managed deployment logs with `tee` for real-time output and persistent logging.

### Backend

* Implemented aggregation query to fetch a question with all its answers, including likes, `isLiked`, and `isOwner` flags for each answer.

### Frontend

* Developed a self-contained Question Detail page in Next.js using server-side rendering.
* Styled UI with Tailwind CSS and custom inline JSX components (avatar, badges, buttons).
* Implemented nested replies UI with proper indentation and author info.
* Fixed asynchronous slug-to-ID conversion issue in Next.js routing.
* Added HTML mockup and decided on the layout for question details and answers section.
* Implemented fetching and displaying question details and answers from the backend API.
* Completed building the Question Details page with title, body, and answers displayed in a flat list.

---

## What I Learned

### DevOps / CI-CD

* How to set up CI/CD pipelines using GitHub Actions with SSH deployment.
* Importance of loading user environment variables (NVM) in deployment scripts to avoid command not found errors.
* Managing deployment logs effectively during automated deploys.

### Backend

* Using MongoDB aggregation to efficiently fetch and enrich related data in one query.

### Frontend

* Handling asynchronous data fetching and routing in Next.js.
* How to build complex UI components purely with JSX and Tailwind CSS.
* Server-side data fetching in Next.js for dynamic content rendering.
* Importance of minimizing external dependencies for easier maintenance.

---

## Blockers

### DevOps

* Initial deployment failed due to missing PATH for `npm` and `pm2` commands in non-interactive shell.
* Ensuring test cases run correctly and prevent deployment on failures.
* Capturing and viewing deployment logs both on EC2 and GitHub Actions.

### Frontend

* Ensuring the UI stayed clean and readable without using shared external components.

---

## Reflection

Automating deployment with CI/CD has streamlined the backend release process and reduced manual work. The aggregation-based backend API combined with improved frontend routing and UI provides a smoother user experience. Learning to debug environment issues in deploy scripts was valuable. Building self-contained UI components improves code portability and reduces coupling. Server-side rendering boosts SEO and initial load performance. Tailwind CSS is powerful for styling without extra CSS files. Balancing UI complexity with simplicity in component design is key for scalability.

---
