---
date: 2025-07-29
topics: [nodejs, backend, likes-dislikes, mern, system-design]
day: 13
---

# 📘 Day 13 – Like/Dislike System Like Twitter 💥

## ✅ What I Worked On

Built a fully working **Like/Dislike system** in DevFlow — inspired by how platforms like Twitter or Reddit manage user reactions in real time.

| Feature | Status |
|--------|--------|
| 👍 Like a post | ✅ Done |
| 👎 Dislike a post | ✅ Done |
| 🔁 Toggle reactions cleanly | ✅ Handled |
| 🧠 Distinguish between `Question` and `Answer` | ✅ Via `targetType` |
| 🔐 Protected endpoints with auth | ✅ Secured |


## 🧠 Design Decisions

### 🔄 Unified Reaction Schema
```js
{
  _id: ObjectId,
  userId: ObjectId,
  targetId: ObjectId,       // Question or Answer ID
  targetType: "question" | "answer",
  reaction: "like" | "dislike",
  createdAt: Date
}
````

 ✅ Single schema handles both Questions and Answers
 ✅ Easily filter and aggregate by type or target

### ♻️ Reaction Toggle Logic

* If user likes a post already, remove like (toggle off)
* If switching from like → dislike or vice versa → update reaction
* Ensures one reaction per user per post

### 🧱 Scalable Design with Mongoose + Aggregation

* Used `$match` + `$group` to count reactions efficiently
* Indexes added on `targetId` and `userId` for fast toggles & counts

### 🔒 Protected Endpoints

* Only authenticated users can react
* Validated `targetId` existence before saving


## 📂 Project Structure

* ✅ Modular service functions (clean toggle logic)
* ✅ Reusable controller for all types (question, answer)
* ✅ Express REST APIs follow standard resource naming


## 📸 Screenshot

![Like/Dislike System in DevFlow](https://pbs.twimg.com/media/Gw8Q-ppXYAAVcNl?format=jpg\&name=large)


## ❌ Blockers

* Had to handle edge cases: user re-likes the same post, etc.
* Early version had duplicate reactions before applying `$set` logic


## 🧠 Reflection

Building reactions wasn’t just about toggling a field.
It taught me how apps scale this data for:

* Real-time counts
* Feed personalization
* Behavior analytics

 “Big features start with small schemas — but scale with smart design.”


## 🔜 Next Up

* Add **View Aggregation**: track impressions per post
* Build **User Reaction History** page
* Cache reaction counts (optional)


## 🔗 References / Code

* 💻 [DevFlow GitHub Repo](https://github.com/Sangam5756/devflow)
* 💻 [DevFlow commit](https://github.com/Sangam5756/devflow/commit/121b382e51dd717347e9dc5cbe9fb8d4be191994)

```
