const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { createCanvas } = require('@napi-rs/canvas');
const { TwitterApi } = require('twitter-api-v2');

// Configuration
const BLOGS_DIR = path.join(__dirname, '../blogs');
const OUTPUT_DIR = path.join(__dirname, 'output');
const DRY_RUN = process.argv.includes('--dry-run');

// Image generation constants
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 675;
const MAX_LEARNINGS_TO_SHOW = 3;
const MAX_LEARNING_LENGTH = 70;

// Tweet constants
const TWITTER_CHAR_LIMIT = 280;
const MAX_TWEET_LENGTH = 270; // Leave buffer for safety

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Get the most recent blog post
 */
function getLatestBlogPost() {
  const files = fs.readdirSync(BLOGS_DIR)
    .filter(file => file.endsWith('.md'))
    .sort()
    .reverse(); // Most recent first
  
  if (files.length === 0) {
    throw new Error('No blog posts found');
  }
  
  const latestFile = files[0];
  const filePath = path.join(BLOGS_DIR, latestFile);
  const content = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(content);
  
  return {
    filename: latestFile,
    date: parsed.data.date,
    topics: parsed.data.topics || [],
    day: parsed.data.day,
    content: parsed.content,
    data: parsed.data
  };
}

/**
 * Extract key learnings from blog content
 */
function extractLearnings(content) {
  const lines = content.split('\n');
  const learnings = [];
  let inLearningSection = false;
  
  for (const line of lines) {
    if (line.includes('## 📚 What I Learned')) {
      inLearningSection = true;
      continue;
    }
    if (inLearningSection && line.startsWith('## ')) {
      break;
    }
    if (inLearningSection && line.trim().startsWith('-')) {
      learnings.push(line.trim().substring(1).trim());
    }
  }
  
  return learnings;
}

/**
 * Generate an attractive image with the learning summary
 */
async function generateImage(blogPost, learnings) {
  const canvas = createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
  gradient.addColorStop(0, '#1e3a8a'); // Dark blue
  gradient.addColorStop(0.5, '#3b82f6'); // Blue
  gradient.addColorStop(1, '#60a5fa'); // Light blue
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
  
  // Add decorative elements
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.arc(IMAGE_WIDTH - 100, 100, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, IMAGE_HEIGHT - 100, 200, 0, Math.PI * 2);
  ctx.fill();
  
  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText(`Day ${blogPost.day} - Learning Journey`, 60, 100);
  
  // Date
  ctx.font = '28px sans-serif';
  ctx.fillStyle = '#e0e7ff';
  ctx.fillText(`📅 ${blogPost.date}`, 60, 150);
  
  // Topics
  ctx.font = 'bold 32px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('🔖 Topics:', 60, 220);
  ctx.font = '28px sans-serif';
  const topicsText = blogPost.topics.join(', ');
  ctx.fillText(topicsText, 60, 260);
  
  // Learnings
  ctx.font = 'bold 32px sans-serif';
  ctx.fillText('📚 Key Learnings:', 60, 330);
  
  ctx.font = '24px sans-serif';
  let y = 380;
  const maxLearnings = Math.min(learnings.length, MAX_LEARNINGS_TO_SHOW);
  for (let i = 0; i < maxLearnings; i++) {
    const learning = learnings[i];
    const shortLearning = learning.length > MAX_LEARNING_LENGTH 
      ? learning.substring(0, MAX_LEARNING_LENGTH - 3) + '...' 
      : learning;
    ctx.fillText(`• ${shortLearning}`, 80, y);
    y += 40;
  }
  
  // Footer
  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = '#e0e7ff';
  ctx.fillText('🚀 Learning in Public', 60, IMAGE_HEIGHT - 80);
  ctx.font = '20px sans-serif';
  ctx.fillText('#100DaysOfCode #LearnInPublic #DevJourney', 60, IMAGE_HEIGHT - 40);
  
  // Save the image
  const outputPath = path.join(OUTPUT_DIR, 'daily-learning.png');
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  
  return outputPath;
}

/**
 * Create tweet text
 */
function createTweetText(blogPost, learnings) {
  const topicsHashtags = blogPost.topics
    .map(topic => `#${topic.replace(/[^a-zA-Z0-9]/g, '')}`)
    .join(' ');
  
  let tweet = `Day ${blogPost.day} of my coding journey! 🚀\n\n`;
  tweet += `Today I learned about: ${blogPost.topics.join(', ')}\n\n`;
  
  if (learnings.length > 0) {
    tweet += `Key takeaway: ${learnings[0]}\n\n`;
  }
  
  tweet += `${topicsHashtags} #100DaysOfCode #LearnInPublic`;
  
  // Twitter has a 280 character limit, so truncate if needed
  if (tweet.length > MAX_TWEET_LENGTH) {
    tweet = tweet.substring(0, MAX_TWEET_LENGTH - 3) + '...';
  }
  
  return tweet;
}

/**
 * Post to X.com (Twitter)
 */
async function postToX(tweetText, imagePath) {
  if (DRY_RUN) {
    console.log('🧪 DRY RUN MODE - Would post:');
    console.log('Tweet text:', tweetText);
    console.log('Image path:', imagePath);
    return;
  }
  
  // Check for required environment variables
  const requiredEnvVars = [
    'TWITTER_API_KEY',
    'TWITTER_API_SECRET',
    'TWITTER_ACCESS_TOKEN',
    'TWITTER_ACCESS_SECRET'
  ];
  
  const missing = requiredEnvVars.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
  
  // Initialize Twitter client
  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
  });
  
  // Upload image
  console.log('📤 Uploading image to X...');
  const mediaId = await client.v1.uploadMedia(imagePath);
  
  // Post tweet with image
  console.log('🐦 Posting tweet to X...');
  const tweet = await client.v2.tweet({
    text: tweetText,
    media: { media_ids: [mediaId] }
  });
  
  console.log('✅ Successfully posted to X!');
  console.log('Tweet ID:', tweet.data.id);
  console.log('Tweet URL:', `https://x.com/i/web/status/${tweet.data.id}`);
  
  return tweet;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Starting X.com daily post automation...\n');
    
    // Get latest blog post
    console.log('📖 Finding latest blog post...');
    const blogPost = getLatestBlogPost();
    console.log(`Found: ${blogPost.filename}`);
    console.log(`Date: ${blogPost.date}, Day: ${blogPost.day}`);
    console.log(`Topics: ${blogPost.topics.join(', ')}\n`);
    
    // Extract learnings
    console.log('🔍 Extracting key learnings...');
    const learnings = extractLearnings(blogPost.content);
    console.log(`Found ${learnings.length} learnings\n`);
    
    // Generate image
    console.log('🎨 Generating interactive image...');
    const imagePath = await generateImage(blogPost, learnings);
    console.log(`Image saved to: ${imagePath}\n`);
    
    // Create tweet text
    console.log('✍️ Creating tweet text...');
    const tweetText = createTweetText(blogPost, learnings);
    console.log('Tweet preview:');
    console.log('---');
    console.log(tweetText);
    console.log('---\n');
    
    // Post to X
    await postToX(tweetText, imagePath);
    
    console.log('\n🎉 All done!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = { getLatestBlogPost, extractLearnings, generateImage, createTweetText };
