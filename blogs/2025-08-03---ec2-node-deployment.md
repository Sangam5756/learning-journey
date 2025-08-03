---
date: 2025-08-03
topics: [devops, deployment, ec2, nginx, nodejs]
day: 18
---

# Day 18 – Deploying Node.js Backend on EC2 with Nginx + SSL + PM2

## ✅ What I Worked On
- Launched and configured an EC2 instance
- Installed NVM, Node.js, Git, and cloned backend repo
- Set up Nginx as a reverse proxy to forward traffic to the Node.js app
- Configured domain DNS and pointed it to EC2 IP
- Installed SSL using Certbot for HTTPS
- Used PM2 to run backend in background and manage app lifecycle

## 📚 What I Learned
- How to expose ports securely using EC2 inbound rules
- Basics of Nginx server configuration
- Reverse proxying traffic from domain to local Node.js server
- Automating SSL certificate setup with Certbot
- Running backend processes persistently with PM2

## ❌ Blockers
- issue when accessing backend as port is  not expose on- Backend was not accessible directly because port 3000 wasn’t exposed in EC2 inbound rules
 internet
- Initially couldn’t see the Nginx welcome page due to closed 80/443 ports
- Minor confusion with Nginx syntax (missed semicolons)
- SSL setup required domain to propagate — had to wait

## 🧠 Reflection
Deploying an application on real infrastructure gave me hands-on clarity on production workflows. From EC2 configuration to Nginx reverse proxying, domain setup, and SSL integration — every step added practical DevOps knowledge. Managing the backend with PM2 makes the app production-ready and resilient. I now feel confident repeating and scaling this setup.

📖 Read the full blog post here:  
👉 [How I Deployed My Node.js Backend to EC2 with Nginx, SSL and PM2](https://sangammundhe.hashnode.dev/how-i-deployed-my-nodejs-backend-to-ec2-with-nginx-ssl-and-pm2)