import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: '404 - Page Not Found | Prosper XO',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorDescription}>
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className={styles.suggestions}>
          <p>Here are some helpful links:</p>
          <ul>
            <li>
              <Link href="/">Back to Home</Link>
            </li>
            <li>
              <Link href="/welcome">Welcome Page</Link>
            </li>
            <li>
              <Link href="/why-prosper">Why Prosper</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className={styles.ctaSection}>
          <p>Need help? Contact us at:</p>
          <a href="mailto:info@prosperxo.com" className={styles.emailLink}>
            info@prosperxo.com
          </a>
        </div>
      </div>
    </main>
  );
}