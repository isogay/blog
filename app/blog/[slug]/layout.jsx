import styles from './blog-post.module.css'

export default function BlogPostLayout({ children }) {
  return (
    <article className={styles.blogPost}>
      <div className={styles.container}>
        {children}
      </div>
    </article>
  )
}
