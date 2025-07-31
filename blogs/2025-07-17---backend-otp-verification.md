---
date: 2025-07-17
topics: [backend, nodejs, redis, bullmq, otp-auth, systemdesign]
day: 2
---

# 📘 Day 2 – Scalable OTP Email Verification System

## ✅ What I Worked On
- Designed & built DevFlow's OTP email verification system
- Used Redis to store hashed OTPs
- Used Bull Queue for async email delivery
- Wrote a full breakdown in my blog post

## 📚 What I Learned
- Using Redis as a fast key-value store with expiration logic
- Why email queues prevent user-facing lag
- Clean modularization of OTP functions: `generate`, `store`, `queue`, `verify`
- Bcrypt hashing for security, even for short-lived OTPs

## ❌ Blockers
- Bull worker needed retry configuration
- Redis connections maxed out during testing

## 🧠 Reflection
Felt like I built a real microservice system today — async, scalable, and clean. Redis + Bull made the flow smooth and queue-driven. This is what real backend dev is about.

## 🖼️ System Architecture
![OTP Email Verification Flow](https://raw.githubusercontent.com/Sangam5756/devflow/refs/heads/main/Design/EmailVerification.png)

## 🔗 References / Code
- [📘 Blog – How Real Apps Handle OTP](https://sangammundhe.hashnode.dev/how-to-build-scalable-email-verification-in-nodejs-like-real-apps-do)
- [Initial Planning Commit](https://github.com/Sangam5756/devflow/commit/de6d653b1cc5b63c911a987de0cd937e07b7a384)
- [Implementation Commit](https://github.com/Sangam5756/devflow/commit/30490f68ed654b6d94bcfd27cb52725b3a483b30)
