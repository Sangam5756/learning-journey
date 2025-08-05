---
date: 2025-08-05
topics: [DevFlow, Docker, Redis, DSA, Next.js, Frontend, Full-Stack, EC2, PM2, Nginx]
day: 20
---

# Day 20 – DevFlow Feed Page + Dockerized Backend + Redis + EC2 + DSA Practice

## ✅ What I Worked On

### 🚀 DevFlow Backend Deployment
- Deployed **DevFlow backend** to **EC2** using `docker-compose`
- Used Docker to run **Redis container** locally instead of Redis Cloud due to low usage of that.
- Configured **BullMQ** to use Redis with TLS locally or via Docker
- Created `Dockerfile` and `docker-compose.yml` for backend + Redis setup

### 🔧 Server Management
- Installed **Docker CLI** on aws ec2 machine
- Managed backend processes with **PM2**
- Deployed second backend (`devmeetbackend.sangammundhe.site`) on same EC2
- Setup **Nginx reverse proxy** + added **SSL via Certbot** for custom domains
- Exposed necessary EC2 inbound ports (80, 443, 3000, 5000)

### 💬 DevFlow Frontend Progress
- Built **Feed Page UI** using **Next.js 
- Implemented **tabbed interface**:
  - Latest, Trending, Unanswered
- Created reusable `QuestionCard` and `TabButton` components
- Added trending tags, community stats, and sidebar widgets


### 🧠 DSA Practice – Linked List Deletion
- Practiced:
  - Delete at head
  - Delete at tail
  - Delete middle node (slow/fast pointer approach)
  - Delete N-th node from end
- Reviewed edge cases: empty list, single node, invalid positions

## 📚 What I Learned

- Docker-based Redis setup and integration for backend
- Reverse proxying and HTTPS setup with Nginx + Certbot on EC2
- PM2 usage to keep backend alive and log monitoring
- How to safely delete nodes in linked lists (all major positions)
- Tabbed UI layout and routing in a full-stack app with Next.js

## ❌ Blockers

- Feed page needs pagination + real API connection
- Redis production config needs testing under load
- Working with multiple backend apps on the same EC2 instance
  - Multiple domains were mapped to different backend servers
  - Initially didn’t know how to configure Nginx for this

## 🧠 Reflection

Today was all about shipping a robust, scalable backend with Docker and Redis, while keeping frontend development in motion with a clean tabbed feed UI. Small but consistent progress on both DSA and full-stack.

---


📘 Hashnode Blog:  
https://sangammundhe.hashnode.dev/how-i-deployed-my-nodejs-backend-to-ec2-with-nginx-ssl-and-pm2  
💻 GitHub:  
https://github.com/Sangam5756/devflow-backend  
🌐 Portfolio:  
https://www.sangammundhe.site