---
date: 2025-07-26
topics: [nodejs, backend, devflow, testing, dsa]
day: 10
---

# 📘 Day 10 – Answer Module: DONE & DUSTED 💥

## ✅ What I Worked On

🔨 **Goal:** Wrap up the Answer module in DevFlow  
And that’s exactly what I did 👇

| Task | Status |
|------|--------|
| ➕ Pending Service/Controller logic | ✅ Completed |
| 🔒 Ownership checks for delete/update | ✅ Secured |
| 📄 Finalized route-level documentation | ✅ Documented |
| 🧪 Unit tests for service/controller | ✅ Added |
| 📘 DSA revision: Sorting techniques | ✅ Reviewed |


## 🧠 Backend Highlights

### ✅ Service & Controller Logic
- Finished all remaining routes: `create`, `update`, `getById`, `getAllByQuestion`
- Services structured to return clean, validated responses

### 🔒 Ownership Checks (Security)
- Only authors can update or delete their answers:
```ts
if (answer.userId !== req.user.id) {
  throw new UnauthorizedError("Access denied");
}
````

 Clean separation of logic: controller handles request, service enforces rules

### 📄 Route Documentation

* All routes now follow Swagger/JSDoc style:

```js
/**
 * @route   PUT /api/v1/answers/:id
 * @desc    Update an answer
 * @access  Private
 */
```

### 🧪 Unit Testing Added

* Service layer covered with basic tests:

  * Create
  * Update with wrong user
  * Delete with ownership
  * Edge cases (e.g., non-existent answer)


## 📘 DSA Review – Sorting Techniques

* 🔁 Bubble Sort (swap until sorted)
* 🔢 Selection Sort (min each pass)
* 🪜 Insertion Sort (place where it fits)
* 🧠 Compared time complexity and stability


## ❌ Blockers

* Needed some tweaks to mock Mongoose methods in unit tests
* Minor bugs in middleware chaining for auth + validation (now resolved)


## 🧠 Reflection

This wasn’t just “finish the module.”
It was about doing it **right**: clean code, secure access, test coverage, and docs.

> Feeling confident in the structure of DevFlow’s backend now!


## 📸 Progress Snapshot

![Answer Module Complete](https://pbs.twimg.com/media/GwxodVqWYAAFrsF?format=jpg\&name=large)


## 🔗 References / Code

* 💻 [DevFlow GitHub Repo](https://github.com/Sangam5756/devflow)
* 💻 [commit](https://github.com/Sangam5756/devflow/commit/0bca9928de498de78019eeed60e3fb89edd04f91)

```

