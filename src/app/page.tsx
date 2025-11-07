import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Prosper XO - Welcome to the Movement',
  description:
    'Prosper XO is a community platform connecting artists, creators, and changemakers.',
  openGraph: {
    title: 'Prosper XO - Welcome to the Movement',
    description:
      'Prosper XO is a community platform connecting artists, creators, and changemakers.',
    url: 'https://prosperxo.com',
    siteName: 'Prosper XO',
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO',
      },
    ],
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className={styles.splashContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Prosper XO</h1>
          <p className={styles.heroSubtitle}>
            A movement for artists, creators, and changemakers
          </p>
          <p className={styles.heroDescription}>
            Join a community dedicated to creative prosperity and positive change
          </p>
        </div>

        <div className={styles.videoContainer}>
          <video
            controls
            poster="/assets/video/prosperxo-video-launchvideo-preview.jpg"
            className={styles.splashVideo}
          >
            <source src="/assets/video/prosperxo-video-launchvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to join?</h2>
          <p>Become part of the Prosper XO community</p>
          <div className={styles.ctaButtons}>
            <a href="/welcome" className={`${styles.button} ${styles.buttonPrimary}`}>
              Get Started
            </a>
            <a href="/why-prosper" className={`${styles.button} ${styles.buttonSecondary}`}>
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}