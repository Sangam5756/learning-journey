# 🤖 X.com Daily Learning Post Automation

This automation workflow automatically posts your daily learning journey to X.com (Twitter) with attractive, interactive images.

## 🌟 Features

- 📅 **Daily automated posts** - Runs at 8:00 PM UTC every day
- 🎨 **Interactive images** - Generates beautiful gradient images with your learning highlights
- 📊 **Smart parsing** - Extracts key learnings from your blog posts automatically
- 🔖 **Auto-hashtags** - Includes relevant hashtags based on topics
- ⚡ **Manual trigger** - Can be run manually anytime via GitHub Actions

## 📋 Setup Instructions

### 1. Get X.com (Twitter) API Credentials

You need to apply for Twitter Developer access and create an app:

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new App (or use an existing one)
3. Navigate to your App's "Keys and Tokens" section
4. Generate the following credentials:
   - **API Key** (Consumer Key)
   - **API Secret** (Consumer Secret)
   - **Access Token**
   - **Access Token Secret**

**Important:** Make sure your app has **Read and Write** permissions enabled.

### 2. Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   | Secret Name | Description |
   |-------------|-------------|
   | `TWITTER_API_KEY` | Your Twitter API Key (Consumer Key) |
   | `TWITTER_API_SECRET` | Your Twitter API Secret (Consumer Secret) |
   | `TWITTER_ACCESS_TOKEN` | Your Twitter Access Token |
   | `TWITTER_ACCESS_SECRET` | Your Twitter Access Token Secret |

### 3. Install Dependencies (for local testing)

```bash
cd scripts
npm install
```

### 4. Enable GitHub Actions

Make sure GitHub Actions is enabled for your repository:
- Go to **Settings** → **Actions** → **General**
- Ensure "Allow all actions and reusable workflows" is selected

## 🎯 How It Works

### Workflow Flow

1. **Scheduled Trigger**: Runs daily at 8:00 PM UTC (customize the cron schedule in `.github/workflows/daily-x-post.yml`)
2. **Parse Latest Blog**: Finds the most recent blog post in the `blogs/` directory
3. **Extract Content**: Extracts topics, day number, and key learnings
4. **Generate Image**: Creates an attractive 1200x675px image with:
   - Gradient background (blue theme)
   - Day number and title
   - Date
   - Topics covered
   - Top 3 key learnings
   - Hashtags
5. **Post to X**: Uploads the image and posts the tweet with relevant hashtags

### Tweet Format

```
Day {X} of my coding journey! 🚀

Today I learned about: {topics}

Key takeaway: {first learning}

#{topics} #100DaysOfCode #LearnInPublic
```

## 🧪 Testing Locally

You can test the automation locally without posting to X:

```bash
cd scripts
npm install
node post-to-x.js --dry-run
```

This will:
- Parse the latest blog post
- Generate the image (saved in `scripts/output/`)
- Show the tweet text that would be posted
- **NOT** actually post to X

To test with actual posting (requires environment variables):

```bash
export TWITTER_API_KEY="your_key"
export TWITTER_API_SECRET="your_secret"
export TWITTER_ACCESS_TOKEN="your_token"
export TWITTER_ACCESS_SECRET="your_token_secret"
node post-to-x.js
```

## 🎨 Customizing the Image Design

Edit the `generateImage()` function in `scripts/post-to-x.js`:

- **Colors**: Change gradient colors in the `gradient.addColorStop()` calls
- **Layout**: Adjust text positioning by changing x/y coordinates
- **Font sizes**: Modify the `ctx.font` values
- **Content**: Add or remove sections as needed

### Example Color Schemes

**Purple Theme:**
```javascript
gradient.addColorStop(0, '#581c87');
gradient.addColorStop(0.5, '#9333ea');
gradient.addColorStop(1, '#c084fc');
```

**Green Theme:**
```javascript
gradient.addColorStop(0, '#065f46');
gradient.addColorStop(0.5, '#10b981');
gradient.addColorStop(1, '#6ee7b7');
```

## ⏰ Customizing the Schedule

Edit the cron schedule in `.github/workflows/daily-x-post.yml`:

```yaml
on:
  schedule:
    - cron: '0 20 * * *'  # 8:00 PM UTC daily
```

Common schedules:
- `'0 12 * * *'` - Daily at 12:00 PM UTC
- `'0 8 * * *'` - Daily at 8:00 AM UTC
- `'0 18 * * 1-5'` - Weekdays at 6:00 PM UTC

Use [crontab.guru](https://crontab.guru/) to create custom schedules.

## 🔧 Manual Triggering

You can manually trigger the workflow anytime:

1. Go to **Actions** tab in your GitHub repository
2. Select **Daily X.com Learning Post** workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## 📝 Blog Post Format

The automation expects blog posts to follow this format:

```markdown
---
date: 2025-08-17
topics: [nextjs, authentication, state-management]
day: 30
---

# Day 30 – Title

## ✅ What I Worked On
- Item 1
- Item 2

## 📚 What I Learned
- Learning point 1
- Learning point 2
- Learning point 3

## ❌ Blockers
- Blocker 1

## 🧠 Reflection
Reflection text here.
```

## 🐛 Troubleshooting

### Workflow not running
- Check if GitHub Actions is enabled
- Verify the cron schedule is correct
- Check the Actions tab for error messages

### "Missing required environment variables"
- Verify all 4 Twitter secrets are added to repository settings
- Secret names must match exactly (case-sensitive)

### "Error: No blog posts found"
- Ensure you have at least one `.md` file in the `blogs/` directory
- Check file naming follows the pattern: `YYYY-MM-DD---title.md`

### Image generation fails
- The `canvas` package requires system dependencies
- GitHub Actions runners have these pre-installed
- For local testing on Linux: `sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++`
- For local testing on macOS: `brew install pkg-config cairo pango libpng jpeg giflib librsvg`

### Twitter API errors
- Verify your app has **Read and Write** permissions
- Regenerate tokens if you changed permissions after creating them
- Check [Twitter API Status](https://api.twitterstat.us/)

## 📊 Monitoring

View workflow runs and logs:
1. Go to **Actions** tab
2. Click on a workflow run
3. View logs for each step
4. Download generated images from artifacts (available for debugging)

## 🎯 Tips for Maximum Engagement

1. **Post at optimal times**: Adjust cron schedule based on your audience timezone
2. **Use relevant hashtags**: The automation adds topic-based hashtags automatically
3. **Write clear learnings**: The first learning becomes your "key takeaway" in the tweet
4. **Be consistent**: Daily posts build momentum and followers
5. **Engage**: Reply to comments on your automated posts

## 🔐 Security Notes

- Never commit API credentials to the repository
- Always use GitHub Secrets for sensitive data
- Regularly rotate your API keys
- Monitor your API usage in Twitter Developer Portal

## 📚 Additional Resources

- [Twitter API Documentation](https://developer.twitter.com/en/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cron Schedule Guide](https://crontab.guru/)

---

Happy learning and sharing! 🚀
