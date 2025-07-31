---
date: 2025-07-28
topics: [nodejs, mongodb, social-graph, backend, devflow]
day: 12
---

# 📘 Day 12 – Built a Follow/Unfollow System like Twitter 🧠

## ✅ What I Worked On

Today I completed a full **Follow/Unfollow** feature for DevFlow — simulating how apps like Twitter manage social relationships.

| Feature | Status |
|--------|--------|
| ➕ Follow a user | ✅ Done |
| ➖ Unfollow a user | ✅ Done |
| 📈 Get followers list | ✅ Done |
| 📉 Get followings list | ✅ Done |
| 🧠 Prevent duplicate follows | ✅ Handled |


## 💡 How It Works

### 🧾 MongoDB Schema Design
Each user document includes:
```js
{
  _id: ObjectId,
  username: "sangam",
  followers: [ObjectId],   // who follows you
  following: [ObjectId],   // who you follow
}
````

 📌 Updates are atomic using `$addToSet` (no duplicates) and `$pull` to remove.

### 🔄 Follow/Unfollow Logic

* **Follow**:

  * Add target user's ID to `currentUser.following`
  * Add current user ID to `targetUser.followers`

* **Unfollow**:

  * Pull IDs from both arrays

### 📦 Controller Endpoints

* `POST /api/v1/users/:id/follow`
* `DELETE /api/v1/users/:id/unfollow`
* `GET /api/v1/users/:id/followers`
* `GET /api/v1/users/:id/followings`

### 🔐 Security Notes

* Middleware ensures user is authenticated
* Validations prevent self-following or duplicates


## 📸 Snapshot

![Follow System Screenshot](https://pbs.twimg.com/media/Gw2jxHTb0AAl-HT?format=jpg\&name=large)


## ❌ Blockers

* Needed to resolve circular update risk between both users
* Indexed `followers` and `following` fields for faster queries


## 🧠 Reflection

This may seem like a small feature, but it's **core to any social app**.
I learned how to handle:

* Mutual updates between collections
* Preventing duplicate relationships
* Structuring efficient lookups

 “Social graphs are just arrays — until you scale them.”


## 🔜 Next Steps

* Follow counts cache layer (optional)
* Show follow button on user profile (frontend)
* Eventually → notification triggers on follow


## 🔗 References / Code

* 💻 [DevFlow GitHub Repo](https://github.com/Sangam5756/devflow)
* 💻 [DevFlow Commit ](https://github.com/Sangam5756/devflow/commit/ef4ef6d37b8086d66aa5c1147b3c3443d111ff54)

