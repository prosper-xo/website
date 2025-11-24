import { Metadata } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from './page.module.css';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Prosper XO',
    };
  }

  return {
    title: `${post.title} | Prosper XO Blog`,
    description: post.summary || `Read ${post.title} on the Prosper XO blog`,
    openGraph: {
      title: post.title,
      description: post.summary || `Read ${post.title} on the Prosper XO blog`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Prosper XO'],
      url: `https://prosper-xo.org${post.url}`,
      images: post.cover_image
        ? [
            {
              url: post.cover_image,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = allPosts.find((post: Post) => post.slug === params.slug);

  if (!post || post.draft) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className={styles.blogPost}>
      <div className={styles.postHeader}>
        {post.cover_image && (
          <div className={styles.postCover}>
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        )}

        <div className={styles.postMeta}>
          <h1 className={styles.postTitle}>{post.title}</h1>

          {post.summary && <p className={styles.postSummary}>{post.summary}</p>}

          <div className={styles.postDetails}>
            <time
              className={styles.postDate}
              dateTime={new Date(post.date).toISOString()}
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>

            {post.tags && post.tags.length > 0 && (
              <div className={styles.postTags}>
                {post.tags.map((tag: string) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.readingTime && (
            <p className={styles.readingTime}>{post.readingTime} min read</p>
          )}
        </div>
      </div>

      <div className={styles.postContent}>
        <MDXContent />
      </div>

      <div className={styles.postNavigation}>
        <Link href="/blog" className={styles.backToBlog}>
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}