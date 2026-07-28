'use client'

import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/lib/blogPosts'
import styles from './blog.module.css'

export const metadata = {
  title: 'Blog - All Posts',
  description: 'Browse all blog posts about technology, travel, lifestyle, and food.',
}

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.header}>
        <h1>All Blog Posts</h1>
        <p>Explore articles about technology, travel, lifestyle, and food</p>
      </div>

      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
