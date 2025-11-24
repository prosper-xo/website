import { Metadata } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog | Prosper XO',
  description:
    'Stay updated with all that is going on with Prosper XO. Read our latest blog posts about music, artists, and our community.',
  openGraph: {
    title: 'Blog | Prosper XO',
    description:
      'Stay updated with all that is going on with Prosper XO. Read our latest blog posts about music, artists, and our community.',
    type: 'website',
    url: 'https://prosper-xo.org/blog',
  },
};

export default function BlogPage() {
  // Filter out draft posts and sort by date (newest first)
  const publishedPosts = allPosts
    .filter((post: Post) => !post.draft)
    .sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <h1>Prosper XO Blog</h1>
        <p>Stay updated with our latest news and insights</p>
      </div>

      {publishedPosts.length === 0 ? (
        <div className={styles.noPosts}>
          <p>No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className={styles.blogPosts}>
          {publishedPosts.map((post: Post) => (
            <article key={post._id} className={styles.blogPostPreview}>
              {post.cover_image && (
                <div className={styles.postPreviewImage}>
                  <Link href={post.url}>
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                    />
                  </Link>
                </div>
              )}

              <div className={styles.postPreviewContent}>
                <h2 className={styles.postPreviewTitle}>
                  <Link href={post.url}>{post.title}</Link>
                </h2>

                {post.summary && (
                  <p className={styles.postPreviewSummary}>{post.summary}</p>
                )}

                <div className={styles.postPreviewMeta}>
                  <time
                    className={styles.postPreviewDate}
                    dateTime={new Date(post.date).toISOString()}
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  {post.tags && post.tags.length > 0 && (
                    <div className={styles.postPreviewTags}>
                      {post.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <Link href={post.url} className={styles.readMore}>
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}