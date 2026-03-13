# 🚀 Quick Start Guide

## Get Your X.com Automation Running in 5 Minutes

### Step 1: Get Twitter API Access (5-10 minutes)

1. Visit [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Sign in with your Twitter/X account
3. Click "Create Project" → "Create App"
4. Give your app a name (e.g., "Learning Journey Bot")
5. Click on your app → "Keys and Tokens" tab
6. Click "Generate" for Access Token and Secret
7. **Save all 4 credentials**:
   - API Key
   - API Secret  
   - Access Token
   - Access Token Secret

**⚠️ Important**: In App Settings → "User authentication settings", set permissions to **Read and Write**

### Step 2: Add Secrets to GitHub (2 minutes)

1. Go to your GitHub repo: `https://github.com/YOUR_USERNAME/learning-journey`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each:
   - Name: `TWITTER_API_KEY` → Value: Your API Key
   - Name: `TWITTER_API_SECRET` → Value: Your API Secret
   - Name: `TWITTER_ACCESS_TOKEN` → Value: Your Access Token
   - Name: `TWITTER_ACCESS_SECRET` → Value: Your Access Token Secret

### Step 3: Test It! (1 minute)

1. Go to **Actions** tab in your repo
2. Click **Daily X.com Learning Post** workflow (left sidebar)
3. Click **Run workflow** → **Run workflow** (green button)
4. Wait 1-2 minutes
5. Check your X.com profile - you should see a new post! 🎉

### Step 4: Customize (Optional)

**Change posting time:**
Edit `.github/workflows/daily-x-post.yml`:
```yaml
schedule:
  - cron: '0 14 * * *'  # 2:00 PM UTC instead of 8:00 PM
```

**Change image colors:**
Edit `scripts/post-to-x.js`, find the `generateImage()` function and modify the gradient colors.

## 🎯 What Happens Daily

Every day at 8:00 PM UTC (or your custom time):
1. ✅ Workflow automatically runs
2. 📖 Finds your latest blog post
3. 🎨 Generates a beautiful image
4. 🐦 Posts to X with hashtags
5. 📊 You get more visibility and followers!

## 🆘 Troubleshooting

**"Missing required environment variables"**
- Double-check all 4 secrets are added to GitHub
- Secret names must be EXACTLY as shown (case-sensitive)

**"Error: No blog posts found"**
- Make sure you have `.md` files in the `blogs/` directory
- Files should be named: `YYYY-MM-DD---title.md`

**Workflow doesn't run automatically**
- Wait up to 24 hours for first run
- Cron jobs can have delays in GitHub Actions
- Use manual trigger to test immediately

**Need help?**
- Check the full documentation: [scripts/README.md](README.md)
- View workflow logs in Actions tab
- Open an issue if problems persist

---

**🎊 That's it! Your automation is ready!**

Now you can focus on learning, and the bot will handle sharing your progress daily. 🚀
