---
date: 2025-07-24
topics: [nodejs, backend, architecture, clean-code, devflow]
day: 8
---

### 📘 Day 8 – DevFlow: Answer Module + Clean Backend Architecture


## ✅ What I Worked On
- Designed & implemented **Answer module** with a scalable backend structure
- Applied proper **layered architecture**: Controller → Service → Repository
- Added **secure deletion logic**: Only the author can delete their answer
- Integrated **Husky + lint-staged** for automated code formatting/linting

## 🧠 Key Highlights

### 🧱 Layered Backend Design
- Built **Controller → Service → Repository** abstraction
- Followed single responsibility principle (SRP)
- Connected Mongoose models via `BaseRepository`

### 🔐 Secure Answer Deletion Logic
```ts
if (answer.userId !== req.user.id) {
  throw new UnauthorizedError('Not allowed');
}
````

> ✅ Prevents users from deleting others' answers
> ✅ Enforces strict ownership in business logic layer

### 🧪 AnswerService Architecture

* Input validation via custom validator
* Added methods like `createAnswer`, `findByUser`, `findAnswerById`
* Unit-testable service with clear doc comments

### 🗃️ Repository Pattern

* Used `BaseRepository` to avoid duplicate DB logic
* Custom methods for queries (e.g., `findByUser`, `getByQuestionId`)
* Keeps data access abstracted and clean

### 📋 Swagger + JSDoc Style Route Docs

```js
/**
 * @route   POST /api/v1/answers
 * @desc    Create new answer
 * @access  Private
 */
```

> Helps devs onboard quickly and keeps APIs self-documented

### 🧼 Code Quality Automation with Husky

* `pre-commit` → `npm run lint:fix`
* `pre-push` → format checks or tests
* Ensures no messy code lands in the repo


## ❌ Blockers

* Small issue with TypeScript hinting on inherited repository methods (resolved)
* Swagger parsing didn't like multiline JSDoc comments at first


## 🧠 Reflection

I didn’t just write code — I **built the foundation** for something scalable.
Security, structure, and automation are now baked into DevFlow.

 “Speed is nothing without stability — and that’s what architecture gives.”


## 🔜 Next Up

* Finish `AnswerController`: update, getById, getAllByQuestionId
* Add unit tests for service logic
* Consider adding **soft delete** for future moderation features


## 🔗 References / Code

* 💻 [DevFlow GitHub Repo](https://github.com/Sangam5756/devflow)
* 💻 [commit](https://github.com/Sangam5756/devflow/commit/2be74f5f47de1440766e182271630ca5deb77161)


