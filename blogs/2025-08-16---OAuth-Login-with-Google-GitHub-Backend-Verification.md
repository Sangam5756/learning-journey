---
date: 2025-08-16
topics: [backend, authentication, OAuth, JWT, security]
day: 29
---

# Day 29 –  OAuth Login Flow

## ✅ What I Worked On

* Updated **User model** to support `oauthProvider` and `avatarUrl`.
* Implemented **OAuth login**: Google and GitHub.
  * Backend **verifies tokens directly with Google/GitHub APIs**, never trusting the frontend.
  * Creates or fetches user in DB.
  * Issues backend JWT.
* Updated **NextAuth callbacks** to handle:
  * Manual credentials login
  * Google OAuth
  * GitHub OAuth
* Enabled storing backend JWT in session for API calls.
* Handled avatar and provider info for OAuth users.
* Added REST endpoints `/user/oauth/login` to unify OAuth login flow.

## 📚 What I Learned

* Google ID token vs GitHub access token verification.
* How backend JWT can unify authentication across manual + OAuth.
* How to integrate NextAuth callbacks with backend for OAuth.
* Storing avatar and provider info for OAuth users.
* **Backend must verify provider tokens** instead of trusting frontend input.
* Testing OAuth flows using token POST requests.

## ❌ Blockers

* Google token verification requires `id_token`, not `access_token`.
* GitHub access token sometimes returns null email → fallback to login.
* Handling 404 / callback errors in NextAuth for GitHub.
* Understanding type differences in NextAuth `account`, `user`, `token`.

## 🧠 Reflection

Backend now securely verifies provider tokens with Google/GitHub APIs and issues unified JWT. Manual and OAuth login flows are unified, and frontend can now safely call backend with app-issued JWT. OAuth token verification ensures nobody can fake login directly via backend.

**see code** ->[github-commit](https://github.com/Sangam5756/devflow/commit/38a032188f02c436fa00fbd20118734447198f91)