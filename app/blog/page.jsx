import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/lib/blogPosts'
import styles from './blog.module.css'

export const metadata = {
  title: 'thuaan blog',
  description: 'my first cutie blog website =3',
}

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.header}>
        <h1>thuaan blog</h1>
        <p>dang gi dang nay btw</p>
      </div>

      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
