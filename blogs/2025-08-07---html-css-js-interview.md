---
date: 2025-08-07
topics: [frontend, interview-prep, nlp, semantic-search]
day: 4
---

# Day 4 – Interview Prep + Semantic Search Reading

## ✅ What I Worked On
- Revised HTML, CSS, and JavaScript interview questions from the GreatFrontEnd blog
- Explored how platforms detect similar questions using semantic search
- Studied the concept of semantic similarity using sentence embeddings

## 📚 What I Learned

### 🔹Interview Revision
- JavaScript hoisting, scoping rules, and function types
- `var`, `let`, and `const` — scope and hoisting behavior
- HTML semantic tags and how they impact SEO/accessibility
- CSS specificity, inheritance, and cascading rules

### 🔹 NLP & Semantic Search (Reading Only)
- Platforms like Stack Overflow use semantic similarity to detect duplicate questions
- `all-MiniLM-L6-v2` can embed text into high-dimensional vectors
- Compare questions using **cosine similarity**
- Threshold-based matching helps surface similar existing content before posting

No implementation today — just reading and understanding the concepts.

## ❌ Blockers
- Still gaining clarity on:
  - When to consider two questions "similar enough"
  - Scaling similarity search in a real project

## 🧠 Reflection
Revisiting frontend questions sharpened my interview focus.  
The semantic search concept looks powerful for DevFlow’s future roadmap, especially to reduce question duplication.

## 🔗 References
- [50 Must‑Know HTML, CSS, and JavaScript Interview Questions by Ex‑Interviewers – GreatFrontEnd](https://www.greatfrontend.com/blog/50-must-know-html-css-and-javascript-interview-questions-by-ex-interviewers)  
- [MiniLM model – HuggingFace](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
