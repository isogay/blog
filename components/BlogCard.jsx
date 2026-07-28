'use client'

import Link from 'next/link'
import { CalendarBlank, User } from 'phosphor-react'
import styles from './BlogCard.module.css'

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      {post.image && (
        <div className={styles.cardImage}>
          <img src={post.image} alt={post.title} />
        </div>
      )}
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{post.title}</h2>
        
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <CalendarBlank size={16} weight="duotone" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
