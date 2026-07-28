# Example Blog Post Template

## File Location
`app/blog/my-first-post/page.mdx`

## Template

```mdx
export const metadata = {
  title: 'My First Blog Post',
  date: 'July 28, 2026',
}

# My First Blog Post

This is my introduction paragraph. Keep it engaging and tell readers what they'll learn.

## What You'll Learn

In this post, I'll cover:
- How to do something cool
- Why it matters
- Practical examples you can use

## Getting Started

Here's a simple code example:

\`\`\`javascript
const greeting = 'Hello World!';
console.log(greeting);
\`\`\`

## Adding Images

You can add images from your `/public/images/` folder:

![My cool diagram](/images/diagram.png)

Or use SVG:

![Logo](/images/logo.svg)

## Key Takeaways

- **Important point 1**: Explanation here
- **Important point 2**: More details
- **Important point 3**: Final thoughts

## Code Blocks

Inline code: `const x = 10`

Block code:
\`\`\`typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 25
};
\`\`\`

## Lists

Unordered:
- Item 1
- Item 2
  - Nested item
  - Another nested

Ordered:
1. First step
2. Second step
3. Third step

## Quotes

> This is an important quote that emphasizes a key point in your article.

## Links

[Check out Next.js](https://nextjs.org)

## Conclusion

Wrap up your post with key takeaways and maybe a call to action.

---

*Published on July 28, 2026*
```

## Don't Forget!

After creating the MDX file, add it to `lib/blogPosts.js`:

```javascript
export const blogPosts = [
  {
    slug: 'my-first-post',      // Must match folder name!
    title: 'My First Blog Post',
    date: 'July 28, 2026',
    image: '/images/post-cover.png'  // Optional
  }
]
```

## Tips

1. **Slug**: Use lowercase, hyphens, no spaces (`my-first-post` not `My First Post`)
2. **Images**: Place in `/public/images/`, reference as `/images/name.png`
3. **Date format**: Keep consistent (e.g., `July 28, 2026`)
4. **Metadata**: The `export const metadata = {...}` must be at the TOP of the file

## Markdown Cheatsheet

- `# H1` → Large heading
- `## H2` → Medium heading
- `**bold**` → **bold text**
- `*italic*` → *italic text*
- `` `code` `` → inline code
- `![alt](url)` → image
- `[text](url)` → link
- `> quote` → blockquote
- `- item` → bullet list
- `1. item` → numbered list

Happy writing! ✍️
