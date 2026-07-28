# 🚀 How to Deploy Your Blog

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `my-blog` (or whatever you want)
3. Make it Public or Private
4. **DON'T** add README, .gitignore, or license (we have them)
5. Click "Create repository"

## Step 2: Push to GitHub

Open terminal in your blog folder (`d:\tung\`) and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial blog setup"

# Add GitHub as remote (REPLACE with YOUR repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example** (replace with your actual username and repo name):
```bash
git remote add origin https://github.com/johnDoe/my-blog.git
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Website

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and use your GitHub account
3. Click "Add New..." → "Project"
4. Select your blog repository
5. Click "Deploy"
6. Wait 1-2 minutes
7. Done! You'll get a URL like: `your-blog.vercel.app`

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: my-blog
# - Which directory: ./ (press Enter)
# - Build command: npm run build (press Enter)
# - Output directory: .next (press Enter)

# Done! You'll get your live URL
```

## Step 4: Future Updates

After making changes to your blog:

```bash
# Add changes
git add .

# Commit with message
git commit -m "Added new blog post"

# Push to GitHub
git push

# Vercel will automatically deploy! 🎉
```

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

---

## Troubleshooting

**Git not found?**
- Install Git: [git-scm.com](https://git-scm.com/downloads)

**Permission denied?**
- Make sure you're signed into GitHub
- Check repository URL is correct

**Build failing on Vercel?**
- Run `npm run build` locally first to check for errors
- Check all files are committed

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+R)
- Wait a minute for deployment to complete

---

## Quick Reference

```bash
# Check git status
git status

# See changes
git diff

# Create new branch
git checkout -b new-feature

# Switch back to main
git checkout main

# Pull latest changes
git pull

# View commit history
git log
```

That's it! Your blog is live! 🎉
