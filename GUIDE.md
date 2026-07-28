# Blog Setup Guide

## 🎨 Adding Your Avatar

1. Replace `/public/avatar.png` with your own image (PNG, SVG, or JPG)
2. Update the avatar reference in `app/page.jsx` if using a different filename

## 📝 Creating Blog Posts

### Step 1: Create a New Post Folder

Create a new folder in `app/blog/` with your post slug:
```
app/blog/my-post-title/
```

### Step 2: Create page.mdx File

Create `page.mdx` inside your post folder:

```mdx
export const metadata = {
  title: 'My Post Title',
  date: 'July 28, 2026',
}

# My Post Title

Your content here with **Markdown** support!

## Subheading

- Lists
- Code blocks
- Images: ![Alt text](/images/myimage.png)

\`\`\`javascript
const code = 'example';
\`\`\`
```

### Step 3: Add to Blog Posts Array

Edit `lib/blogPosts.js`:

```javascript
export const blogPosts = [
  {
    slug: 'my-post-title',  // Must match folder name
    title: 'My Post Title',
    date: 'July 28, 2026',
    image: '/images/post1.png'  // Optional
  }
]
```

### Step 4: Add Images (Optional)

1. Place images in `/public/images/`
2. Reference in MDX: `![Description](/images/yourimage.png)`
3. Or use in blogPosts array: `image: '/images/post1.png'`

## 🖼️ Image Guidelines

- **Supported formats**: PNG, SVG, JPG
- **Recommended size**: 800x600px for post covers
- **Location**: `/public/images/`
- **Usage**: `/images/filename.png` (no "public" in path)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-blog.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your blog is live 🎉

### Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

## 📦 Git Commands

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Create new branch
git checkout -b your-branch-name

# Switch branches
git checkout main
```

## 🎨 Customization

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --accent-primary: #8b5cf6;     /* Your main color */
  --accent-secondary: #a78bfa;   /* Secondary color */
}
```

### Update Social Links

Edit `app/page.jsx` - change the GitHub/Twitter URLs

### Modify Navigation

Edit `components/Navbar.jsx` to add/remove links

## 📁 Project Structure

```
d:\tung\
├── app/
│   ├── blog/
│   │   ├── [slug]/          # Dynamic route for posts
│   │   └── page.jsx         # Blog listing page
│   ├── globals.css          # Global styles
│   ├── layout.jsx           # Root layout
│   └── page.jsx             # Homepage
├── components/
│   ├── Navbar.jsx           # Navigation
│   ├── Footer.jsx           # Footer
│   └── BlogCard.jsx         # Post card
├── lib/
│   └── blogPosts.js         # Your posts array
├── public/
│   ├── images/              # Your images here
│   └── avatar.png           # Your avatar
└── package.json
```

## 🔧 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 💡 Tips

1. **SEO**: Each post's metadata (title, description) is automatically used for SEO
2. **Images**: Use descriptive filenames (e.g., `web-dev-tutorial.png` not `img1.png`)
3. **Slugs**: Use lowercase with hyphens (e.g., `my-first-post` not `My First Post`)
4. **Dates**: Keep consistent format (e.g., `July 28, 2026`)

## 🐛 Common Issues

**Images not showing?**
- Make sure path starts with `/images/` not `/public/images/`
- Check file extension matches actual file

**Post not appearing?**
- Check slug in `blogPosts.js` matches folder name
- Restart dev server after creating new post

**Build failing?**
- Run `npm run build` locally to check for errors
- Check all MDX files have valid frontmatter

---

Need help? Check [Next.js Docs](https://nextjs.org/docs) or [MDX Docs](https://mdxjs.com/)
